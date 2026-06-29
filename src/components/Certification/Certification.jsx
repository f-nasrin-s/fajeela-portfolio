import "./Certification.css";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import certificationData from "../../data/certificationData";

function Certification() {

return(

<section
className="certification"
id="certifications"
>

<motion.h2

className="section-title"

initial={{opacity:0,y:-40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.6}}

>

Certifications

</motion.h2>

<div className="certificate-grid">

{

certificationData.map((certificate,index)=>(

<motion.div

className="certificate-card"

key={certificate.id}

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{
duration:.6,
delay:index*.1
}}

viewport={{once:true}}

>

<div className="certificate-icon">

<FaCertificate/>

</div>

<h3>

{certificate.title}

</h3>

<h4>

{certificate.organization}

</h4>

<span>

{certificate.category}

</span>

</motion.div>

))

}

</div>

</section>

)

}

export default Certification;