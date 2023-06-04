import React from 'react';

const Result = ({ snippet,link,title}) => {
  return (
<div >
<div className='my-6 max-w-[80%] '>
      <div className='font-bold'>
      {title}
      </div>
<a href={link} className='text-blue-500'>   {link}</a>

    <div>
    {snippet}
    </div>
    </div>
</div>
  );
}

export default Result;
