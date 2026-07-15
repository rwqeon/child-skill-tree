import { useMemo, useState } from 'react';
import { topics } from './data/topics';
import { dependencies } from './data/dependencies';
import { buildTree } from './data/tree';
import { Topic } from './data/types';
import { useProgress } from './hooks/useProgress';
import { useLanguage } from './hooks/useLanguage';
import { ChildProfile } from './components/ChildProfile';
import { SubjectTabs } from './components/SubjectTabs';
import { SkillTree } from './components/SkillTree';
import { TopicDetail } from './components/TopicDetail';

const tree = buildTree(topics, dependencies);
const topicsMap = new Map(topics.map(t => [t.id, t]));

export default function App() {
  const { state, updateProfile, toggleAchieved, isAchieved } = useProgress();
  const { lang, toggleLanguage, t } = useLanguage();
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const prerequisitesMet = useMemo(() => {
    if (!selectedTopic) return false;
    const prereqs = dependencies.filter(d => d.topicId === selectedTopic.id);
    return prereqs.every(d => isAchieved(d.prerequisiteId));
  }, [selectedTopic, isAchieved]);

  const totalTopics = topics.filter(t => t.ageRangeStart <= state.childAge).length;
  const totalAchieved = topics.filter(t => t.ageRangeStart <= state.childAge && isAchieved(t.id)).length;
  const progress = totalTopics > 0 ? Math.round((totalAchieved / totalTopics) * 100) : 0;

  return (
    <div>
      <header className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 p-3 sm:p-4 bg-secondary rounded-xl border border-border mb-5">
        <h1 className="text-lg sm:text-xl font-bold text-foreground">{t('appTitle')}</h1>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-2.5 py-1 bg-card rounded-lg text-xs sm:text-sm text-muted-foreground border border-border">
            {state.childName || t('noName')}
          </span>
          <span className="px-2.5 py-1 bg-card rounded-lg text-xs sm:text-sm text-muted-foreground border border-border">
            {t('childAge')} {state.childAge}
          </span>
          <span className="px-2.5 py-1 bg-card rounded-lg text-xs sm:text-sm text-muted-foreground border border-border">
            {t('progress', { done: totalAchieved, total: totalTopics, percent: progress })}
          </span>
          <button
            className="px-2.5 py-1 bg-card border border-border rounded-lg text-xs sm:text-sm text-foreground cursor-pointer transition-all hover:bg-accent hover:border-primary font-[inherit]"
            onClick={toggleLanguage}
          >
            {lang === 'id' ? '🇬🇧 EN' : '🇮🇩 ID'}
          </button>
        </div>
      </header>

      <ChildProfile
        name={state.childName}
        age={state.childAge}
        onChange={updateProfile}
        t={t}
      />

      <SubjectTabs
        subjects={tree}
        activeSubject={activeSubject}
        achieved={state.achieved}
        onSelect={setActiveSubject}
        t={t}
      />

      <SkillTree
        subjects={tree}
        activeSubject={activeSubject}
        childAge={state.childAge}
        achieved={state.achieved}
        dependencies={dependencies}
        lang={lang}
        onTopicClick={setSelectedTopic}
        t={t}
      />

      {selectedTopic && (
        <TopicDetail
          topic={selectedTopic}
          dependencies={dependencies}
          allTopics={topicsMap}
          isAchieved={isAchieved(selectedTopic.id)}
          prerequisitesMet={prerequisitesMet}
          childName={state.childName}
          lang={lang}
          onToggle={() => toggleAchieved(selectedTopic.id)}
          onClose={() => setSelectedTopic(null)}
          onTopicClick={setSelectedTopic}
          t={t}
        />
      )}
    </div>
  );
}
