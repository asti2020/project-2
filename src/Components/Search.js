import React from 'react'


export const Search = ({setSearch}) => {

  return (
    
    <div className='saearChing'>
        <input 
          className='searchInput' 
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      
    </div>
  
  )
}

export default Search;
