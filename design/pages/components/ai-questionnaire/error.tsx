/**
 * @section AiQuestionnaire
 * @title Ошибка
 */
import { AiQuestionnaireError } from '../../../../src/examples/ai-questionnaire-example';
import { StateFrame } from '../../../library/kit';

/** AiQuestionnaire · Ошибка — канонические состояния AiQuestionnaire. */
export default function AiQuestionnaireErrorState() {
  return (
    <StateFrame>
      <AiQuestionnaireError />
    </StateFrame>
  );
}
