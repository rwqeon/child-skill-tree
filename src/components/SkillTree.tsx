import { useMemo } from 'react';
import { Topic, SubjectGroup, Dependency } from '../data/types';
import { DomainGroup } from './DomainGroup';
import { TranslationKey } from '../data/translations';

interface Props {
  subjects: SubjectGroup[];
  activeSubject: string | null;
  childAge: number;
  achieved: Record<string, boolean>;
  dependencies: Dependency[];
  lang: string;
  onTopicClick: (topic: Topic) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

export function SkillTree({
  subjects,
  activeSubject,
  childAge,
  achieved,
  dependencies,
  lang,
  onTopicClick,
  t,
}: Props) {
  const unlockedIds = useMemo(() => {
    const unlocked = new Set<string>();
    const topicsWithDeps = new Set<string>();
    const depsByTopic = new Map<string, Dependency[]>();

    for (const dep of dependencies) {
      topicsWithDeps.add(dep.topicId);
      if (!depsByTopic.has(dep.topicId)) {
        depsByTopic.set(dep.topicId, []);
      }
      depsByTopic.get(dep.topicId)!.push(dep);
    }

    for (const subject of subjects) {
      for (const domain of subject.domains) {
        for (const topic of domain.topics) {
          if (!topicsWithDeps.has(topic.id)) {
            unlocked.add(topic.id);
          }
        }
      }
    }

    let changed = true;
    while (changed) {
      changed = false;
      for (const [topicId, deps] of depsByTopic) {
        if (unlocked.has(topicId)) continue;
        const allMet = deps.every(d => achieved[d.prerequisiteId] || unlocked.has(d.prerequisiteId));
        if (allMet) {
          unlocked.add(topicId);
          changed = true;
        }
      }
    }

    return unlocked;
  }, [achieved, dependencies, subjects]);

  const filtered = activeSubject
    ? subjects.filter(s => s.subject === activeSubject)
    : subjects;

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      {filtered.map(subject => (
        <div key={subject.subject} className="bg-secondary rounded-xl p-4 sm:p-5 border border-border">
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pb-2 sm:pb-3 border-b-2 border-border">
            {subject.subject}
          </h2>
          {subject.domains.map(domain => {
            const visibleTopics = domain.topics.filter(t => t.ageRangeStart <= childAge);
            if (visibleTopics.length === 0) return null;
            return (
              <DomainGroup
                key={domain.domain}
                domain={domain.domain}
                topics={visibleTopics}
                achieved={achieved}
                unlockedIds={unlockedIds}
                lang={lang}
                onTopicClick={onTopicClick}
                t={t}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
