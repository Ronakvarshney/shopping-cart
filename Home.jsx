import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';
const Home = () => {
  const URL = "https://fakestoreapi.com/products";

  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);


  async function fetchproductdata() {

    setloading(true);

    try {
      const res = await fetch(URL);
      const data = await res.json();
      setposts(data);
      console.log(posts)
    }
    catch (error) {
      console.log("error aagya ji faat gyi!!");
      setposts([]);

    }
    setloading(false);
  }

  useEffect(() => {
    fetchproductdata();
  }, [])




  return (
    <div>
      {
        loading ? <Spinner /> :
          posts.length > 0 ? (
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5
             min-h-[80vh] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
              {
                posts.map((post) => {
                  return <Product key={post.id} post={post} />
                })
              }
            </div>

          ) : (<div className='flex justify-center items-center'>
            NO DATA FOUND</div>)
      }
    </div>
  )
}

export default Home
