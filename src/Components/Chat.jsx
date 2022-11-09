import React from 'react'
import cam from '../Image/cam.png'
import more from '../Image/more.png'
import add from '../Image/add.png'
import Messages from './Messages'
import Input from './Input'

 const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
           <span>Mahdi</span>
                <div className="chatIcons">
                    <img src={cam} alt=""/>
                    <img src={more} alt=""/>
                    <img src={add} alt=""/>
                </div>
         </div>
         <Messages/>
         <Input/>
    </div>
  )
}
export default Chat