import { Link } from "react-router-dom";

export default function NavBar () {
  return (  <nav className="flex justify-between p-8 bg-teal-600 text-white">
        <h2 className="text-2xl font-bold text-center my-11">Rick & Morty World</h2>
        <ul className="flex items-center gap-8">
            <li className="hover:text-black hover:font-bold"><Link to="/">Acceuil</Link></li>
            <li className="hover:text-black hover:font-bold"><Link to="/characters">Characters</Link></li>
            <li className="hover:text-black hover:font-bold"><Link to="/episodes">Episodes</Link></li>
            <li className="hover:text-black hover:font-bold"><Link to="/locations">locations</Link></li>
        </ul>
    </nav>
    )
}