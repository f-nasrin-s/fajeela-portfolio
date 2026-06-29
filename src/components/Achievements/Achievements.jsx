import "./Achievements.css";
import { motion } from "framer-motion";
import achievementData from "../../data/achievementData";

function Achievements() {

return(

<section
className="achievements"
id="achievements"
>

<motion.h2

className="section-title"

initial={{opacity:0,y:-40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.6}}

>

Achievements

</motion.h2>

<div className="timeline">

{

achievementData.map((item,index)=>(

<motion.div

className="timeline-item"

key={item.id}

initial={{opacity:0,x:-60}}

whileInView={{opacity:1,x:0}}

transition={{
duration:.6,
delay:index*.08
}}

viewport={{once:true}}

>

<div className="timeline-icon">

{item.icon}

</div>

<div className="timeline-content">

<h3>{item.title}</h3>

<h4>{item.event}</h4>

<p>{item.description}</p>

</div>

</motion.div>

))

}

</div>

</section>

)

}

export default Achievements;