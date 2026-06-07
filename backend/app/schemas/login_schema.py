from pydantic import BaseModel,Field,EmailStr

class Login(BaseModel):
    email:EmailStr
    user_name:str
    password:str


class Register(BaseModel):
    user_name:str
    password:str