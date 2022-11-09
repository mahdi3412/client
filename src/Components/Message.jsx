import React from 'react'

export const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fn2ETD_8bn5Zq5JOt7RtMx53SjRgAqRjoA&usqp=CAU' alt='' />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bkcSfDOXV1kxRuFz_E8yuMdUNjcvgWLPWg&usqp=CAU' alt='' />
        
      </div>
    </div>
  )
}
export default Message