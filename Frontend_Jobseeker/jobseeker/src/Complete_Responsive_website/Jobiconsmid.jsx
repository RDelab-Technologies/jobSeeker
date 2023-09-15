import React from 'react';
import './Jobiconsmid.css';
const Jobicons = () => {
    return (
        <>
            <div class="grid text-center jobdetails imgplacehoder">

                <div className='jobcontain'>
                    <div className='iconsjob'>
                        <img src='https://www.hirect.in/_nuxt/img/verified-recruiters.007d876.svg' alt='...' />
                    </div>
                    <p>25M+</p>
                    <span>Verified Recruiters</span>
                </div>

                <div className='jobcontain' >
                    <div className='iconsjob'>
                        <img src='https://www.hirect.in/_nuxt/img/jobs-posted.d87985b.svg' alt='...' />
                    </div>
                    <p>300K</p>
                    <span>Jobs Posted</span>
                </div>

                <div className='jobcontain' >
                    <div className='iconsjob'>
                        <img src='https://www.hirect.in/_nuxt/img/chat-conversations.b5998e5.svg' alt='...' />
                    </div>
                    <p>250M+</p>
                    <span>Chat Conversations</span>
                </div>

                <div className='jobcontain' >
                    <div className='iconsjob'>
                        <img src='https://www.hirect.in/_nuxt/img/job-seekers.a85291b.svg' alt='...' />
                    </div>
                    <p>2.5M+</p>
                    <span>Job Seekers</span>
                </div>
            </div>
        </>
    )
}

export default Jobicons;