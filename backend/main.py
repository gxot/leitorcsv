from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import ORJSONResponse
import pandas as pd
from fastapi import FastAPI, UploadFile, File

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/upload')
async def upload(file: UploadFile = File(...)):

    df = pd.read_csv(file.file)
    preview = df.head().to_dict(orient='records')
    stats = df.describe(include='all')
    stats_clean = stats.where(pd.notnull(stats), None).to_dict()
    df_dict = df.to_dict(orient='records')
    print(df)
    
    return ORJSONResponse(content={'preview': preview, 'stats': stats_clean, 'full': df_dict})
    