import React from 'react';

// Define types for props
interface ButtonProps {
    label: string;         // label will be a string
    onClick: () => void;   // onClick will be a function that returns void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
