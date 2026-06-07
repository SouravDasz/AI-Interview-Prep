from pydantic import BaseModel,Field


class Question(BaseModel):
    query:str=Field(description="user query for chatbot")
    subject:str=Field(description="Subject about User asks the query ")