import React from 'react';

const Errors = props => {

  let errorsClass = props.errors.length === 1 ? 'error-item-mid' : 'error-item-left';

  const errors = props.errors.map((err, i) => <div className={ errorsClass } key={i}>{err}</div>);

  return (
    <div className="errors-container">
      <div className={ errors.length === 1 ? 'errors-wrapper-single-item' : 'errors-wrapper-multi-item' }>
        <span onClick={ props.toggleErrors } className="close-container"><i className="fas fa-times"></i></span>
        { errors }
      </div>
    </div>
  );
}


export default Errors;
