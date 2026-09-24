/**
 * @section Поля и формы
 * @title InputOTP
 */
import { InputOTPDemo } from '../../../src/demos/input-otp-demo';
import { ComponentTile } from '../../library/kit';

/** InputOTP — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/input-otp-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function InputOTPTile() {
  return (
    <ComponentTile>
      <InputOTPDemo />
    </ComponentTile>
  );
}
