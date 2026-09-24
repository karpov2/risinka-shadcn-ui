/**
 * @section InputOTP
 * @title Digits Only
 */
import { InputOTPPattern } from '../../../../src/examples/input-otp-example';
import { StateFrame } from '../../../library/kit';

/** InputOTP · Digits Only — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/input-otp-example.tsx, тег shadcn@4.21.0). */
export default function InputOTPPatternState() {
  return (
    <StateFrame muted>
      <InputOTPPattern />
    </StateFrame>
  );
}
