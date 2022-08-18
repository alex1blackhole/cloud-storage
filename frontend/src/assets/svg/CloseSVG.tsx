import React, {SVGAttributes} from 'react';

const CloseSVG = (props: SVGAttributes<SVGElement>) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none">
            <path
                fill="#000"
                fillRule="evenodd"
                d="M9.267 7.5l5.366-5.366a1.248 1.248 0 000-1.768 1.249 1.249 0 00-1.767 0L7.5 5.732 2.134.366A1.249 1.249 0 10.366 2.134L5.732 7.5.366 12.866a1.249 1.249 0 101.768 1.767L7.5 9.267l5.366 5.366a1.247 1.247 0 001.767 0 1.248 1.248 0 000-1.767L9.267 7.5z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};

export default CloseSVG;
