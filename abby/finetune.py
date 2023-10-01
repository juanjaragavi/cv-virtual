import replicate

training = replicate.trainings.create(
    version="a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5",
    input={
        "train_data": "https://gist.githubusercontent.com/nateraw/055c55b000e4c37d43ce8eb142ccc0a2/raw/d13853512fc83e8c656a3e8b6e1270dd3c398e77/samsum.jsonl",
        "num_train_epochs": 1,
    },
    destination="juanjaragavi/llama2-summarizer"
)

print(training)