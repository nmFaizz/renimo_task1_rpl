import React from 'react';
import './styles/button.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  type = 'button', 
  disabled = false, 
  onClick, 
  iverted = false,
  leftIconSrc,
  lefftIconAlt = "icon",
  leftIconWidth = 15,
  leftIconClassname,
  isLoading = false,
  ...rest 
}) {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
    outlined: 'btn-outlined',
    success: 'btn-success',
    unstyled: 'btn-unstyled',
  };

  const buttonClasses = `${variantClasses[variant] || variantClasses.primary} ${className}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {leftIconSrc && (
        <img 
            src={leftIconSrc} 
            alt={lefftIconAlt} 
            width={leftIconWidth} 
            className={leftIconClassname}
        />
    )}
      {isLoading ? "Loading..." : children}
    </button>
  );
}
