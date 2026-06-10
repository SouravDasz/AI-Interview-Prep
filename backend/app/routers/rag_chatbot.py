from fastapi import APIRouter,Form
from schemas.chatbot_schema import Question
chatsubject_router=APIRouter()

@chatsubject_router.post("/subject/{subject}")
def chatbot(query:str,subject:str):
    pass
