import { TranslationKey } from '../data/translations';

interface Props {
  name: string;
  age: number;
  onChange: (name: string, age: number) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

export function ChildProfile({ name, age, onChange, t }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-secondary rounded-xl border border-border mb-5">
      <div className="flex-1">
        <label htmlFor="child-name" className="block text-sm font-semibold text-muted-foreground mb-2">
          {t('childName')}
        </label>
        <input
          id="child-name"
          type="text"
          value={name}
          onChange={e => onChange(e.target.value, age)}
          placeholder={t('namePlaceholder')}
          className="w-full px-3 py-2.5 bg-card border border-border rounded-lg text-foreground text-base outline-none transition-colors focus:border-primary"
        />
      </div>
      <div className="flex-1">
        <label htmlFor="child-age" className="block text-sm font-semibold text-muted-foreground mb-2">
          {t('childAge')}: {age}
        </label>
        <input
          id="child-age"
          type="range"
          min={4}
          max={16}
          value={age}
          onChange={e => onChange(name, Number(e.target.value))}
          className="w-full h-1.5 bg-card rounded appearance-none outline-none accent-primary cursor-pointer"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>4</span>
          <span>16</span>
        </div>
      </div>
    </div>
  );
}
