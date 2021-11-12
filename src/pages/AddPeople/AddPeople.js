import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import Button from 'components/Button';
import Text, { TextLight } from 'components/Text';
import { Card, CardHeader, CardBody, CardFooter } from 'components/Card';
import TextField from 'components/Form/TextField';
import SelectField from 'components/Form/SelectField';
import RadioInput from 'components/Form/RadioInput';
import { Currency } from 'components/Currency';
import { Radio, Group } from 'components/EmploymentType';
import { Hint } from 'components/Form/FieldParts';
import LoadingLogo from 'components/LoadingLogo';
import { countries } from 'utils';
import { addPerson } from 'api';


const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

const ContainerSmall = styled.div`
  width: 100%;
  max-width: 530px;
  margin: 0 auto;
`;

const LoadingIcon = styled(LoadingLogo)`
  position: absolute;
  top: 32px;
  right: 32px;
`;

const initialValidation = {
  name: null,
  jobTitle: null,
  country: null,
  salary: null,
  employment: null,
};

export default function AddPeople() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [country, setCountry] = useState('');
  const [salary, setSalary] = useState('');
  const [currency, setCurrency] = useState('EUR');
  const [employment, setEmployment] = useState('');
  const [validation, setValidation] = useState(initialValidation);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const requiredValidation = useCallback(
    (newValue, name) => {
      let newValidation = {};
      if (!newValue) {
        newValidation = {
          [name]: true,
        };
      }
      else {
        newValidation = {
          [name]: false,
        };
      }

      setValidation((validation) => ({
        ...validation,
        ...newValidation,
      }));
    },
    [validation],
  );

  async function handleSubmit(e) {
    setIsSubmitting(true);
    e.preventDefault();
    let hasErrors = false;

    for (const val in validation) {
      if (validation[val] === null) {
        setValidation((validation) => ({
          ...validation,
          [val]: true,
        }));
        hasErrors = true;
      }
      if (validation[val] === true) {
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setIsSubmitting(false);
      return;
    };

    const person = {
      name,
      jobTitle,
      country,
      salary,
      currency,
      employment
    };

    addPerson(person);
    setIsSubmitting(false);
    history.push('/');
  }

  function handleChange(setFunction, name, newValue) {
    requiredValidation(newValue, name);
    setFunction(newValue);
  }

  return (
    <Container>
      <Card>
        <CardHeader>
          <Text size="h4">Add new member</Text>
          <br />
          <TextLight size="body-small">Fill out the information of your new team member</TextLight>
          {isSubmitting && <LoadingIcon />}
        </CardHeader>
        <CardBody>
          <ContainerSmall>
          <form id="AddForm" data-testid="AddForm" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              type="text"
              placeholder="Jane Doe"
              name="name"
              helper="First and last names"
              errorMsg={validation && !validation.name ? null : 'This field is required'}
              onChange={(e) => handleChange(setName, 'name', e.target.value)}
            />
            <TextField
              label="Job title"
              type="text"
              placeholder="e.g. Product Manager"
              helper="What is their role?"
              errorMsg={validation && !validation.jobTitle ? null : 'This field is required'}
              name="jobTitle"
              onChange={(e) => handleChange(setJobTitle, 'jobTitle', e.target.value)}
            />
            <SelectField
              label="Country"
              name="country"
              errorMsg={validation && !validation.country ? null : 'This field is required'}
              helper="Where are you based"
              onChange={(e) => handleChange(setCountry, 'country', e.target.value)}
            >
              <option value="" hidden>
                Select Country
              </option>
              {countries.map(({ value, name }) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </SelectField>
            
            <Currency>
              <TextField
                label="Salary"
                helper="Gross yearly salary"
                placeholder="e.g. 5000"
                onChange={(e) => handleChange(setSalary, 'salary', e.target.value)}
                errorMsg={validation && !validation.salary ? null : 'This field is required'}
                name="salary"
              />
              <SelectField
                label=""
                name="currency"
                data-testid="currency"
                errorMsg={validation && !validation.currency ? null : 'This field is required'}
                onChange={(e) => handleChange(setCurrency, 'currency', e.target.value)}
              >
                <option>EUR</option>
                <option>USD</option>
                <option>GBP</option>
              </SelectField>
            </Currency>
            <Radio>
              <h4>Employment Type</h4>
              <Group>
                <RadioInput
                  label={"Contractor"}
                  name="employment"
                  onChange={() => handleChange(setEmployment, 'employment', 'contractor')}
                  checked={employment === 'contractor'}
                  text="Pay your contractors"
                  value="contractor"
                />
                <RadioInput
                  label={"Employee"}
                  name="employment"
                  text="Hire and manage remotely"
                  checked={employment === 'employee'}
                  onChange={() => handleChange(setEmployment, 'employment', 'employee')}
                  value="employee"
                />
              </Group>
              {validation && validation.employment === true && (
                <Hint errorMsg="This field is required" />
              )}
            </Radio>
          </form>
          </ContainerSmall>
        </CardBody>
        <CardFooter>
          <Link style={{ textDecoration: 'none' }} to="/">
            <Button type="button" inverse bigger>
              Cancel
            </Button>
          </Link>
          <Button type="submit" form="AddForm" bigger isLoading={isSubmitting}>
            Add Member
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
}
