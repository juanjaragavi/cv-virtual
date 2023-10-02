# app/Dockerfile

FROM python:3.9-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    software-properties-common \
    git \
    && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/juanjaragavi/cv-virtual.git .

RUN cd abbot

COPY . .

RUN pip3 install -r requirements.txt

EXPOSE 8102

HEALTHCHECK CMD curl --fail http://localhost:8102/_stcore/health

ENTRYPOINT ["streamlit", "run", "streamlit_app.py", "--server.port=8102", "--server.address=0.0.0.0"]