import React from 'react';

const LoadingSvg = props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 740" {...props}>
        <path d="M381 118c-8 0-15 8-15 17v4l2 14 2 26-5 8v6a190 190 0 0 0-122 59l-6-4c-2 0-5 1-8-1-7-4-13-10-20-18l-10-10-3-2c-3-3-7-4-10-4-5 0-9 1-12 5-5 6-3 16 4 21v1l3 2 12 7 22 15 3 9 5 4c-25 38-37 84-30 132l-6 2c-2 2-4 5-7 6l-26 4-14 1-4 1c-9 3-14 10-13 18 2 8 11 13 19 11h1l4-1 13-5 25-8c4 0 7 2 9 3l6-1c15 46 45 83 84 106l-2 6c1 3 2 6 1 8-3 8-8 15-13 24-3 4-6 7-8 12l-2 4c-4 8-1 17 6 21 8 3 17-1 20-9h1l1-4 5-13c3-10 6-20 11-26 1-2 4-3 6-3l3-6a189 189 0 0 0 135 0l4 6c2 1 5 1 7 4 4 7 7 15 10 25l4 13 2 4c4 8 13 12 20 8 8-3 10-12 7-21l-2-3-8-12-13-23c-1-4 0-6 1-9l-2-6c40-24 70-62 84-106l6 1c2-1 4-3 8-3 8 1 16 4 26 8l13 5 4 1c9 2 17-3 19-11s-4-16-12-18l-5-1-14-1-26-4c-3-1-5-5-6-7l-6-1a189 189 0 0 0-30-132l5-5c0-2 0-5 2-8l22-15 12-7 4-3c7-5 8-15 3-21-5-7-15-7-22-2l-3 3-10 10-19 18c-3 2-7 1-9 1l-6 4c-31-33-75-55-121-59v-6c-2-2-5-4-5-8-1-8 0-16 1-26l2-14v-4c0-9-6-17-14-17zm-19 114l-4 77a13 13 0 0 1-21 10l-63-45a151 151 0 0 1 88-42zm37 0c33 4 64 19 88 42l-63 44a13 13 0 0 1-20-9h-1zm-148 71l58 51a13 13 0 0 1-5 23l-74 21c-4-34 4-67 21-95zm259 0a153 153 0 0 1 22 95l-74-21v-1a13 13 0 0 1-5-22l57-51zm-141 55h24l14 18-5 23-21 10-21-10-6-23zm75 63h4l76 13c-11 31-33 58-61 76l-30-71a13 13 0 0 1 11-18zm-127 0a13 13 0 0 1 11 18l-29 71c-27-18-49-44-61-76l76-13h3zm63 31l6 1c3 2 5 3 6 6l38 67a154 154 0 0 1-98 0l37-67c3-4 7-7 11-7z">
            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 380 370;-360 380 370" keyTimes="0;1" dur="2s" begin="0s" repeatCount="indefinite"/>
        </path>
    </svg>
);

export default LoadingSvg;
