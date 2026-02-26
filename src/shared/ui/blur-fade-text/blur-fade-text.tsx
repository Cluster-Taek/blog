'use client';

import { motion, type Variants } from 'motion/react';
import React from 'react';
import { cn } from '@/shared/lib/utils';

interface BlurFadeTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

const BlurFadeText = ({
  children,
  className,
  variant,
  duration = 0.4,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: -yOffset, opacity: 0, filter: 'blur(8px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  };
  const combinedVariants = variant || defaultVariants;

  if (animateByCharacter && typeof children === 'string') {
    return (
      <div className="flex flex-wrap">
        {Array.from(children).map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate="visible"
            variants={combinedVariants}
            transition={{
              duration,
              delay: delay + i * characterDelay,
              ease: 'easeOut',
            }}
            className={cn('inline-block', className)}
            style={{ width: char.trim() === '' ? '0.2em' : 'auto' }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      <motion.span
        initial="hidden"
        animate="visible"
        variants={combinedVariants}
        transition={{
          duration,
          delay,
          ease: 'easeOut',
        }}
        className={cn('inline-block', className)}
      >
        {children}
      </motion.span>
    </div>
  );
};

export default BlurFadeText;
