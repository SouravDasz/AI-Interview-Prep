from fastapi import APIRouter
#from services.llm import model
from services.question_generator import question
import json


router=APIRouter()

@router.get("/question/{topic}")
def specefic_question(topic:str):
    topic=topic
    result=question(topic=topic)
    return result
    
