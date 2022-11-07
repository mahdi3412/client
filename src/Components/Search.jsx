import React from 'react'

 const Search = () => {
  return (
    <div className="search">
         <div className="searchForm">
              <input type="text" placeholder='Find a User'/>
         </div>
          <div className="userChat">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fn2ETD_8bn5Zq5JOt7RtMx53SjRgAqRjoA&usqp=CAU"alt="" />
              <div className="userChatInfo">
              <span>Mahdi</span>
            </div>
          </div>
    </div>
  )
}
export default Search