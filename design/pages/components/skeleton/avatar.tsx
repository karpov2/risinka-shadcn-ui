/**
 * @section Skeleton
 * @title Avatar
 */
import { SkeletonAvatar } from '../../../../src/examples/skeleton-example';
import { StateFrame } from '../../../library/kit';

/** Skeleton · Avatar — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/skeleton-example.tsx, тег shadcn@4.21.0). */
export default function SkeletonAvatarState() {
  return (
    <StateFrame muted>
      <SkeletonAvatar />
    </StateFrame>
  );
}
