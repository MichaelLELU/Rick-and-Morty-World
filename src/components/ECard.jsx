

export default function ECard ({name, date, episode }) {

    return (
        <>
            <th className="p-2 bg-cyan-400 border-solid border-2 border-black">{name}</th>
            <td className="p-2 bg-pink-300 border-solid border-2 border-black">{date}</td>
            <td className="p-2 bg-pink-300 border-solid border-2 border-black">{episode}</td>
        </>
    )
}


