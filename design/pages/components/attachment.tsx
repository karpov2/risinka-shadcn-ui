/**
 * @section Чат и ИИ
 * @title Attachment
 */
import { AttachmentDemo } from '../../../src/demos/attachment-demo';
import { ComponentTile } from '../../library/kit';

/** Attachment — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/attachment-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function AttachmentTile() {
  return (
    <ComponentTile>
      <AttachmentDemo />
    </ComponentTile>
  );
}
