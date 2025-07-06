import React from 'react';
import './education.css';
import { motion } from 'framer-motion';

const Education =() => {
    return(
        <section id='education'>
            <motion.div
                className="EduHeading"
                initial={{ x: -300, opacity: 0 }}    
                whileInView={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1 }}         
                >
                Education
            </motion.div>
            <div className="educations">
                    <div className="education">
                        <div className="eduText">
                           <h2>SRM Institutes of Science and Technology</h2>
                            <h1>2023-2027</h1>
                            <h3>CGPA= 9.17 (untill 4th sem)</h3>
                            <p>Pursuing B.Tech in Computer Science Engineering with specialization in Software Engineering. </p>
                        
                    </div>
                    </div>
                    <div className="education">
                        <div className="eduText">
                        <h2>Sophia Girls' School</h2>
                        <h1>2009-2023</h1>
                        <h3>12th grade = 88.27%</h3>
                        <h3>10th grade = 94.5%</h3>
                        <p>Completed my K-12 schooling from this amazing institution; actively participated in various co-curricular and extra-curricular activities that helped me build discipline, curiosity, and teamwork—skills. 

                        </p>
                        </div>
                    </div>
                    <div className="education"><div className="eduText">
                        <h2>Bhatkhande Sangit Vidyapith</h2>
                        <h1>2014-2022</h1>
                        <h3>Division = First</h3>
                        <p>Alongside my academic journey, I pursued my passion for music;received formal training in Indian classical vocals and instruments. </p>
                    </div>
                    </div>
             </div>
 
        </section>
        
    )
}

export default Education