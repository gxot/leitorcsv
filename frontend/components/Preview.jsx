export default function Preview({ preview, children}) {
    return(
        <div className="flex flex-col bg-gray-200 min-h-screen">

            <div className="shrink-0">
                {children}
            </div>

            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white p-8 rounded-xl">
                    <h1 className="text-center font-bold text-2xl mb-4">Preview</h1>
                    <table>
                        <thead>
                            <tr>
                                {Object.keys(preview[0]).map((col, i) => (
                                    <th className="px-4 py-2 border" key={i}>{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {preview.map((row, i) => (
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