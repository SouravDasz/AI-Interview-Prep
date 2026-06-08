from pydantic import BaseModel

class User(BaseModel):

    login_type: str

    name: str

    email: str

    role: str

    picture: str | None = None

    google_id: str | None = None