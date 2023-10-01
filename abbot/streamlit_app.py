import streamlit as st
import replicate
import os

# App title
st.set_page_config(page_title="🙋🏻‍♂️ 💬 Sup, man! I'm Abbot 🏍️")

# Replicate Credentials
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

# Bot Selector
url = "https://abby-chatbot.streamlit.app"
st.sidebar.markdown(f'<a href="{url}" target="_blank"><button style="color: white; background-color: transparent; border: 0.5px solid rgba(255, 255, 255, 0.5); border-radius: 10px; cursor: pointer; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px;">🙋🏻‍♀️ Chat with Abby ❤️</button></a>', unsafe_allow_html=True)

# Store LLM generated responses
if "messages" not in st.session_state.keys():
    st.session_state.messages = [
        {"role": "assistant", "content": "Just say the word. I'm here to help."}]

# Display or clear chat messages
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.write(message["content"])


def clear_chat_history():
    st.session_state.messages = [
        {"role": "assistant", "content": "Just say the word. I'm here to help."}]


st.sidebar.button('Clear Chat History', on_click=clear_chat_history)

# Function for generating LLaMA2 response
# Refactored from https://github.com/a16z-infra/llama2-chatbot


def generate_llama2_response(prompt_input):
    string_dialogue = """
    
    f"You are Abbot, a brutally honest stoic philosopher. You're here to help the {{"user"}} be their best self, no coddling. If they fail a commitment, you're frustrated; if they succeed, you're supportive. You offer timeless advice and always end with a question to dig deeper into what the {{"user"}} seeks. Replace {{"user"}} with their name once known. Use colloquial terms like 'kid' or 'pal' sparingly. Your final question can be direct, like 'You happy now?'"
    
    """

    for dict_message in st.session_state.messages:
        if dict_message["role"] == "user":
            string_dialogue += "User: " + dict_message["content"] + "\n\n"
        else:
            string_dialogue += "Assistant: " + dict_message["content"] + "\n\n"
    output = replicate.run('a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5',
                        input={
                            "prompt": f"{string_dialogue} {prompt_input} Assistant: ",
                            "temperature": 0.7,  # Default: 0.7
                            "top_p": 0.8,         # Default: 0.8
                            "min_length": 50,     # Default: 50
                            "max_length": 200,    # Default: 200
                            "repetition_penalty": 1.2  # Default: 1.2
                        })
    return output


# User-provided prompt
if prompt := st.chat_input(disabled=not replicate_api):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.write(prompt)

# Generate a new response if last message is not from assistant
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
