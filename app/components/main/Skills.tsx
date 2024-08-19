import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillsDataProvider from '../sub/SkillsDataProvider'
import SkillsText from '../sub/SkillsText';

const Skills = () => {
    return (
        <section id='skills' className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 scale-[0.9]'>
            <SkillsText />
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Skill_data.map((skill, index) => (
                    <SkillsDataProvider
                        key={index}
                        src={skill.Image}
                        width={skill.width}
                        height={skill.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Frontend_skill.map((skill, index) => (
                    <SkillsDataProvider
                        key={index}
                        src={skill.Image}
                        width={skill.width}
                        height={skill.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Backend_skill.map((skill, index) => (
                    <SkillsDataProvider
                        key={index}
                        src={skill.Image}
                        width={skill.width}
                        height={skill.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Full_stack.map((skill, index) => (
                    <SkillsDataProvider
                        key={index}
                        src={skill.Image}
                        width={skill.width}
                        height={skill.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Other_skill.map((skill, index) => (
                    <SkillsDataProvider
                        key={index}
                        src={skill.Image}
                        width={skill.width}
                        height={skill.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                    <video autoPlay loop muted playsInline preload='false' className='w-full h-auto'>
                        <source src='/cards-video.webm' type='video/webm' />
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Skills