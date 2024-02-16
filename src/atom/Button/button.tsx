import React from 'react';

export const Button = (props) => {
    return( 
        <div>
            <button className={`${props.width} ${props.height} bg-yellow-400 text-sm rounded-md font-semibold font-Interr text-[#262626] ${props.ClassName}`}>
                {props.children}
            </button>
        </div>
    )   
}
Button.defaultProps = {
    width: 'w-[130px]',
    height: 'h-[60px]'
};

