import { useState } from "react";
import FileReader from "@/components/FileReader";
import Btn from "@/components/Btn";
import Preview from "@/components/Preview";
import Stats from "@/components/Stats";
import Full from "@/components/Full"

export default function Home() {
    let [btnpreview, setBtnpreview] = useState(false);
    let [btnfull, setBtnfull] = useState(false);
    let [btnstats, setBtnstats] = useState(false);
    let [preview, setPreview] = useState(null);
    let [full, setFull] = useState(null);
    let [stats, setStats] = useState(null);
    let [load, setLoad] = useState(false)

    const coletarDados = (data) => {
        setFull(data.full)
        setPreview(data.preview);
        setStats(data.stats);
        setLoad(true)
    };

    const ativarpreview = () => {
        setBtnfull(false)
        setBtnstats(false);
        setBtnpreview(true)
    }

    const ativarstats = () => {
        setBtnfull(false);
        setBtnpreview(false);
        setBtnstats(true)
    }

    const ativarfull = () => {
        setBtnpreview(false);
        setBtnstats(false)
        setBtnfull(true);
    }

    return (
        <main className="min-h-screen">

            {!load && (<FileReader coletarDados={coletarDados}/>)}
            
            {load && !btnfull && !btnpreview && !btnstats && (
                <div className="flex flex-col h-screen">
                    <Btn ativarpreview={ativarpreview} ativarstats={ativarstats} ativarfull={ativarfull}/>
                    <div className="bg-gray-200 flex-grow flex justify-center items-center">
                        <h1 className="font-bold text-2xl">Seus dados aparecerão aqui. Selecione uma das formas de disposição acima!</h1>
                    </div>
                </div>
                )}

            {preview && btnpreview && (
                <Preview preview={preview}>
                    <Btn ativarpreview={ativarpreview} ativarstats={ativarstats} ativarfull={ativarfull}/>
                </Preview>
            )}

            {stats && btnstats && (
                <Stats stats={stats}>
                    <Btn ativarpreview={ativarpreview} ativarstats={ativarstats} ativarfull={ativarfull}/>
                </Stats>
                
            )}

            {full && btnfull && (
                <Full full={full}>
                    <Btn ativarpreview={ativarpreview} ativarstats={ativarstats} ativarfull={ativarfull}/>
                </Full>
                
            )}


        </main>
    );
}
