from fastapi import APIRouter

from database.database import SessionLocal

from schemas.auth_schema import User

from models.user_model import UserDB

auth_router = APIRouter()

@auth_router.post("/user/register")
def register_user(user: User):

    db = SessionLocal()

    existing_user = (
        db.query(UserDB)
        .filter(UserDB.email == user.email)
        .first()
    )

    if existing_user:

        db.close()

        return {
            "message": "User already exists"
        }

    new_user = UserDB(
        login_type=user.login_type,
        name=user.name,
        email=user.email,
        role=user.role,
        picture=user.picture,
        google_id=user.google_id
    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    db.close()

    return {
        "message": "User registered successfully",
        "user_id": new_user.id
    }