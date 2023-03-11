import React,{useState,useEffect} from 'react'

import "./Namecard.css"
import Cardskeleton from './Cardskeleton';
import Loadingicon from './Loadingicon';


function Home() {
  const [user,setUser] = useState([]);
  const [page,setPage] = useState(1);
  const[loading,setLoading] = useState(true);
  const[spinner,setSpinner] = useState(false)
  // fetch all the data

  const getData = async() =>{
    try{

    

        const res = await fetch (`https://randomuser.me/api/?page=${page}&results=10`);
        const data = await res.json();
        
      setTimeout(()=>{
        setLoading(false)
        setUser((prev)=> [ ...prev, ...data.results]);
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
            <img className='avatar' src={el.picture.large}/>
            <h3>{el.name.first} {el.name.last}</h3>
           <p>{el.email}</p>
           <h5>{el.location.country}</h5>
          </div>
     ))}
     </div>

     {spinner && <Loadingicon/>}


     
   
   </>
  )
}

export default Home
