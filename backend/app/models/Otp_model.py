from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from database.database import Base

class OTP(Base):

    __tablename__ = "otp"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    email = Column(
        String,
        unique=True
    )

    otp = Column(String)