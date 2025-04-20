import { useState } from "react";

export default function FileReader({ coletarDados }) {
    const [file, setFile] = useState(null);

    const salvarArquivo = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadArquivo = async (e) => {
        e.preventDefault();

        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        coletarDados(data);
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
            <h1 className="text-center font-bold text-2xl">Bem-vindo(a) ao Analisador de Dados CSV!</h1>
            <div className="flex flex-col items-center mx-auto w-100 bg-black rounded-xl mt-10 py-6">
                <h3 className="font-bold text-xl text-white">Importe seu arquivo CSV</h3>

                <label htmlFor="arquivoCSV" className="bg-gray-200 cursor-pointer p-4 my-10 rounded-md">
                    {file 
                        ? `Arquivo: ${file.name}`
                        : "Clique aqui e selecione seu arquivo"
                    }
                    </label>
                <input id="arquivoCSV" type="file" accept=".csv" onChange={salvarArquivo} className="hidden"/>
                
                <button type="submit" onClick={uploadArquivo} className="bg-white hover:scale-110 p-2 cursor-pointer rounded-xl">Enviar Dados</button>
                
            </div>
        </div>
    );
}
