import {Link} from "react-router-dom";

export default function CCard({name, image, id, genre}) {
  return (
    <div className="max-w-sm my-8   rounded overflow-hidden shadow-lg ">
      <img className="w-96 h-72 object-cover" src={image} alt={name}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"></div>
        </div>
        <h2>{name}</h2>
        <div className="flex justify-between px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">#{genre}</span>
          <Link  to={`/article/${id}`}  className="bg-black text-white m-1 px-4 rounded-2xl hover:px-5">Plus</Link>
        </div>
    </div>
  )
}