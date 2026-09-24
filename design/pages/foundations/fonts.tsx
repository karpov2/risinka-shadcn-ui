/**
 * @section Основы
 * @title Шрифты
 */
import { ComponentSheet, FontSamples } from '../../library/kit';

/** Шрифты — лист основ библиотеки проекта (заготовка ядра библиотек, решение 63): из переменных темы, значения читает страница. */
export default function FontsSheet() {
  return (
    <ComponentSheet name="Шрифты">
      <FontSamples families={['Geist Variable']} variables={['--font-heading', '--font-sans']} />
    </ComponentSheet>
  );
}
