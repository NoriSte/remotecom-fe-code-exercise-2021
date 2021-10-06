// @ts-check

import Text, { TextLight } from 'components/Text';

/**
 * @typedef {Object} Props
 * @property {number} peopleAmount
 * @property {boolean} fetchingPeople
 */

/**
 * Render the page title.
 *
 * @param {Props} props
 */
export function PageTitle(props) {
  const { peopleAmount, fetchingPeople } = props;

  if (fetchingPeople) {
    return (
      // @ts-expect-error `size` isn't typed yet
      <Text size="h1" as="h1">
        People
      </Text>
    );
  }

  return (
    <>
      {/* @ts-expect-error `size` isn't typed yet */}
      <Text size="h1" as="h1">
        People
        <TextLight style={{ marginLeft: '8px' }}>
          {/* @ts-expect-error `size` isn't typed yet */}
          <Text size="bodySmall">{peopleAmount} Employees</Text>
        </TextLight>
      </Text>
    </>
  );
}
