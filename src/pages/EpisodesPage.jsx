import { useLoaderData } from "react-router-dom"
import ECard from "../components/ECard"

export default function EpisodesPage () {
    const data = useLoaderData();

    return (
    <main className="min-h-screen flex-col justify-center">
        <h1  className="flex justify-center my-8 font-bold text-6xl">Episodes</h1 > 
        <table className="flex-col justify-center align-center mx-auto my-8 border-solid border-4 border-black">
            <thead className=" text-2xl bg-green-600" >
                <th className="p-4 border-solid border-4 border-black">Name</th>
                <th className="p-4 border-solid border-4 border-black">Date</th>
                <th className="p-4 border-solid border-4 border-black">Episode</th>
            </thead>
            <tbody>
            {data.results.map((e) => (
                <tr key={e.id}  >
                    <ECard name={e.name} date={e.air_date} episode={e.episode}/>
                </tr> 
            ))}
            </tbody>    
        </table>
    </main>
    )
}
