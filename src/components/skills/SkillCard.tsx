import React from 'react';
import { SkillCategory } from '../../types';
import './Skills.css';

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <article className="skill-card" aria-labelledby={`skill-category-${category.id}`}>
      <h3 className="skill-card-title" id={`skill-category-${category.id}`}>{category.name}</h3>
      <div className="skill-card-content" role="list" aria-label={`Skills in ${category.name}`}>
        {category.skills.map((skill) => (
          <div key={skill.name} className="skill-badge" role="listitem">
            <img 
              src={skill.icon} 
              alt={`${skill.name} icon`}
              className="skill-icon"
              loading="lazy"
            />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SkillCard;


