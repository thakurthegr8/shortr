import React,{forwardRef} from 'react'

const FileComponent =(props, ref) => {
  return (
    <input type="file" ref={ref} className="hidden" {...props}/>
  )
}

export default forwardRef(FileComponent);