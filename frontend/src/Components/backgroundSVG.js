import React from 'react'

const BackgroundSVG = ({ class_name }) => {
    return (
        // <div className={class_name}>
        //     <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        //         <path id="text-overlay" d="M14 62.5
        //                                 Q 80 55, 68.5 75
        //                                 Q 55 97,40 100
        //                                 Q 32 100,26 95
        //                                 Q 15 85,10 75
        //                                 Q 5 65,14 62.5" stroke="white" stroke-width="0.05" fill="#9089fc"
        //             stroke-linecap="round" />
        //     </svg>
        // </div>

        <div class="background-container" aria-hidden="true">
            <div class="gradient-box"></div>
        </div>
    )
}

export default BackgroundSVG
