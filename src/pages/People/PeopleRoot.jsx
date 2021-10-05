import { People } from './People';
import { MachineRoot } from './machine/MachineRoot';

/**
 * The People page entry point.
 */
export default function PeopleRoot() {
  return (
    <MachineRoot>
      <People />
    </MachineRoot>
  );
}
