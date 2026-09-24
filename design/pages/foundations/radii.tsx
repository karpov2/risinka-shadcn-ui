/**
 * @section Основы
 * @title Радиусы
 */
import { ComponentSheet, Radii } from '../../library/kit';

/** Радиусы — лист основ библиотеки проекта (заготовка ядра библиотек, решение 63): из переменных темы, значения читает страница. */
export default function RadiiSheet() {
  return (
    <ComponentSheet name="Радиусы">
      <Radii names={['--radius-sm', '--radius-md', '--radius-lg', '--radius-xl', '--radius-2xl', '--radius-3xl', '--radius-4xl', '--radius']} />
    </ComponentSheet>
  );
}
