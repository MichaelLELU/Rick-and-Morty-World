import { useLoaderData } from "react-router-dom"
import CCard from "../components/CCard";


export default function CharactersPage() {
    const data = useLoaderData();
    
    return(
        <main>
            <div className="flex gap-4 justify-center flex-wrap">
            {data.results.map((d) => (
        <CCard key={d.id} name={d.name} image={d.image} id={d.id} genre={d.species}/>
      ))}</div>
        </main>
    )
}