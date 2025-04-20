# Leitor CSV (Python + Next.js)

## Funcionalidades:
- Upload de Arquivos CSV via interface web
- Visualização de dados em diferentes formatos
  
## Tecnologias:
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Python, Pandas, FastAPI

## Pré-Requisitos: 
- **Python 3.10** ou superior
- **Node.js 18** ou superior

## Tutorial para o uso:   
Abra o terminal aonde deseja clonar o repositório e dê os seguintes comandos:
```
git clone https://github.com/gxot/leitorcsv
cd leitorcsv
cd backend
----- OPCIONAL -----
python -m venv venv
source venv/bin/activate (Linux/Mac)
venv\Scripts\activate (Windows)
--------------------
pip install -r requirements.txt
uvicorn main:app --reload  
```
Abra outro terminal dentro da pasta "leitorcsv" e dê esses comandos:
```
cd frontend
npm install
npm run dev
```  
Acesse: http://localhost:3000/  
(Para fechar o projeto feche os dois terminais)

