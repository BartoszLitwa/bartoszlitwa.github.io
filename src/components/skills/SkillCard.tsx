import React from 'react';
import { SkillCategory } from '../../types';
import './Skills.css';

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-card-title">{category.name}</h3>
      <div className="skill-card-content">
        {category.skills.map((skill) => (
          <div key={skill.name} className="skill-badge">
            <img 
              src={skill.icon} 
              alt={skill.name}
              className="skill-icon"
              loading="lazy"
            />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;


