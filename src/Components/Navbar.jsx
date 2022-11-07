import React from 'react'

 const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="logo">Mem Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/13996231/pexels-photo-13996231.jpeg?cs=srgb&dl=pexels-manuel-michael-13996231.jpg&fm=jpg&_gl=1*14dw9tb*_ga*NjE5NzUwNjY1LjE2Njc2NDI3MzI.*_ga_8JE65Q40S6*MTY2NzY0Mjc2Ny4xLjEuMTY2NzY0MjgxOS4wLjAuMA.."alt="" />
        <span>Mehrad</span>
        <button>logut</button>
      </div>
    </div>
  )
}
export default Navbar