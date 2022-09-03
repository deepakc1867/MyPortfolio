import axios from "axios";
import { useState, useEffect } from "react";
import Fetch_demo from "./Fetch_demo";

function App() {
  const [post,setPost] = useState(null);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      console.log(res);
      setPost(res.data);
    });
  },[]);

if(!post) return <p>Not Found any sort of data</p>
return(
  <div>
    <h1>{post.map((data) => (
      <li key={data.id}>{data.id} - {data.name}</li>
    ))}</h1>
    <br />
    <Fetch_demo />
  </div>
)
}
export default App;
