import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Cardskeleton({cards}) {
  return Array(cards)
  .fill(0)
  .map((item,i)=>(
    <div key={i}>
     <div>
      <Skeleton height={140}/>
     </div>
     <div>
      <Skeleton height={50}/>
     </div>
     <div>
      <Skeleton height={150}/>
     </div>
    </div>
  ))
    
}

export default Cardskeleton

