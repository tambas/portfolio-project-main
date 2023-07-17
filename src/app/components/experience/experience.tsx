import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>sou um programador Front-end/Back-end. Tenho experiência na criação de interfaces utilizando HTML, CSS, JavaScript, React, Next.js, Node.js, Vue.js, PHP, TypeScript. 
            Já desenvolvi projetos em c#, .net utilizando MySql e etc..</p>
          <div className="experience-time">
            <Skill image="/ts.png" measure={2} years="2 years"/>
            <Skill image="/js.png" measure={3} years="3 years"/>
            <Skill image="/react.png" measure={3} years="3 years"/>
            <Skill image="/java.png" measure={1} years="1 year"/>
          </div>
        </div>
    )
}