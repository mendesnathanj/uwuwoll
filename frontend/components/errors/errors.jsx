import React from 'react';

const Errors = props => {
  const errors = props.errors.map((err, i) => <div key={i}>{err}</div>);

  return (
    <div>
      { errors }
    </div>
  )
}


export default Errors;
