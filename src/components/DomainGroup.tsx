import { useState } from 'react';
import { Topic, SUBJECT_COLORS } from '../data/types';
import { TopicNode } from './TopicNode';
import { TranslationKey } from '../data/translations';

interface Props {
  domain: string;
  topics: Topic[];
  achieved: Record<string, boolean>;
  unlockedIds: Set<string>;
  lang: string;
  onTopicClick: (topic: Topic) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

export function DomainGroup({ domain, topics, achieved, unlockedIds, lang, onTopicClick, t }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const subject = topics[0]?.subject || '';
  const color = SUBJECT_COLORS[subject] || '#888';
  const doneCount = topics.filter(t => achieved[t.id]).length;
  const pct = (doneCount / topics.length) * 100;

  return (
    <div className="mb-4 border border-border rounded-[10px] overflow-hidden">
      <button
        className="flex items-center gap-3 w-full px-3 sm:px-4 py-2.5 sm:py-3 min-h-[44px] bg-card border-none text-foreground cursor-pointer font-[inherit] text-sm font-semibold hover:bg-accent transition-colors"
        onClick={() => setCollapsed(!collapsed)}
      >
        <span className="text-muted-foreground text-xs">{collapsed ? '▸' : '▾'}</span>
        <span className="flex-1 text-left">{domain}</span>
        <span className="text-xs text-muted-foreground font-medium">{doneCount}/{topics.length}</span>
        <div className="w-[50px] sm:w-[80px] h-1.5 bg-background rounded overflow-hidden shrink-0">
          <div
            className="h-full rounded transition-[width] duration-300"
            style={{ width: `${pct}%`, background: color }}
          />
        </div>
      </button>
      {!collapsed && (
        <div className="flex flex-col gap-1 p-2 sm:p-3">
          {topics.map(topic => (
            <TopicNode
              key={topic.id}
              topic={topic}
              isUnlocked={unlockedIds.has(topic.id)}
              isAchieved={!!achieved[topic.id]}
              lang={lang}
              onClick={() => onTopicClick(topic)}
              t={t}
            />
          ))}
        </div>
      )}
    </div>
  );
}
