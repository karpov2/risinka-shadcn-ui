/**
 * @section Чат и ИИ
 * @title AiQuestionnaire
 */
import AiQuestionnaireExample from '../../../src/demos/ai-questionnaire-demo';
import { ComponentTile } from '../../library/kit';

/** AiQuestionnaire — плитка сводки shadcn/ui: каноническая композиция AiQuestionnaire. Все варианты — на странице компонента. */
export default function AiQuestionnaireTile() {
  return (
    <ComponentTile>
      <AiQuestionnaireExample />
    </ComponentTile>
  );
}
