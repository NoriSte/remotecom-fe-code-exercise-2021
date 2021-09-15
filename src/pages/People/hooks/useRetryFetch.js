// @ts-check

import { useCallback } from 'react';
import { useMachine } from '../machine/MachineRoot';

/**
 * Allow retrying the fetch after a failure.
 */
export function useRetryFetch() {
  const { send } = useMachine();

  return useCallback(() => {
    send({ type: 'RETRY' });
  }, [send]);
}
