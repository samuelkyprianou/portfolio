import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollAnimation from "react-animate-on-scroll";

export default function SkillCircle({ icon, delay }) {
    return (
        <div className="hexagon-wrapper">
                <div className="hexagon">
                  <ScrollAnimation
                    className="animated-circle"
                    animateIn="expand"
                    animateOnce={true}
                    delay={delay}
                  >
                    <div className="circle">
                      <FontAwesomeIcon
                        icon={icon}
                        style={{ color: "#ebeded", fontSize: 90 }}
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
    )
}
