import React from 'react'
import "../../styles/Yoga.scss";

import img1 from "../../assets/img/pose1.webp"
import img2 from "../../assets/img/pose2.webp"
import img3 from "../../assets/img/pose3.webp"
import img4 from "../../assets/img/pose4.webp"
import img5 from "../../assets/img/pose5.webp"
import img6 from "../../assets/img/pose6.webp"
import img7 from "../../assets/img/pose7.webp"
import img8 from "../../assets/img/pose8.webp"


const Data = [
    {
        id:1,
        imgsrc: img1,
        destTitle: 'Mountain Pose',
        desc: 'This yoga pose helps with balance and grounding through the feet. Stand tall with your big toes touching and heels together. Draw your abdominals in and up and relax your shoulders down and back. Breathe five to eight breaths.',
    },
    {
        id:2,
        imgsrc: img2,
        destTitle: 'Tree Pose',
        desc: 'Excellent for leg and abdominal strength. Good for seniors for balance and concentration. Stand tall and place one foot on the opposite inner thigh, either above or below the knee. Open the leg to the side, bring your hands to a prayer position and hold for five to eight breaths.'
    },
    {
        id:3,
        imgsrc: img3,
        destTitle: 'Bird Dog',
        desc:'Good for abdominals and back support. The health of the spine is extremely important as we age. Start by kneeling and stretching one arm forward and the opposite leg back. Stay for a breath and then switch sides. Repeat five times.'
    },
    {
        id:4,
        imgsrc: img4,
        destTitle: 'Downward Facing Dog',
        desc:'Start on your hands and knees, tuck your toes under and lift your hips up and back until your body forms a triangle.Use your core strength and legs to bring the weight back as much as possible.'
    },
    {
        id:5,
        imgsrc: img5,
        destTitle: 'Cat/Cow',
        desc:'This pose helps to relieve back and neck tension. Inhale and arch your back to look up at the ceiling. Exhale through your spine, pulling your abdominals in and rounding your back as you bend forward. Repeat this movement five times.'
    },
    {
        id:6,
        imgsrc: img6,
        destTitle: 'Circles',
        desc:'To release and relax the hip muscles, circle your hips clockwise five times while seated without moving your upper body, then counterclockwise five times.        '
    },
    {
        id:7,
        imgsrc: img7,
        destTitle: 'Sun Salutations with Twists',
        desc:'Repeat the previous exercise, adding a twist as you exhale. Repeat five times on each side, holding the last twist for five seconds.'
    },
    {
        id:8,
        imgsrc: img8,
        destTitle: 'High Altar Side Leans',
        desc:'For a deep spine and shoulder stretch, lift your arms and interlace your fingers together in front of you. Then turn your palms to the ceiling as you straighten your arms above your head. Lean to the right for three breaths, then to the left for three.'
    },
    
]

const Yoga = () => {
  return (
    <section className='yogaexe section container'>
        <div className='secContainer'>

            <div className='secHeader flex'>
            </div>

            <div className='mainContent grid'>
                

                {
                    Data.map(({id,imgsrc,destTitle,desc}) =>{
                        return(
                        <div className='singleDestination'>
                             <div className='destImage'>

                        <img src={imgsrc} alt='Image title' />

                        <div className='overlayInfo'>
                            <h3>{destTitle}</h3>
                            <p>
                                {desc}
                            </p>

                        </div>

                    </div>

                            <div className='destFooter'>
                        <div className='number'>
                            0{id}
                        </div>

                        <div className='destText flex'>
                            <h6>
                            {destTitle}
                            </h6>
                        
                        </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            </div>
    </section>
  )
}

export default Yoga
