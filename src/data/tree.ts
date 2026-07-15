import { Topic, SubjectGroup, DomainGroup, Dependency } from './types';

export function computeTopicLevels(topics: Topic[], dependencies: Dependency[]): Map<string, number> {
  const levels = new Map<string, number>();
  const depsByTopic = new Map<string, Dependency[]>();

  for (const dep of dependencies) {
    if (!depsByTopic.has(dep.topicId)) {
      depsByTopic.set(dep.topicId, []);
    }
    depsByTopic.get(dep.topicId)!.push(dep);
  }

  function getLevel(topicId: string): number {
    if (levels.has(topicId)) return levels.get(topicId)!;
    const deps = depsByTopic.get(topicId);
    if (!deps || deps.length === 0) {
      levels.set(topicId, 0);
      return 0;
    }
    const maxPrereqLevel = Math.max(...deps.map(d => getLevel(d.prerequisiteId)));
    const level = maxPrereqLevel + 1;
    levels.set(topicId, level);
    return level;
  }

  for (const topic of topics) {
    getLevel(topic.id);
  }

  return levels;
}

export function buildTree(topics: Topic[], dependencies?: Dependency[]): SubjectGroup[] {
  const topicLevels = dependencies ? computeTopicLevels(topics, dependencies) : new Map();
  const subjectMap = new Map<string, Map<string, Topic[]>>();

  for (const topic of topics) {
    if (!subjectMap.has(topic.subject)) {
      subjectMap.set(topic.subject, new Map());
    }
    const domainMap = subjectMap.get(topic.subject)!;
    if (!domainMap.has(topic.domain)) {
      domainMap.set(topic.domain, []);
    }
    domainMap.get(topic.domain)!.push(topic);
  }

  const tree: SubjectGroup[] = [];

  for (const [subject, domainMap] of subjectMap) {
    const domains: DomainGroup[] = [];
    for (const [domain, domainTopics] of domainMap) {
      domainTopics.sort((a, b) => {
        const levelA = topicLevels.get(a.id) ?? 0;
        const levelB = topicLevels.get(b.id) ?? 0;
        if (levelA !== levelB) return levelA - levelB;
        if (a.ageRangeStart !== b.ageRangeStart) return a.ageRangeStart - b.ageRangeStart;
        return a.name.localeCompare(b.name);
      });
      domains.push({ domain, topics: domainTopics });
    }
    domains.sort((a, b) => a.topics[0].ageRangeStart - b.topics[0].ageRangeStart);
    tree.push({ subject, domains });
  }

  tree.sort((a, b) => {
    const order = ['Science', 'Mathematics', 'English', 'History', 'Personal & Social Development', 'Life Skills', 'Computing', 'Learning to Learn'];
    return order.indexOf(a.subject) - order.indexOf(b.subject);
  });

  return tree;
}

export function getSubjectTopicCount(subject: SubjectGroup): number {
  return subject.domains.reduce((sum, d) => sum + d.topics.length, 0);
}

export function getSubjectAchievedCount(subject: SubjectGroup, achieved: Record<string, boolean>): number {
  return subject.domains.reduce((sum, d) => sum + d.topics.filter(t => achieved[t.id]).length, 0);
}
