// @ts-check

import { useSelector } from '@xstate/react';
import { useMachine } from '../machine/MachineRoot';

/**
 * Return if the machine is fetching the people or not.
 */
export function useIsFetching() {
  return useSelector(useMachine(), (state) => state.context.fetching);
}
