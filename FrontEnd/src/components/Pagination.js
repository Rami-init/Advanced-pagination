import React from 'react';

const Pagination = ({page, pages, setPage}) => {
  let middlePagination ;
  if(page <= 5) {
    if(pages <= 5) {
        middlePagination =(
            <>
            {[...Array(5)].map((_,idx)=>(
                <>
                <button
                  key={idx+1}
                  onClick={()=>setPage(idx+1)}
                  disabled={page === idx+1}
                >{idx+1}</button>
                </>
            ))}
            </>
        )
    }else {
        middlePagination =(
            <>
            {[...Array(5)].map((_,idx)=>(
                <>
                <button
                  key={idx+1}
                  onClick={()=>setPage(idx+1)}
                  disabled={page === idx+1}
                >{idx+1}</button>
                </>
            ))}
            <button>...</button>
            <button onClick={()=>setPage(pages)}>{pages}</button>
            </>
        )
    }
    
  } else {
      const startValue = Math.floor(((page-1)/5)*5)
      console.log(startValue)
      middlePagination = (
        <>
            
          {[...Array(5)].map((_, idx)=>( <button key={startValue + idx + 1}
              onClick={()=> setPage(startValue + idx + 1)} 
              disabled={page === startValue + idx + 1}
              >{startValue + idx + 1}</button>
            ))}
            <button>...</button>
            <button onClick={()=>setPage(pages)}>{pages}</button>
        </>)
        if(page > 5) {
            if(pages - page >= 5) {
                middlePagination = (
                    <>
                        <button onClick={()=> setPage(1)}>1</button>
                        <button>...</button>
                        <button onClick={()=>setPage(startValue)}>{startValue}</button>
                        {[...Array(5)].map((_, idx)=>(
                            <button onClick={()=> setPage(startValue + idx + 1)}
                                disabled={page === startValue + idx + 1}
                                key={startValue + idx + 1}
                                >{startValue + idx + 1}</button>
                        ))}
                        <button>...</button>
                        <button onClick={()=>setPage(pages)}>{pages}</button>
                    </>
                )
            }else {
                const amout = (pages -page) +5
                middlePagination = (
                    <>
                      <button onClick={()=> setPage(1)}>1</button>
                        <button>...</button>
                        <button onClick={()=>setPage(startValue)}>{startValue}</button>
                      {[...Array(amout)].map(( _, idx)=>( <button key={startValue + idx + 1}
                          onClick={()=> setPage(startValue + idx + 1)} 
                          style={pages <   (startValue + idx + 1) ? {display: 'none'}: null}
                          disabled={page === startValue + idx + 1}
                          >{startValue + idx + 1}</button>
                        ))}
                    </>)
            }
        }
        }
  return <div className='pagination-item'>
      <button className='prev-btn' onClick={()=>setPage((page)=>page - 1) } disabled={page === 1}>&#171;</button>
      {middlePagination}
      <button className='next-btn' onClick={()=>setPage((page)=>page + 1)} disabled={page === pages}>&#187;</button>
  </div>;
};

export default Pagination;