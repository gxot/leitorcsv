export default function Stats({ stats, children }) {
    const keys = Object.keys(stats);
    const metricas = [];
    
    console.log("Dados brutos do stats:", stats);


    keys.forEach((col) => {
      Object.keys(stats[col]).forEach((metrica) => {
        if (!metricas.includes(metrica)) {
          metricas.push(metrica);
        }
      });
    });
  
    return (
        <div className="flex flex-col bg-gray-200 min-h-screen">
            <div className="shrink-0">
                {children}
            </div>
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white mt-10 mt p-8 rounded-xl">
                    <h1 className="text-center font-bold text-2xl mb-4">Estatísticas</h1>
                    <table>
                    <thead>
                        <tr>
                        <th className="px-4 py-2 border">Métricas</th>
                        {keys.map((colname) => (
                            <th className="px-4 py-2 border" key={colname}>
                            {colname}
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {metricas.map((metrica) => (
                        <tr key={metrica}>
                            <td className="border px-4 py-2">{metrica}</td>
                            {keys.map((col) => (
                            <td className="border px-4 py-2" key={col}>
                                {stats[col][metrica] ?? '-'}
                            </td>
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
  