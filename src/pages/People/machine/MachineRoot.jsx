// @ts-check

/** @typedef {import('react')} React */
/** @typedef {import('./types.js').Events} Events */
/** @typedef {import('./types.js').States} States */
/** @typedef {import('./types.js').Context} Context */

import { createContext, useContext } from 'react';
import { useInterpret } from '@xstate/react';
import { machine } from './machine';

/** @type React.Context<import('xstate').Interpreter<Context, any, Events, States> | undefined> */
const MachineContext = createContext(undefined);

/**
 * The machine is exposed to all the children of `MachineRoot`
 *
 * @param {{ children: JSX.Element}} [Props]
 */
export function MachineRoot({ children }) {
  const service = useInterpret(machine, { devTools: process.env.NODE_ENV === 'development' });

  return <MachineContext.Provider value={service}>{children}</MachineContext.Provider>;
}

/**
 * Used by every component that needs to access the running machine. It hides the React Context,
 * easing future refactors.
 */
export function useMachine() {
  const service = useContext(MachineContext);
  if (!service) {
    throw new Error('Missing MachineRoot');
  }
  return service;
}
