# 📊 Leitor CSV (Python + Next.js)

## 📌 Descrição:
Aplicação web para leitura e visualização de arquivos CSV.  
Através de uma interface simples, o usuário pode fazer upload de arquivos e visualizar os dados de forma organizada.

---

## ⚙️ Funcionalidades:
- Upload de arquivos CSV via interface web  
- Visualização dos dados em diferentes formatos  

---

## 🛠 Tecnologias:
- **Frontend:** Next.js, Tailwind CSS  
- **Backend:** Python, FastAPI, Pandas  

---

## ✅ Pré-Requisitos:
- **Python 3.10** ou superior  
- **Node.js 18** ou superior  

---

## 🚀 Como rodar o projeto:
Abra o terminal no diretório onde deseja clonar o repositório e execute:
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

❌ Para encerrar: Basta encerrar os dois terminais
