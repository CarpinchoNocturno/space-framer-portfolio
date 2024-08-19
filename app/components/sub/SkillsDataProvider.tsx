"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillsDataProvider = ({ src, width, height, index }: Props) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 0.8,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: index * 0.1
            }
        }
    }

    const animationDelay = 0.3;

    return (
        <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={imageVariants}
            custom={index}
            transition={{ duration: 0.5, delay: index * animationDelay }}
        >
            <Image
                src={src}
                alt='Skill Icon'
                width={width}
                height={height}
            />
        </motion.div>
    )
}

export default SkillsDataProvider