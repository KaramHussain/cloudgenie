import React from 'react'

const Button = ({ styles }) => {
  const handleClick = () => {
    window.location.href = 'https://calendly.com/cloudgeniee/1hourfreeconsultancy';
  };

  return (
    <button onClick={handleClick} type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Book Free Consultancy
    </button>
  )
}

export default Button
