import React from 'react'
import './cert.css'
import { motion } from 'framer-motion';
import hackofduty from '../../assets/hackofduty.jpeg';
import foundathon from '../../assets/foundathon.png';
import coursera from '../../assets/coursera.png';
import innovatix from '../../assets/javahack.png';
import certdbms from '../../assets/Kopal_dbms_course_certificate.jpeg';
const Certificates =() => {
    return(
        <section id='certificates'>
            <motion.div
                className="certHeading"
                initial={{ x: 400, opacity: 0 }}    
                whileInView={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1 }}         
                >
                certificates
            </motion.div>

            <span className="cocertificates">.</span>
            
            <div className="certs">

                <div className="cert">
                    <img src ={foundathon} alt=" " className="certImg"  />
                    <div className="certText">
                        <h2>Foundathon- Hackathon+Ideathon</h2>
                        <p>Ranked among the top 15 teams out of a total of 300+
                        teams in this Ideathon+Hackathon</p>
                    </div>
                </div>

                <div className="cert ">
                    <img src ={hackofduty} alt=" " className="certImg"  />
                    <div className=" certText">
                        <h2>Hack Of Duty</h2>
                        <p> Hackathon Participation Certificate </p>
                    </div>
                </div>
                
                <div className=" cert">
                    <img src ={coursera} alt=" " className="certImg"  />
                    <div className=" certText">
                        <h2>Coursera Certification</h2>
                        <p>Certificate of completion of course in Object Oriented
                            Programming in C++</p>
                    </div>
                </div>
                <div className=" cert">
                    <img src ={innovatix} alt=" " className="certImg"  />
                    <div className="certText">
                        <h2>Innovatix'25</h2>
                        <p>Hackathon Participation Certificate</p>
                    </div>
                </div>
                <div className=" cert">
                    <img src ={certdbms} alt=" " className="certImg"  />
                    <div className="certText">
                        <h2>DBMS Course Certification</h2>
                        <p> DBMS Course - Master the Fundamentals and Advanced Concepts</p>
                    </div>
                </div>
               
             </div>
 
        </section>
        
    )
}

export default Certificates