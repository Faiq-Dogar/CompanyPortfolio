import { Typography } from '@mui/material'
import React from 'react'

const Calender = (isDarkMode) => {
    return (
        <div  data-aos="fade-right" >
            <Typography variant='h6' className='section-title' align='left' color={isDarkMode ? "#5EC3EB" : "#351A5F"} fontWeight={"light"}>
                Schedule Meeting
            </Typography>
            <Typography variant='h3' align='left' color={isDarkMode ? "#ffffff" : "#351A5F"} marginY={'3%'}>
                Schedule a Meeting
            </Typography>

            <div className="div-block-5">
                <div className="html-embed w-embed w-script">
                    <style>
                        {`
            .calendly-inline-widget {
              border-radius: 5px;
              overflow: hidden;
              min-width: 120px;
              height: 700px;
            
              filter: invert(80%) saturate(0);
              opacity: 0.85;
            }
            @media (max-width: 768px) {
              .calendly-inline-widget {
                margin-left: 15px;
                margin-right: 15px;
              }
              
            }
          `}
                    </style>
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/zaisystems/30min"
                        data-processed="true"
                        style={{ position: 'relative' }}
                    >
                        <div className="calendly-spinner">
                            <div className="calendly-bounce1"></div>
                            <div className="calendly-bounce2"></div>
                            <div className="calendly-bounce3"></div>
                        </div>
                        <iframe
                            src="https://calendly.com/zaisystems/30min?embed_domain=www.abc.com&amp;embed_type=Inline"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Select a Date & Time - Calendly"
                        ></iframe>
                    </div>
                    <script
                        type="text/javascript"
                        src="https://assets.calendly.com/assets/external/widget.js"
                        async=""
                    ></script>
                </div>
            </div>
        </div>
    )
}

export default Calender
