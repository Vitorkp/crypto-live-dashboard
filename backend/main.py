from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# Isso aqui é MUITO importante para o React conseguir conversar com o Python depois
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Permite que seu frontend acesse o backend
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/preco/bitcoin")
async def get_btc():
    url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        return response.json()

@app.get("/")
def home():
    return {"status": "Servidor rodando!"}