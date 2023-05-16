import React from 'react'

const Input = (props) => {
  return (
    <input {...props}/>
  )
}
Input.defaultProps = {
  label:""
}
export default Input