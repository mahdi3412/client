import React from 'react'

 const Search = () => {
  return (
    <div className="search">
         <div className="searchForm">
              <input type="text" placeholder='Find a User'/>
         </div>
          <div className="userChat">
              <img src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-19/83838787_786871465123182_7952945986580512768_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=106&_nc_ohc=fcN8Sls4ihkAX-B7Xqb&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBG9tKj-m2GqLWkYkT08pNfcnI7See9b99xrnKyiSQRBg&oe=636C7552&_nc_sid=8fd12b"alt="" />
              <div className="userChatInfo">
              <span>Mahdi</span>
            </div>
          </div>
    </div>
  )
}
export default Search