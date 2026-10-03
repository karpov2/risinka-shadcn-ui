/**
 * @section Основы
 * @title Радиусы
 */
import { ComponentSheet, Radii } from '../../library/kit';

/** Радиусы — лист основ библиотеки проекта (заготовка ядра библиотек, решение 63): из переменных темы, значения читает страница. */
export default function RadiiSheet() {
  return (
    <ComponentSheet name="Радиусы">
      <Radii names={['--radius-sm', '--radius-md', '--radius-lg', '--radius-xl', '--radius-2xl', '--radius-3xl', '--radius-4xl', '--radius']} expressions={{"--radius-sm":"calc(var(--radius) * 0.6)","--radius-md":"calc(var(--radius) * 0.8)","--radius-lg":"var(--radius)","--radius-xl":"calc(var(--radius) * 1.4)","--radius-2xl":"calc(var(--radius) * 1.8)","--radius-3xl":"calc(var(--radius) * 2.2)","--radius-4xl":"calc(var(--radius) * 2.6)"}} />
    </ComponentSheet>
  );
}
