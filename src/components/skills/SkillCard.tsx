import React, { useState } from 'react';
import { SkillCategory, SkillItem } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import './Skills.css';

interface SkillCardProps {
  category: SkillCategory;
}

const SkillIcon = ({ skill }: { skill: SkillItem }) => {
  const { t } = useLanguage();
  const [failedIconUrl, setFailedIconUrl] = useState<string | null>(null);
  const isAvailable = Boolean(skill.icon) && failedIconUrl !== skill.icon;

  return isAvailable ? (
    <img
      src={skill.icon}
      alt={`${skill.name} ${t('skills.aria.iconAlt')}`}
      className="skill-icon"
      loading="lazy"
      onError={() => setFailedIconUrl(skill.icon)}
    />
  ) : (
    <span
      className="skill-icon skill-icon-fallback"
      role="img"
      aria-label={`${t('skills.aria.iconFallback')}: ${skill.name}`}
    >
      {skill.name.slice(0, 1)}
    </span>
  );
};

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
            <SkillIcon skill={skill} />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SkillCard;
