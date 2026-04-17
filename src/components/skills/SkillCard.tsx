import React from 'react';
import { SkillCategory } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import './Skills.css';

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const { t } = useLanguage();
  const translationKey = `skills.categories.${category.id}`;
  const translated = t(translationKey);
  const categoryName = translated === translationKey ? category.name : translated;

  return (
    <article className="skill-card" aria-labelledby={`skill-category-${category.id}`}>
      <h3 className="skill-card-title" id={`skill-category-${category.id}`}>
        {categoryName}
      </h3>
      <div
        className="skill-card-content"
        role="list"
        aria-label={`${t('skills.title')}: ${categoryName}`}
      >
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
