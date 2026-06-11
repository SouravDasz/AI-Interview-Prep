from pydantic import BaseModel,Field

class Search_query(BaseModel):
    query:str=Field(description="User query for youtube video or google search")