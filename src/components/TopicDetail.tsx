import { Topic, Dependency, SUBJECT_COLORS, TYPE_ICONS } from '../data/types';
import { TranslationKey } from '../data/translations';
import { getTranslatedTopic } from '../data/content-translations';

interface Props {
  topic: Topic;
  dependencies: Dependency[];
  allTopics: Map<string, Topic>;
  isAchieved: boolean;
  prerequisitesMet: boolean;
  childName: string;
  lang: string;
  onToggle: () => void;
  onClose: () => void;
  onTopicClick: (topic: Topic) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

export function TopicDetail({
  topic,
  dependencies,
  allTopics,
  isAchieved,
  prerequisitesMet,
  childName,
  lang,
  onToggle,
  onClose,
  onTopicClick,
  t,
}: Props) {
  const color = SUBJECT_COLORS[topic.subject] || '#888';
  const display = getTranslatedTopic(topic, lang);

  const prereqs = dependencies
    .filter(d => d.topicId === topic.id)
    .map(d => ({
      dep: d,
      topic: allTopics.get(d.prerequisiteId),
    }))
    .filter(p => p.topic);

  const unlocks = dependencies
    .filter(d => d.prerequisiteId === topic.id)
    .map(d => ({
      dep: d,
      topic: allTopics.get(d.topicId),
    }))
    .filter(p => p.topic);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-end sm:items-center justify-center z-50 p-0 sm:p-5" onClick={onClose}>
      <div
        className="relative w-full sm:max-w-[600px] max-h-[92vh] sm:max-h-[85vh] bg-secondary sm:rounded-2xl rounded-t-2xl border border-border overflow-hidden flex flex-col sm:mx-0 mx-1"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 w-9 h-9 bg-card border border-border rounded-lg text-secondary-foreground text-lg cursor-pointer flex items-center justify-center z-10 hover:bg-accent hover:text-foreground transition-colors font-[inherit]"
          onClick={onClose}
        >
          ×
        </button>

        <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b-[3px]" style={{ borderBottomColor: color }}>
          <div className="text-2xl sm:text-3xl shrink-0">{TYPE_ICONS[topic.type]}</div>
          <div className="min-w-0">
            <h2 className="text-lg sm:text-xl font-bold mb-1.5 pr-8">{display.name}</h2>
            <div className="flex gap-1.5 sm:gap-2 flex-wrap">
              <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[0.6rem] sm:text-xs font-semibold text-white" style={{ backgroundColor: color }}>
                {topic.subject}
              </span>
              <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[0.6rem] sm:text-xs bg-card text-muted-foreground">
                {topic.domain}
              </span>
              <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[0.6rem] sm:text-xs bg-card text-muted-foreground">
                {t('ageRange', { start: topic.ageRangeStart, end: topic.ageRangeEnd })}
              </span>
              <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[0.6rem] sm:text-xs bg-card text-muted-foreground">
                {t(topic.type.toLowerCase() as TranslationKey)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6">
          <section className="mb-5 sm:mb-6">
            <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">{t('description')}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground">{display.description}</p>
          </section>

          {display.evidence.length > 0 && (
            <section className="mb-5 sm:mb-6">
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">{t('masteryEvidence')}</h3>
              <ul className="flex flex-col gap-1.5">
                {display.evidence.map((e, i) => (
                  <li key={i} className="px-3 py-2 bg-card rounded-md text-[0.8rem] sm:text-sm leading-relaxed border-l-[3px]" style={{ borderLeftColor: 'var(--color-primary)' }}>
                    {e}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mb-5 sm:mb-6">
            <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">{t('assessmentPrompt')}</h3>
            <p className="italic px-3 sm:px-4 py-3 bg-card rounded-lg border-l-[3px] border-primary text-sm sm:text-base leading-relaxed">
              {display.assessmentPrompt.replace(/\{\{name\}\}/g, childName || '[child name]')}
            </p>
          </section>

          {prereqs.length > 0 && (
            <section className="mb-5 sm:mb-6">
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">{t('prerequisites')} ({prereqs.length})</h3>
              <div className="flex flex-col gap-2">
                {prereqs.map(({ dep, topic: p }) => (
                  <button
                    key={dep.prerequisiteId}
                    className="flex items-start gap-2 px-2.5 sm:px-3 py-2 bg-card rounded-lg text-[0.8rem] sm:text-sm text-left cursor-pointer transition-all border border-transparent hover:bg-accent hover:border-primary hover:translate-x-1 font-[inherit] text-foreground w-full"
                    onClick={() => onTopicClick(p!)}
                  >
                    <span className="text-[0.6rem] mt-0.5 shrink-0">{dep.strength === 'hard' ? '🔴' : '🟡'}</span>
                    <span className="font-semibold text-foreground whitespace-nowrap shrink-0">{getTranslatedTopic(p!, lang).name}</span>
                    <span className="text-muted-foreground leading-relaxed">{dep.reason}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {unlocks.length > 0 && (
            <section>
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">{t('unlocksNext')} ({unlocks.length})</h3>
              <div className="flex flex-col gap-2">
                {unlocks.map(({ dep, topic: u }) => (
                  <button
                    key={dep.topicId}
                    className="flex items-start gap-2 px-2.5 sm:px-3 py-2 bg-card rounded-lg text-[0.8rem] sm:text-sm text-left cursor-pointer transition-all border border-transparent hover:bg-accent hover:border-primary hover:translate-x-1 font-[inherit] text-foreground w-full"
                    onClick={() => onTopicClick(u!)}
                  >
                    <span className="text-[0.6rem] mt-0.5 shrink-0">{dep.strength === 'hard' ? '🔴' : '🟡'}</span>
                    <span className="font-semibold text-foreground whitespace-nowrap shrink-0">{getTranslatedTopic(u!, lang).name}</span>
                    <span className="text-muted-foreground leading-relaxed">{dep.reason}</span>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-border">
          <button
            className={`w-full py-3 rounded-[10px] font-semibold text-sm sm:text-base cursor-pointer transition-all font-[inherit] ${
              isAchieved
                ? 'bg-success border-2 border-success text-white'
                : prerequisitesMet
                ? 'bg-card border-2 text-foreground hover:text-white'
                : 'bg-card border-2 border-border text-foreground opacity-50 cursor-not-allowed'
            }`}
            style={{
              borderColor: !isAchieved && prerequisitesMet ? color : undefined,
              ['--btn-color' as string]: color,
            }}
            onClick={onToggle}
            disabled={!prerequisitesMet && !isAchieved}
            onMouseEnter={e => {
              if (!isAchieved && prerequisitesMet) {
                (e.target as HTMLElement).style.background = color;
                (e.target as HTMLElement).style.boxShadow = `0 0 16px ${color}40`;
              }
            }}
            onMouseLeave={e => {
              if (!isAchieved && prerequisitesMet) {
                (e.target as HTMLElement).style.background = '';
                (e.target as HTMLElement).style.boxShadow = '';
              }
            }}
          >
            {isAchieved ? `✅ ${t('achieved')}` : prerequisitesMet ? t('markAsAchieved') : t('prerequisitesNotMet')}
          </button>
        </div>
      </div>
    </div>
  );
}
