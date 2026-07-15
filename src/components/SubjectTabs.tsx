import { SubjectGroup, SUBJECT_COLORS } from '../data/types';
import { getSubjectTopicCount, getSubjectAchievedCount } from '../data/tree';
import { TranslationKey } from '../data/translations';

interface Props {
  subjects: SubjectGroup[];
  activeSubject: string | null;
  achieved: Record<string, boolean>;
  onSelect: (subject: string | null) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

export function SubjectTabs({ subjects, activeSubject, achieved, onSelect, t }: Props) {
  return (
    <div className="flex gap-2 py-2 overflow-x-auto mb-5 -mx-1 px-1 scrollbar-hide">
      <button
        className={`flex flex-col items-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 min-h-[44px] bg-secondary border-2 rounded-[10px] text-secondary-foreground cursor-pointer transition-all whitespace-nowrap font-[inherit] text-xs sm:text-sm ${
          activeSubject === null
            ? 'border-primary text-foreground bg-card shadow-[0_0_12px_rgba(99,102,241,0.3)]'
            : 'border-border hover:bg-accent hover:border-muted-foreground'
        }`}
        onClick={() => onSelect(null)}
      >
        {t('all')}
      </button>
      {subjects.map(s => {
        const total = getSubjectTopicCount(s);
        const done = getSubjectAchievedCount(s, achieved);
        const color = SUBJECT_COLORS[s.subject] || '#888';
        const isActive = activeSubject === s.subject;
        return (
          <button
            key={s.subject}
            className={`flex flex-col items-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 min-h-[44px] bg-secondary border-2 rounded-[10px] cursor-pointer transition-all whitespace-nowrap font-[inherit] ${
              isActive
                ? 'text-foreground bg-card shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                : 'text-secondary-foreground border-border hover:bg-accent hover:border-muted-foreground'
            }`}
            style={{
              borderColor: isActive ? color : undefined,
              boxShadow: isActive ? `0 0 12px ${color}30` : undefined,
            } as React.CSSProperties}
            onClick={() => onSelect(s.subject)}
          >
            <span className="text-[0.65rem] sm:text-xs font-semibold">{s.subject}</span>
            <span className={`text-[0.6rem] sm:text-[0.65rem] ${isActive ? 'text-muted-foreground' : 'text-muted-foreground'}`}
              style={{ color: isActive ? color : undefined }}>
              {done}/{total}
            </span>
          </button>
        );
      })}
    </div>
  );
}
