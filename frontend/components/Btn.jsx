export default function Btn({ativarpreview, ativarstats, ativarfull}) {
    return(
        <div>
            <div className="bg-gray-400 py-5">
                <div className="flex flex-col text-2xl">
                    <div className="flex gap-4 justify-center">
                    <button className="cursor-pointer bg-black text-white rounded-xl p-4 hover:scale-110" onClick={ativarpreview}>Preview</button>
                    <button className="cursor-pointer bg-black text-white rounded-xl p-4 hover:scale-110" onClick={ativarstats}>Stats</button>
                    <button className="cursor-pointer bg-black text-white rounded-xl p-4 hover:scale-110" onClick={ativarfull}>Full</button>
                    </div>
                    <div className="flex justify-center mt-3">
                    <button onClick={() => window.location.reload()} className="cursor-pointer bg-red-600 text-white rounded-xl p-2 hover:scale-110">Voltar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}