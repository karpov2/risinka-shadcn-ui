/**
 * @section Чат и ИИ
 * @title Questionnaire
 */
import { QuestionnaireDemo } from '../../../src/demos/questionnaire-demo';
import { ComponentTile } from '../../library/kit';

/** Questionnaire — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/questionnaire-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function QuestionnaireTile() {
  return (
    <ComponentTile>
      <QuestionnaireDemo />
    </ComponentTile>
  );
}
