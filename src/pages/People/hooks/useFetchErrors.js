// @ts-check

import { useSelector } from '@xstate/react';
import { useMachine } from '../machine/MachineRoot';

/**
 * Get the fetch error.
 */
export function useFetchErrors() {
  return useSelector(useMachine(), (state) => state.context.fetchErrors);
}
