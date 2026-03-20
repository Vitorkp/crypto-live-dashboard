🚀 Crypto Dashboard

Um dashboard moderno de criptomoedas em tempo real, desenvolvido com backend em Python e frontend em React.


🛠️ O que eu usei para construir:
No Backend:
Python & FastAPI: Escolhi pela velocidade e por ser moderno.

Uvicorn & HTTPX: Para garantir que as requisições fossem rápidas e não travassem o sistema.

No Frontend:
React + Vite: Para uma interface rápida e reativa.

CSS Customizado: Focado em um visual Dark Mode para não cansar a vista.


🧠 Desafios Técnicos Superados

Hardware vs. Software: Como meu PC tem 4GB de RAM, aprendi a otimizar o npm install e a gerenciar processos para o VS Code não travar.

Fazendo as pontas se conversarem (CORS): Entendi como configurar a segurança para que o meu site em React pudesse "falar" com o meu servidor em Python com segurança.


Quer testar na sua máquina?
1. Ligue o Backend (Python)
PowerShell
cd backend
.\venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
Confira se está tudo OK em: http://127.0.0.1:8000

2. Ligue o Frontend (React)
PowerShell
cd frontend
npm install
npm run dev
Acesse o dashboard em: http://localhost:5173