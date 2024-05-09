import { useLoaderData } from "react-router-dom"
import LCard from "../components/LCard"

export default function LocationsPage () {
    const data = useLoaderData();

    return (
<main className="min-h-screen flex-col justify-center">
        <h1  className="flex justify-center my-8 font-bold text-6xl">Locations</h1 > 
        <table className="flex-col justify-center align-center mx-auto my-8 border-solid  border-4 border-black ">
            <thead className=" text-2xl bg-green-600" >
                <th className="p-4 border-solid border-4 border-black">Name</th>
                <th className="p-4 border-solid border-4 border-black">Type</th>
                <th className="p-4 border-solid border-4 border-black">Dimension</th>
                <th className="p-4 border-solid border-4 border-black">Residents</th>
            </thead>
            <tbody>
            {data.results.map((l) => (
                <tr key={l.id}>
                <LCard name={l.name} type={l.type} dimension={l.dimension} residents={l.residents}/>
                </tr> 
            ))}
            </tbody>    
    </table>
</main>
    )
}
