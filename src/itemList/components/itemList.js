import React from 'react'
import Filters from './filters';
import Item from './item';

const ItemList = ({data}) => {
  return (
    <div className=' h-full w-full flex p-4'>
      <div className="h-full flex w-3/12 ml-6 items-start  ">  
        <Filters/>
      </div>
      <div className="h-full flex w-9/12 flex-wrap items-end justify-end mr-5">  
        {data.map(item => (
          <Item key={item.imageUrl+item.vehicleName+item.id} id={item.id} img={item.imageUrl} name={item.vehicleName}   />
        ))}
      </div>
    </div>

  )
}

export default ItemList

