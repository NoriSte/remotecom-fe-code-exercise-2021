// @ts-check

import { useEffect } from 'react';
import { useMachine } from '../machine/MachineRoot';

/**
 * Allow starting the Fetch People machine.
 */
export function useStartMachine() {
  const { send } = useMachine();

  useEffect(() => {
    send({ type: 'START' });
  }, [
    // `send` reference is stable, this effect is triggered just once
    send,
  ]);
}
