import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedSkillCard = ({ skill, icon: Icon, level, color = "#00ffee" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const skillLevels = {
    beginner: { width: 30, label: "Beginner" },
    intermediate: { width: 60, label: "Intermediate" },
    advanced: { width: 85, label: "Advanced" },
    expert: { width: 95, label: "Expert" }
  };

  const levelInfo = skillLevels[level] || skillLevels.intermediate;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        z: 50
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 
                   shadow-lg hover:shadow-2xl transition-all duration-300"
        style={{
          transformStyle: 'preserve-3d',
          background: isHovered 
            ? `linear-gradient(135deg, rgba(0,255,238,0.1) 0%, rgba(0,0,0,0.9) 100%)`
            : 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 100%)'
        }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
            filter: 'blur(20px)'
          }}
        />
        
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-4"
          animate={{ 
            rotateY: isHovered ? 180 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon 
            className="text-4xl" 
            style={{ color: color }}
          />
        </motion.div>
        
        {/* Skill name */}
        <motion.h3
          className="text-xl font-bold text-white text-center mb-3"
          animate={{ color: isHovered ? color : "#ffffff" }}
          transition={{ duration: 0.3 }}
        >
          {skill}
        </motion.h3>
        
        {/* Skill level bar */}
        <div className="mb-3">
          <div className="flex justify-between text-sm text-gray-400 mb-1">
            <span>Proficiency</span>
            <span>{levelInfo.label}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="h-2 rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              whileInView={{ width: `${levelInfo.width}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>
        
        {/* Floating particles effect */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ backgroundColor: color }}
                initial={{ 
                  x: Math.random() * 100, 
                  y: Math.random() * 100,
                  opacity: 0 
                }}
                animate={{ 
                  x: Math.random() * 200 - 100, 
                  y: Math.random() * 200 - 100,
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedSkillCard; 