import React from 'react'

function TopButtons({setQuery}) {

    const cities =[
        {
            id:1,
            title: 'Singapore'

        },

        {
            id:2,
            title: 'Hanoi'

        },

        {
            id:3,
            title: 'Tokyo'

        },

        {
            id:4,
            title: 'Kuala Lumpur'

        },

        {
            id:5,
            title: 'Seoul'

        },

    ]

    
  return <div className='flex items-center justify-around my-6'>
    {cities.map((city) =>(
        <button key={city.id} className='text-white text-lg font-medium' onClick={()=> setQuery({q: city.title})
        }> {city.title} </button>
    ))}


  </div>

}

export default TopButtons