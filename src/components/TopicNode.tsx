import { Topic, SUBJECT_COLORS, TYPE_ICONS } from '../data/types';
import { TranslationKey } from '../data/translations';
import { getTranslatedTopic } from '../data/content-translations';

interface Props {
  topic: Topic;
  isUnlocked: boolean;
  isAchieved: boolean;
  lang: string;
  onClick: () => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

export function TopicNode({ topic, isUnlocked, isAchieved, lang, onClick, t }: Props) {
  const color = SUBJECT_COLORS[topic.subject] || '#888';
  const display = getTranslatedTopic(topic, lang);

  const stateClasses = isAchieved
    ? 'border-l-success bg-success/5'
    : isUnlocked
    ? 'border-l-[var(--node-color)] shadow-[0_0_8px_var(--node-color-glow)]'
    : 'border-l-muted-foreground opacity-50 cursor-not-allowed';

  return (
    <button
      className={`flex items-center gap-3 w-full px-3 sm:px-4 py-3 min-h-[48px] bg-background border border-border rounded-lg cursor-pointer transition-all text-left font-[inherit] text-foreground border-l-[3px] hover:not-disabled:translate-x-1 ${stateClasses}`}
      style={{
        '--node-color': color,
        '--node-color-glow': `${color}20`,
        borderColor: !isAchieved && isUnlocked ? `var(--node-color)` : undefined,
      } as React.CSSProperties}
      onClick={onClick}
      disabled={!isUnlocked}
    >
      <div className="text-lg w-7 text-center shrink-0">{TYPE_ICONS[topic.type] || '📚'}</div>
      <div className="flex-1 min-w-0">
        <div className="text-[0.8rem] sm:text-sm font-semibold truncate">{display.name}</div>
        <div className="flex gap-2 text-[0.65rem] sm:text-xs text-muted-foreground">
          <span>{t('ageRange', { start: topic.ageRangeStart, end: topic.ageRangeEnd })}</span>
          <span>{t(topic.type.toLowerCase() as TranslationKey)}</span>
        </div>
      </div>
      <div className="text-sm shrink-0">
        {isAchieved ? '✅' : isUnlocked ? '🔓' : '🔒'}
      </div>
    </button>
  );
}
