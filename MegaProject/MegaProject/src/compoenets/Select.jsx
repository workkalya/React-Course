import React from 'react';

function Select({
    options,
    label,
    className = "",
    ...props
},ref){
    const id = React.useId();
    return (
        <div>
            {label &&
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 mb-1">
                {label}
                </label>}

            <select
            {...props }
            ref={ref}
            id={id}
            className={`${className} w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            >
                {
                    options?.map((option) => (
                    <option
                        key={option}
                        value={option}>
                        {option}
                        </option>
                    ))
                }

            </select>
        </div>
    );

}

export default React.forwardRef(Select);
