import { useState, useCallback } from 'react';
import { ProgressState } from '../data/types';

const STORAGE_KEY = 'skill-tree-progress';

const DEFAULT_STATE: ProgressState = {
  childName: '',
  childAge: 5,
  achieved: {},
};

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {}
  return DEFAULT_STATE;
}

function saveState(state: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(loadState);

  const updateProfile = useCallback((name: string, age: number) => {
    setState(prev => {
      const next = { ...prev, childName: name, childAge: age };
      saveState(next);
      return next;
    });
  }, []);

  const toggleAchieved = useCallback((topicId: string) => {
    setState(prev => {
      const next = {
        ...prev,
        achieved: { ...prev.achieved, [topicId]: !prev.achieved[topicId] },
      };
      saveState(next);
      return next;
    });
  }, []);

  const isAchieved = useCallback((topicId: string) => {
    return state.achieved[topicId] === true;
  }, [state.achieved]);

  return { state, updateProfile, toggleAchieved, isAchieved };
}
