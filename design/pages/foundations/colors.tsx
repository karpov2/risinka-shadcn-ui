/**
 * @section Основы
 * @title Цвета
 */
import { ComponentSheet, Swatches } from '../../library/kit';

/** Цвета — лист основ библиотеки проекта (заготовка ядра библиотек, решение 63): из переменных темы, значения читает страница. */
export default function ColorsSheet() {
  return (
    <ComponentSheet name="Цвета">
      <Swatches names={['--color-background', '--color-foreground', '--color-card', '--color-card-foreground', '--color-popover', '--color-popover-foreground', '--color-primary', '--color-primary-foreground', '--color-secondary', '--color-secondary-foreground', '--color-muted', '--color-muted-foreground', '--color-accent', '--color-accent-foreground', '--color-destructive', '--color-border', '--color-input', '--color-ring', '--color-chart-1', '--color-chart-2', '--color-chart-3', '--color-chart-4', '--color-chart-5', '--color-sidebar', '--color-sidebar-foreground', '--color-sidebar-primary', '--color-sidebar-primary-foreground', '--color-sidebar-accent', '--color-sidebar-accent-foreground', '--color-sidebar-border', '--color-sidebar-ring']} expressions={{"--color-background":"var(--background)","--color-foreground":"var(--foreground)","--color-card":"var(--card)","--color-card-foreground":"var(--card-foreground)","--color-popover":"var(--popover)","--color-popover-foreground":"var(--popover-foreground)","--color-primary":"var(--primary)","--color-primary-foreground":"var(--primary-foreground)","--color-secondary":"var(--secondary)","--color-secondary-foreground":"var(--secondary-foreground)","--color-muted":"var(--muted)","--color-muted-foreground":"var(--muted-foreground)","--color-accent":"var(--accent)","--color-accent-foreground":"var(--accent-foreground)","--color-destructive":"var(--destructive)","--color-border":"var(--border)","--color-input":"var(--input)","--color-ring":"var(--ring)","--color-chart-1":"var(--chart-1)","--color-chart-2":"var(--chart-2)","--color-chart-3":"var(--chart-3)","--color-chart-4":"var(--chart-4)","--color-chart-5":"var(--chart-5)","--color-sidebar":"var(--sidebar)","--color-sidebar-foreground":"var(--sidebar-foreground)","--color-sidebar-primary":"var(--sidebar-primary)","--color-sidebar-primary-foreground":"var(--sidebar-primary-foreground)","--color-sidebar-accent":"var(--sidebar-accent)","--color-sidebar-accent-foreground":"var(--sidebar-accent-foreground)","--color-sidebar-border":"var(--sidebar-border)","--color-sidebar-ring":"var(--sidebar-ring)"}} />
    </ComponentSheet>
  );
}
