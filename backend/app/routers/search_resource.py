from fastapi import APIRouter
from schemas.search_query import Search_query
from services.search_logic import search_youtube, pdf_search as search_pdf_resources


router=APIRouter(prefix="/search")


@router.post("/youtube_video")
def youtube_resource(message:Search_query):
    query=message.query
    if not query:
        return {"response":"For searching you must provide something"}
    # result contain title , link , chanel name, and duration in sec
    result=search_youtube(query)
    return {"response":result}


@router.post("/pdf_book_resource")
def pdf_search(message:Search_query):
    query=message.query
    if not query:
        return {"response":"For searching you must provide something"}
    result=search_pdf_resources(query)
    return {"response":result}