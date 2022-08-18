import React, {SVGAttributes} from 'react';

const FolderSVG = (props: SVGAttributes<SVGElement>) => {
    return (
        <svg  {...props} xmlns="http://www.w3.org/2000/svg" width="40" height="36" fill="none">
            <path
                fill="#000"
                fillRule="evenodd"
                d="M4 21.51v8.627c0 .476.448.864 1 .864h30c.552 0 1-.388 1-.864v-17.18c0-.478-.448-.864-1-.864H20c-.6 0-1.168-.27-1.548-.736L13.252 5H5c-.552 0-1 .386-1 .862V21.51zM35 35H5c-2.756 0-5-2.181-5-4.863V5.863C0 3.18 2.244 1 5 1h9.202c.598 0 1.168.268 1.548.734l5.198 6.358H35c2.756 0 5 2.18 5 4.864v17.18C40 32.819 37.756 35 35 35z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};

export default FolderSVG;
