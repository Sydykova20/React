import React from 'react'

const Card = (props) => (
    <div
      style={{
        width: "470px",
        border: "2px solid blue ",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      {props.children}
    </div>
  );

export default Card

