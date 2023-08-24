
import axios from 'axios'
import  { useState, useEffect } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([])

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
      {posts[0]._id}
    </div>
  )
}

export default Home