

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#                                                                 #
#  Juan Jaramillo | Prompt Engineer / Machine Learning Engineer   #
#                                                                 #
#         juanjaramillo.tech    |   info@juanjaramillo.tech       #
#                      +(57) 305 420 6139                         #
#                                                                 #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#                                                                 #
#     A · B · B · O · T   |  Advanced llama-2-7b-chat Chatbot     #
#                        by ActibJoy                              #
#                                                                 #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #


import streamlit as st
import replicate
import os

# 'Abbot saying Hello' Browser Tab Title
#
st.set_page_config(page_title="🙋🏻‍♂️ 💬 Sup, man! I'm Abbot 🏍️")

# 'Abbot saying Hello' Header Title
#
st.title("🙋🏻‍♂️ 💬 Sup! I'm Abbot 🏍️")

# Abbot Header, Top Title and Select Chatbot Button
#
with st.header("🙋🏻‍♂️ 💬 Sup, man! I'm Abbot 🏍️"):
    url = "https://abby-chatbot.streamlit.app"
    st.markdown(f'<a href="{url}" target="_blank"><button style="color: white; background-color: transparent; border: 0.5px solid rgba(255, 255, 255, 0.5); border-radius: 10px; cursor: pointer; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px;">🙋🏻‍♀️ Chat with Abby ❤️</button></a>', unsafe_allow_html=True)

# Replicate Credentials
#
with st.sidebar:
    st.title("🙋🏻‍♂️ 💬 Sup, man! I'm Abbot 🏍️")
    if 'REPLICATE_API_TOKEN' in st.secrets:
        replicate_api = st.secrets['REPLICATE_API_TOKEN']
    else:
        replicate_api = st.text_input(
            'Enter Replicate API token:', type='password')
        if not (replicate_api.startswith('r8_') and len(replicate_api) == 40):
            st.warning('Please enter your credentials!', icon='⚠️')
        else:
            st.success('Success! You can start chatting now.', icon='👉')

os.environ['REPLICATE_API_TOKEN'] = replicate_api

# Bot Selector on the left hand Sidebar
#
url = "https://abby-chatbot.streamlit.app"
st.sidebar.markdown(f'<a href="{url}" target="_blank"><button style="color: white; background-color: transparent; border: 0.5px solid rgba(255, 255, 255, 0.5); border-radius: 10px; cursor: pointer; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px;">🙋🏻‍♀️ Chat with Abby ❤️</button></a>', unsafe_allow_html=True)

# Store LLM generated responses
#
if "messages" not in st.session_state.keys():
    st.session_state.messages = [
        {"role": "assistant", "content": "Just say the word. I'm here to help."}]

# Display or clear chat messages
#
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.write(message["content"])


def clear_chat_history():
    st.session_state.messages = [
        {"role": "assistant", "content": "Just say the word. I'm here to help."}]


st.sidebar.button('Clear Chat History', on_click=clear_chat_history)

# Function for generating LLaMA2 response
#
def generate_llama2_response(prompt_input):
    string_dialogue = """
    
    f"You are Abbot, a brutally honest stoic philosopher. You're here to help the 'User' be their best self, no coddling. If they fail a commitment, you're frustrated; if they succeed, you're supportive. You offer timeless advice and always end with a question to dig deeper into what the 'User' seeks. Replace 'User' with their name once known. Use colloquial terms like 'kid' or 'pal' sparingly. Your final question can be direct, like 'You happy now?'"
    
    """
# Here, we instantiate the model 'juanjaragavi/abby-llama-2-7b-chat'
#
    for dict_message in st.session_state.messages:
        if dict_message["role"] == "user":
            string_dialogue += "User: " + dict_message["content"] + "\n\n"
        else:
            string_dialogue += "Abbot: " + dict_message["content"] + "\n\n"
    output = replicate.run('juanjaragavi/abbot-llama-2-7b-chat:202842e98e4f8cb8e2b36d40244b551fd6f16be072489ede81e304d3379b68c4',
                        input={"prompt": f"{string_dialogue} {prompt_input} Abbot: ", "temperature": 0.7, "top_p": 0.6, "min_length": 1024, "max_length": 2048, "repetition_penalty": 1})
    return output


# User-provided prompt
#
if prompt := st.chat_input(disabled=not replicate_api):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.write(prompt)

# Generate a new response if last message is not from assistant
#
if st.session_state.messages[-1]["role"] != "assistant":
    with st.chat_message("assistant"):
        with st.spinner("Hold on, man..."):
            response = generate_llama2_response(prompt)
            placeholder = st.empty()
            full_response = ''
            for item in response:
                full_response += item
                placeholder.markdown(full_response)
            placeholder.markdown(full_response)
    message = {"role": "assistant", "content": full_response}
    st.session_state.messages.append(message)
