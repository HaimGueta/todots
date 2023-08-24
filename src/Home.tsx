
import axios from 'axios'
import  { useState, useEffect } from 'react';

interface Post {
  _id: string;
  // Other properties of your post object
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [show, setShow] = useState(true);

  useEffect(()=>{
    
    const getallposts = async ()=>{
      try{
        const res = await axios.get(`http://localhost:5050/posts?page=0&search=&salary=`)
        setPosts(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    getallposts()
    
  },[])

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={()=>{
        setShow(!show)
      }}>
        show or hiden
      </button>

      {show && posts.map((p)=>{
        return(
          <li key={p._id}>{p._id}</li>
        )
      })}
    </div>
  )
}

export default Home