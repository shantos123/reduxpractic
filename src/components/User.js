import React from 'react'

const User = (props) => {
    // console.log(props.data);
    const {data}  = props
    return (
        <div>
          <h1>this is a Redux with React</h1> 
          <h4>{data.name} {data.age}</h4>
          {/* <h4>{props.data.name} {props.data.age}</h4> */}
          {/* <h4>{props.data.age}</h4>  */}
        </div>
    )
}

export default User
 