// @ts-check

import { useSelector } from '@xstate/react';
import { useMachine } from '../machine/MachineRoot';

/**
 * Get the fetched people.
 */
export function usePeople() {
  return useSelector(useMachine(), (state) => state.context.people);
}
