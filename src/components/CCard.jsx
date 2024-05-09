


export default function CCard({c}) {
  return (
    <div className="max-w-sm my-8 border-solid border-2 border-black  rounded overflow-hidden shadow-lg ">
      <img className="w-96 h-72 object-cover" src={c.image} alt={name}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"></div>
        </div>
        <h2>{c.name}</h2>
        <div className="flex justify-between px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">#{c.gender}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">From: {c.origin.name}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">{c.status}</span>
        </div>
    </div>
  )
}


