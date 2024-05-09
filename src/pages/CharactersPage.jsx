import { useLoaderData } from "react-router-dom"
import CCard from "../components/CCard";


export default function CharactersPage() {
    const data = useLoaderData();
    
    return(
        <main>
            <h1 className="flex justify-center my-8 font-bold text-6xl">Characters</h1>
            <div className="flex gap-4 justify-center flex-wrap">  
                {data.results.map((c) => (
                <CCard key={c.id} c={c}/>
                ))}
            </div>
        </main>
    )
}