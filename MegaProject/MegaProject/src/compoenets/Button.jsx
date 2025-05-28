import React from 'react';

const Button = ({ children, type = 'button', className = '', bgcolor = "bg-blue-600", textColor = "text-white", ...props }) => (
    <button type={type} onClick={onClick} className={`px-4 py-2 rounded ${bgcolor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
);

export default Button;