

export default function LCard ({name, type, dimension, residents }) {


    
    return (
        <>
            <th className="p-2 bg-cyan-400 border-solid border-2 border-black">{name}</th>
            <td className="p-2 bg-pink-300 border-solid border-2 border-black">{type}</td>
            <td className="p-2 bg-pink-300 border-solid border-2 border-black">{dimension}</td>
            <td className="p-2 bg-pink-300 border-solid border-2 border-black"><select name="residents" id="residents">
                {residents.map((r) => (
                    <option key={r.residents}>{r}</option>
                )) }
                
                </select></td>
        </>
    )
}

