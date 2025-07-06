import React from 'react';
import './extracur.css';
import prabhakarImg from '../../assets/prabhakar.jpg';
/*import visharadImg from '../../assets/visharad.jpg';*/
import u13basket from '../../assets/U13basket.jpg';
import basketball2 from '../../assets/varanasi basketball.jpg';
import athelete1 from '../../assets/800m zone.jpg';
import athelete2 from '../../assets/400m zone.jpg';
import { motion } from 'framer-motion';

const ExtraCurricular =() => {
    return(
        <section id='extracurr'>
            <motion.div
                className="ExtraCurHeading"
                initial={{ x: -400, opacity: 0 }}    
                whileInView={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1 }}         
                >
                Extra curricular
            </motion.div>
            <div className="extracurs">
                    <div className="extracur">
                        <div className="extracurText">
                           <h2>BHATHKHANDE SANGIT VIDYAPITH</h2>
                            <h1>2014-2022</h1>
                            <p>Singer | Song Writer | Producer in the making</p>
                            <img src={prabhakarImg} alt=" " className=" extraCurImg"/>
                            
                            <h3></h3>
                            
                        </div>
                    </div>
                    <div className="extracur">
                        <div className="extracurText">
                        <h2>BASKETBALL</h2>
                        <p>Fueled by Grit and Growth, took my school team to two U-19 State tournaments as the team Captain.</p>
                        <img src={u13basket} alt=" " className=" extraCurImg"/>
                        <img src={basketball2} alt=" " className=" extraCurImg"/>
                        
                        </div>
                    </div>
                         <div className="extracur">
                            <div className="extracurText">
                            <h2>ATHELETICS</h2>
                            <p>Track Focused | Built for Challenges.</p>
                            <img src={athelete1} alt=" " className=" extraCurImg"/>
                            <img src={athelete2} alt=" " className=" extraCurImg"/>
                            
                        </div>
                    </div>
             </div>
 
        </section>
        
    )
}

export default ExtraCurricular