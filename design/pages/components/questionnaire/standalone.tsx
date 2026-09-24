/**
 * @section Questionnaire
 * @title Standalone
 */
import { QuestionnaireStandalone } from '../../../../src/examples/questionnaire-example';
import { StateFrame } from '../../../library/kit';

/** Questionnaire · Standalone — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/questionnaire-example.tsx, тег shadcn@4.21.0). */
export default function QuestionnaireStandaloneState() {
  return (
    <StateFrame muted>
      <QuestionnaireStandalone />
    </StateFrame>
  );
}
