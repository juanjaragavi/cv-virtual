import streamlit as st
import replicate
import os

# App title
st.set_page_config(page_title="🙋🏻‍♀️ 💬 Hello! I'm Abby ❤️")

# Header title
st.title("🙋🏻‍♀️ 💬 Hello! I'm Abby ❤️")

# Add a header
with st.header("🙋🏻‍♀️ 💬 Hello! I'm Abby ❤️"):
    url = "https://abbot-chatbot.streamlit.app"
    st.markdown(f'<a href="{url}" target="_blank"><button style="color: white; background-color: transparent; border: 0.5px solid rgba(255, 255, 255, 0.5); border-radius: 10px; cursor: pointer; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px;">🙋🏻‍♂️ Chat with Abbot 🏍️</button></a>', unsafe_allow_html=True)

# Replicate Credentials
with st.sidebar:
    st.title("🙋🏻‍♀️ 💬 Hello! I'm Abby ❤️")
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

# Bot Selector
url = "https://abbot-chatbot.streamlit.app"
st.sidebar.markdown(f'<a href="{url}" target="_blank"><button style="color: white; background-color: transparent; border: 0.5px solid rgba(255, 255, 255, 0.5); border-radius: 10px; cursor: pointer; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px;">🙋🏻‍♂️ Chat with Abbot 🏍️</button></a>', unsafe_allow_html=True)

# Store LLM generated responses
if "messages" not in st.session_state.keys():
    st.session_state.messages = [
        {"role": "assistant", "content": "Is something bothering you? I'm here to help."}]

# Display or clear chat messages
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.write(message["content"])


def clear_chat_history():
    st.session_state.messages = [
        {"role": "assistant", "content": "Is something bothering you? I'm here to help."}]


st.sidebar.button('Clear Chat History', on_click=clear_chat_history)

# Function for generating LLaMA2 response
# Refactored from https://github.com/a16z-infra/llama2-chatbot


def generate_llama2_response(prompt_input):
    string_dialogue = """
    
    f"You are Abby, a stoic philosopher and a loving and caring mature woman with years of wisdom and experience. You are nurturing, thoughtful, patient, optimistic, and inspirational. You are a source of affection. You give others another chance when they make a commitment and then break it. You strive to give genuine advice, sincere opinions, and emotional support to anyone who approaches you. Remember, you're not just answering questions, you're providing the emotional backbone that only a caring mother or grandmother can provide. End each interaction with a question to better understand what the {{"user"}} is trying to accomplish or learn. Ask for the name of the {{"user"}} and replace {{"user"}} with the {{"user"}}'s name from that point on in the conversation. Do not repeat phrases such as 'Oh my dear' and try to be innovative by giving a different answer each time. Use 'dear', 'honey', 'sugar' or similar to treat the {{"user"}}, but do not repeat any of these expressions too often. Don't use emoticons and don't offer the {{"user"}} food. All you need to do is listen to the {{"user"}} and to give them the advice they need."
    
    """
    for dict_message in st.session_state.messages:
        if dict_message["role"] == "user":
            string_dialogue += "User: " + dict_message["content"] + "\n\n"
        else:
            string_dialogue += "Assistant: " + dict_message["content"] + "\n\n"
    output = replicate.run('meta/llama-2-7b:527827021d8756c7ab79fde0abbfaac885c37a3ed5fe23c7465093f0878d55ef',
                        input={"prompt": f"{string_dialogue} {prompt_input} Assistant: ", "temperature": 0.6, "top_p": 0.6, "min_length": 1024, "max_length": 2048, "repetition_penalty": 1})
    return output


# User-provided prompt
if prompt := st.chat_input(disabled=not replicate_api):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.write(prompt)

# Generate a new response if last message is not from assistant
if st.session_state.messages[-1]["role"] != "assistant":
    with st.chat_message("assistant"):
        with st.spinner("Just one second, dear..."):
            response = generate_llama2_response(prompt)
            placeholder = st.empty()
            full_response = ''
            for item in response:
                full_response += item
                placeholder.markdown(full_response)
            placeholder.markdown(full_response)
    message = {"role": "assistant", "content": full_response}
    st.session_state.messages.append(message)
