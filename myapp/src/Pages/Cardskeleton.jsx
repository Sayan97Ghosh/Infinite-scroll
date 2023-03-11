import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Cardskeleton({cards}) {
  return Array(cards)
  .fill(0)
  .map((item,i)=>(
    <div key={i}>
     <div>
      <Skeleton height={330}/>
     </div>
     <div>
      <Skeleton height={40}/>
     </div>
     <br />
     <div>
      <Skeleton height={30}/>
     </div>
     <br />
     <div>
      <Skeleton height={20}/>
     </div>
    </div>
  ))
    
}

export default Cardskeleton

