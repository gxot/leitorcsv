export default function Full({ full, children }) {
    return(
        <div className="flex flex-col bg-gray-200 min-h-screen">
            <div className="shrink-0">
                {children}
            </div>
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white my-10 p-8 rounded-xl">
                    <h1 className="text-center font-bold text-2xl mb-4">Tabela Completa</h1>
                    <table className="overflow-y-auto">
                        <thead>
                            <tr>
                                {Object.keys(full[0]).map((col, i) => (
                                    <th className="px-4 py-2 border" key={i}>{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {full.map((row, i) => (
                                <tr key={i}>
                                    {Object.values(row).map((value, j) => (
                                        <td className="px-4 py-2 border text-center" key={j}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}