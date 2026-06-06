from dotenv import load_dotenv
from langchain_huggingface import HuggingFaceEndpoint,ChatHuggingFace
import os

load_dotenv()
huggingface_api=os.getenv("HF_TOKEN")
llm = HuggingFaceEndpoint(
    repo_id="meta-llama/Llama-3.1-8B-Instruct",
    huggingfacehub_api_token=huggingface_api,
    max_new_tokens=3500,
    temperature=0.7,
    top_p=0.9
)

model=ChatHuggingFace(llm=llm)