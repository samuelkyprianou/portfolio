import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

export default function SkillBlurb({text, delay}) {
    return (
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={delay}>
                <div className="skills marker">{text.title}</div>
                <p id="skills-blurb">
                  {text.blurb}
                </p>
              </ScrollAnimation>
    )
}
