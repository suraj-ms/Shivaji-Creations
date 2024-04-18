import React from 'react'
import './AddUser.css'

function AddUser() {


  return (
    <>
    <div className="input_section">
      <input type="text" placeholder='Order Number'/>
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='Phone Number'/>
    </div>
    <button className='btn'>Measurement</button>
    <button className='btn btn2'>Bill Page</button>
    </>
  )
}

export default AddUser