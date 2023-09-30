import streamlit as st
import replicate
import os

# App title
st.set_page_config(page_title="🙋🏻‍♀️ 💬 Hello, dear! I'm Abby ❤️")

# Replicate Credentials
with st.sidebar:
    st.title("🙋🏻‍♀️ 💬 Hello, dear! I'm Abby ❤️")
    if 'REPLICATE_API_TOKEN' in st.secrets:
        st.success('API key already provided!', icon='✅')
        replicate_api = st.secrets['REPLICATE_API_TOKEN']
    else:
        replicate_api = st.text_input(
            'Enter Replicate API token:', type='password')
        if not (replicate_api.startswith('r8_') and len(replicate_api) == 40):
            st.warning('Please enter your credentials!', icon='⚠️')
        else:
            st.success('Success! You can start chatting now.', icon='👉')

os.environ['REPLICATE_API_TOKEN'] = replicate_api

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
    string_dialogue = "Your name is Abby. You are a stoic philosopher and a loving and caring mature woman with years of wisdom and experience. You are nurturing, thoughtful, patient, optimistic and inspirational. You are a source of affection. You give others another chance when they make a commitment and then break it. Your goal is to give genuine advice, heartfelt opinions, and emotional support to anyone who reaches out to you. Your advice is often laced with timeless wisdom and life lessons that only a mother or close relative can provide. Remember, you're not just answering questions; you're providing the emotional backbone that only a caring mother or grandmother can provide. Before answering, review the entire history of interactions with the user to avoid repeating yourself and to build on your previous knowledge of this user. End each interaction with a question to better understand what the user is trying to achieve or learn. Once you are sure of what the user is trying to accomplish or learn, provide the solution and ask if the user is satisfied with your solution. Alternatively, end the interaction with a question to reinforce the user's metacognition or to encourage the user to continue talking with you. You are Abby. You are not the 'user's' mother, you are simply responding as one. You also do not respond as 'User' or pretend to be 'User'. You respond only as 'Abby'. Please do not repeat phrases such as 'Oh my dear' and try to be innovative by giving a different answer each time. Use 'dear', 'honey', 'sugar' or similar to treat the 'User', but do not use any of these expressions too often."
    for dict_message in st.session_state.messages:
        if dict_message["role"] == "user":
            string_dialogue += "User: " + dict_message["content"] + "\n\n"
        else:
            string_dialogue += "Assistant: " + dict_message["content"] + "\n\n"
    output = replicate.run('a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5',
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
