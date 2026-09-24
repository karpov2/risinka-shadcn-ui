/**
 * Шаблон страниц библиотеки проекта (решение 63 Risinka): лист компонента с сеткой вариантов и образцы основ — цвета,
 * шрифты, размеры текста, радиусы, тени, отступы. Заготовку положило ядро библиотек (`library(pages)`); файл ваш —
 * ядро его не перезапишет. Стили прямо в элементах: лист не зависит от CSS проекта, кроме переменных темы.
 */
import { useEffect, useState, type ReactNode } from 'react';

const INK = '#1f1f1f';
const MUTED = '#6b6b6b';
const LINE = '#e6e6e6';
const FONT = "-apple-system, system-ui, 'Segoe UI', sans-serif";
const MONO = "ui-monospace, 'SF Mono', Menlo, monospace";
const CAPTION = { fontFamily: MONO, fontSize: 14, color: MUTED } as const;

/** Лист компонента или группы основ: имя, файл, описание и содержимое столбиком; высота артборда — по листу (`data-risinka-height`). */
export function ComponentSheet({ name, file, description, children }: { readonly name: string; readonly file?: string; readonly description?: string; readonly children: ReactNode }) {
  return (
    <div data-risinka-height="" style={{ minHeight: 320, boxSizing: 'border-box', padding: 32, background: '#fff', display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* Шрифт и кегль — только шапке: содержимое рисуется шрифтом страницы (у shadcn/ui — Geist). */}
      <header style={{ color: INK, fontFamily: FONT, fontSize: 14 }}>
        <div style={{ fontSize: 20, fontWeight: 600 }}>{name}</div>
        {file === undefined ? null : <div style={{ ...CAPTION, marginTop: 4 }}>{file}</div>}
        {description === undefined ? null : <div style={{ marginTop: 8, color: MUTED, maxWidth: 640, lineHeight: 1.45 }}>{description}</div>}
      </header>
      {/* Рамка для fixed: компонент во весь экран (боковая панель shadcn/ui) остаётся в листе, а не ложится на шапку. */}
      <div style={{ contain: 'layout', display: 'flex', flexDirection: 'column', gap: 28 }}>{children}</div>
    </div>
  );
}

/**
 * Плитка сводки «Компоненты»: один вариант компонента по центру; все варианты — на его странице, куда ведёт подпись
 * плитки. Высота — по содержимому, не ниже 240; компонент во весь экран (боковая панель) остаётся в плитке. «stretch» —
 * на всю ширину: блок без своей ширины (карточка с графиком) по центру сжался бы в полоску.
 */
export function ComponentTile({ stretch = false, children }: { readonly stretch?: boolean; readonly children: ReactNode }) {
  return (
    <div data-risinka-height="" style={{ minHeight: 240, boxSizing: 'border-box', padding: 32, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ contain: 'layout', width: '100%', ...(stretch ? {} : { display: 'flex', justifyContent: 'center' }) }}>{children}</div>
    </div>
  );
}

/**
 * Состояние страницы компонента — один блок вариантов своим артбордом; название блока — подпись артборда, описание
 * компонента — карточка страницы. «muted» — серая подложка, как у сводных примеров shadcn/ui.
 */
export function StateFrame({ muted = false, children }: { readonly muted?: boolean; readonly children: ReactNode }) {
  return (
    <div data-risinka-height="" style={{ boxSizing: 'border-box', padding: muted ? 24 : 32, background: muted ? 'var(--color-muted, #f4f4f5)' : '#fff' }}>
      <div style={{ contain: 'layout', display: 'flex', flexDirection: 'column', gap: 28 }}>{children}</div>
    </div>
  );
}

/**
 * Витрина библиотеки — первый лист страницы «Компоненты» и обложка её карточки на экране «Библиотеки»: по одному образцу
 * компонентов по центру; артборд — размером обложки карточки (240 × 90): снимок не ужимается и читается.
 */
export function Showcase({ children }: { readonly children: ReactNode }) {
  return (
    <div data-risinka-height="" style={{ minHeight: 90, boxSizing: 'border-box', padding: 12, background: '#fff', display: 'flex', flexWrap: 'wrap', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: 8 }}>
      {children}
    </div>
  );
}

/** Заголовок блока на листе: заглавными, мелко. */
export function SheetTitle({ children }: { readonly children: ReactNode }) {
  return <div style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: MUTED }}>{children}</div>;
}

/**
 * Сетка вариантов: строки — значения одного пропа, столбцы — другого, подписи — значениями. Строка без подписи — просто
 * ряд образцов (состояния, одиночный вариант).
 */
export function Variants({ title, columns, rows }: { readonly title?: string; readonly columns?: readonly string[]; readonly rows: readonly { readonly label?: string; readonly cells: readonly ReactNode[] }[] }) {
  const width = Math.max(columns?.length ?? 0, ...rows.map((row) => row.cells.length));
  const labeled = rows.some((row) => row.label !== undefined);
  const items: ReactNode[] = [];
  if (columns !== undefined) {
    if (labeled) items.push(<span key="corner" />);
    columns.forEach((column, index) => items.push(<span key={'column-' + String(index)} style={CAPTION}>{column}</span>));
  }
  rows.forEach((row, rowIndex) => {
    if (labeled) items.push(<span key={'label-' + String(rowIndex)} style={CAPTION}>{row.label ?? ''}</span>);
    for (let index = 0; index < width; index += 1) items.push(<div key={'cell-' + String(rowIndex) + '-' + String(index)} style={{ display: 'flex', alignItems: 'center' }}>{row.cells[index] ?? null}</div>);
  });
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {title === undefined ? null : <SheetTitle>{title}</SheetTitle>}
      <div style={{ display: 'grid', gridTemplateColumns: (labeled ? 'max-content ' : '') + 'repeat(' + String(width) + ', max-content)', gap: '16px 28px', alignItems: 'center' }}>{items}</div>
    </section>
  );
}

/** Значение переменной темы, как его видит страница. */
function useVariable(name: string): string {
  const [value, setValue] = useState('');
  useEffect(() => setValue(getComputedStyle(document.documentElement).getPropertyValue(name).trim()), [name]);
  return value;
}

function Token({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  const value = useVariable(name);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
      {children}
      <div style={{ ...CAPTION, color: INK }}>{name}</div>
      <div style={CAPTION}>{value}</div>
    </div>
  );
}

const GRID = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 20 } as const;

/** Цвета: образец, имя переменной и значение. */
export function Swatches({ names }: { readonly names: readonly string[] }) {
  return (
    <div style={GRID}>
      {names.map((name) => (
        <Token key={name} name={name}>
          <div style={{ height: 56, borderRadius: 6, border: '1px solid ' + LINE, background: 'var(' + name + ')' }} />
        </Token>
      ))}
    </div>
  );
}

/** Шрифты: семейства из CSS и переменные шрифтов — строкой образца. */
export function FontSamples({ families = [], variables = [] }: { readonly families?: readonly string[]; readonly variables?: readonly string[] }) {
  const sample = 'Съешь же ещё этих мягких французских булок — 0123456789';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {variables.map((name) => (
        <Token key={name} name={name}>
          <div style={{ fontFamily: 'var(' + name + ')', fontSize: 20 }}>{sample}</div>
        </Token>
      ))}
      {families.map((family) => (
        <div key={family} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontFamily: family, fontSize: 20 }}>{sample}</div>
          <div style={{ ...CAPTION, color: INK }}>{family}</div>
        </div>
      ))}
    </div>
  );
}

/** Размеры текста: строка образца этим размером. */
export function TextSizes({ names }: { readonly names: readonly string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {names.map((name) => (
        <Token key={name} name={name}>
          <div style={{ fontSize: 'var(' + name + ')' }}>Съешь же ещё этих мягких французских булок</div>
        </Token>
      ))}
    </div>
  );
}

/** Радиусы: квадрат с этим скруглением. */
export function Radii({ names }: { readonly names: readonly string[] }) {
  return (
    <div style={GRID}>
      {names.map((name) => (
        <Token key={name} name={name}>
          <div style={{ height: 72, width: 72, border: '1px solid ' + INK, background: '#f5f5f5', borderRadius: 'var(' + name + ')' }} />
        </Token>
      ))}
    </div>
  );
}

/** Тени: белая карточка с этой тенью. */
export function Shadows({ names }: { readonly names: readonly string[] }) {
  return (
    <div style={{ ...GRID, gap: 28, padding: 8 }}>
      {names.map((name) => (
        <Token key={name} name={name}>
          <div style={{ height: 72, borderRadius: 8, background: '#fff', boxShadow: 'var(' + name + ')' }} />
        </Token>
      ))}
    </div>
  );
}

/** Отступы: полосы шагов шкалы (`--spacing` × шаг) или именованные переменные. */
export function Spacing({ base, steps = [1, 2, 3, 4, 6, 8, 12, 16], names = [] }: { readonly base?: string; readonly steps?: readonly number[]; readonly names?: readonly string[] }) {
  const bar = (width: string) => <div style={{ height: 12, width, background: '#2563eb', borderRadius: 2 }} />;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {base === undefined
        ? null
        : steps.map((step) => (
            <div key={step} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', alignItems: 'center', gap: 12 }}>
              <span style={CAPTION}>{String(step)}</span>
              {bar('calc(var(' + base + ') * ' + String(step) + ')')}
            </div>
          ))}
      {names.map((name) => (
        <Token key={name} name={name}>
          {bar('var(' + name + ')')}
        </Token>
      ))}
    </div>
  );
}
