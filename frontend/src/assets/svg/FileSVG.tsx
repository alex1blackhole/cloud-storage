import React, {SVGAttributes} from 'react';

const FileSVG = (props: SVGAttributes<SVGElement>) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="29" height="36" fill="none">
            <path
                fill="#000"
                fillRule="evenodd"
                d="M14.4 21.6H9A1.8 1.8 0 019 18h5.4a1.8 1.8 0 010 3.6zM9 25.2h10.8a1.8 1.8 0 110 3.6H9a1.8 1.8 0 010-3.6zm15.2 7.2H4.6c-.551 0-1-.403-1-.9v-27c0-.497.449-.9 1-.9h9.8v5.67c0 2.83 2.191 5.13 4.886 5.13H25.2v17.1c0 .497-.449.9-1.001.9zM18 5.36l4.936 5.44h-3.65c-.71 0-1.286-.686-1.286-1.53V5.36zm10.333 6.03l-9.8-10.8A1.8 1.8 0 0017.2 0H4.6C2.064 0 0 2.02 0 4.5v27C0 33.98 2.065 36 4.6 36h19.6c2.536 0 4.6-2.02 4.6-4.5V12.6c0-.448-.167-.878-.467-1.21z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};

export default FileSVG;
