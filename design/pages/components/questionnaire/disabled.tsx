/**
 * @section Questionnaire
 * @title Disabled
 */
import { QuestionnaireDisabled } from '../../../../src/examples/questionnaire-example';
import { StateFrame } from '../../../library/kit';

/** Questionnaire · Disabled — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/questionnaire-example.tsx, тег shadcn@4.21.0). */
export default function QuestionnaireDisabledState() {
  return (
    <StateFrame muted>
      <QuestionnaireDisabled />
    </StateFrame>
  );
}
