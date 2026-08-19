import React from 'react'
import './cert.css'
import { motion } from 'framer-motion';
import awsaip from '../../assets/AWS_AIP.png';
import awscp from '../../assets/AWS_CP.png';
import coursera from '../../assets/coursera.png';
import mozo from '../../assets/mozoHackWinners.jpeg';
import resohack from '../../assets/Resonate_top10_hackathon.png';
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
                    <img src ={awscp} alt=" " className="certImg"  />
                    <div className="certText">
                        <h2>AWS Cloud Practitioner </h2>
                    </div>
                </div>

                <div className="cert ">
                    <img src ={awsaip} alt=" " className="certImg"  />
                    <div className=" certText">
                        <h2>AWS AI Practitioner</h2>
                    </div>
                </div>

                <div className=" cert">
                    <img src ={mozo} alt=" " className="certImg"  />
                    <div className="certText">
                        <h2>Hackathon Winners</h2>
                        <p>Winners of this 48 hour Hackathon where 100+ teams participated</p>
                    </div>
                </div>
                
                <div className=" cert">
                    <img src ={resohack} alt=" " className="certImg"  />
                    <div className="certText">
                        <h2>Resonate Hackathon</h2>
                        <p>Among the top 10 teams out of 200+ in this 24 hour hackathon </p>
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
             </div>
 
        </section>
        
    )
}

export default Certificates