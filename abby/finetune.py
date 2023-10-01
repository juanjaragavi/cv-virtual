import replicate

training = replicate.trainings.create(
    version="meta/llama-2-7b:527827021d8756c7ab79fde0abbfaac885c37a3ed5fe23c7465093f0878d55ef",
    input={
        "train_data": "https://gist.githubusercontent.com/nateraw/055c55b000e4c37d43ce8eb142ccc0a2/raw/d13853512fc83e8c656a3e8b6e1270dd3c398e77/samsum.jsonl",
        "num_train_epochs": 1
    },
    destination="juanjaragavi/llama2-summarizer"
)

print(training)