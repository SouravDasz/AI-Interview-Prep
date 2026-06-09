from langchain_community.document_loaders import DirectoryLoader,PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_huggingface.embeddings import HuggingFaceEmbeddings
from pathlib import Path


document=DirectoryLoader(
    path=r"C:\study platform\AI-Interview-Prep\backend\subject pdf",
    glob="*.pdf",
    loader_cls=PyPDFLoader
)

documents=document.load()

for doc in documents:
    source=doc.metadata["source"]
    subject=Path(source).name.split(".")[0].upper()
    doc.metadata["subject"]=subject

spliter=RecursiveCharacterTextSplitter(
    chunk_size=700,
    chunk_overlap=100
)

chunks=spliter.split_documents(documents)

embedding_model=HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

vector_store = Chroma.from_documents(
    documents=chunks,
    embedding=embedding_model,
    persist_directory=r"C:\study platform\AI-Interview-Prep\backend\vectordb"
)

def db_retriver(subject:str):
    retriver=vector_store.as_retriever(
        search_kwargs={
            "k":4,
            "filter":{
                "subject":subject
            }
        }
    )
    return retriver

