from fastapi import FastAPI,APIRouter
from fastapi.middleware.cors import CORSMiddleware
from routers.question import router as question_router

app=FastAPI()

router_list=[question_router]

for router in router_list:
    app.include_router(router)

# Allow React to access FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return "api is running "