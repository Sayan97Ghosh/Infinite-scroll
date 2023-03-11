import React,{useState,useEffect} from 'react'

import "./Namecard.css"
import Cardskeleton from './Cardskeleton';


function Home() {
  const [user,setUser] = useState([]);
  const [page,setPage] = useState(1);
  const[loading,setLoading] = useState(true);
  const[spinner,setSpinner] = useState(false)
  // fetch all the data

  const getData = async() =>{
    try{

    

        const res = await fetch (`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
        const data = await res.json();
        
      setTimeout(()=>{
        setLoading(false)
        setUser((prev)=> [ ...prev, ...data]);
      },1300)
      
       
    }catch(err){
      console.log(err);
    }
 
  }

  // infinite scroll logic
    const infinitescroll = async() =>{
       try{

        if(
          // main logic
         window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight

        ){
          // this is for page scroll
          setPage((prev)=>prev+1);
          setSpinner(true);

          setTimeout (()=>{
            setSpinner(false)
          },1000)
       

        }
        
    } catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getData();

   
  },[page]);

  useEffect(()=>{
    window.addEventListener("scroll",infinitescroll);
    // clean up event listener
    return () => window.removeEventListener("scroll",infinitescroll)
  },[])


console.log(user);

  // console.log(data);
  return (
   <>
   <div className='wrapper'>


    {loading &&<Cardskeleton cards={8}/>}
   
     {user.map((el,i)=>(
          <div className='single-card' key={i}>
            <img className='avatar' src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'/>
            <p>{el.title}</p>
           <p>{el.body}</p>
          </div>
     ))}
     </div>

     {spinner && <h1>.......Loading! please Wait</h1>}


     
   
   </>
  )
}

export default Home
