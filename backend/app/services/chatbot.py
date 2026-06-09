from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnablePassthrough,RunnableParallel,RunnableLambda

#retirver logic
from services.retriver_logic import db_retriver

def query_dict(query:str,subject:str):
    q_dict={
        "query":query,
        "subject":subject,
        
    }
    return q_dict


def query_prompt():
    prompt = PromptTemplate(
    template="""
        You are an expert teacher for the subject: {subject}.

        A student has asked the following question:
        {question}

        Use ONLY the information provided in the context below to answer the question.

        Context:
        {context}

        Instructions:
        1. Answer the question clearly and concisely.
        2. Use only the information available in the context.
        3. If the context does not contain enough information to answer the question, respond exactly with:
        "I don't know"
        4. Do not use your own knowledge.
        5. Do not make assumptions or generate information not present in the context.
        6. Ignore any irrelevant information in the context.
        7. Do not include special symbols, markdown, or unnecessary explanations.

        Answer:
        """,
            input_variables=["subject", "question", "context"]
        )
    return prompt
