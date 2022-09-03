import React, { useEffect, useState } from 'react'

function Fetch_demo() {
    const [info,setInfo] = useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setInfo(data));
    })
    if(!info) return <p>Info not Found...</p> 
  return (
    <div>
        <h2>{info.map((d) => <li key={d.id}>{d.name}</li>)}</h2>
    </div>
  )
}
export default Fetch_demo