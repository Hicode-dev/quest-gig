import React from 'react'

const DisplayButton = () => {
  return (
    <div className='flex justify-center items-center gap-4 transition-all duration-150 trans'>
        <button className='rounded-full px-3 py-2 border hover:bg-slate-300' >popular</button>
        <button className='rounded-full py-2 border px-3' > Discussed</button>
        <button className='rounded-full  py-2 border px-3' >Recent</button>
    </div>
  )
}

export default DisplayButton