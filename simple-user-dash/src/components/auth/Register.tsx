import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { AuthForm } from './formStyles';
import { useRegisterMutation } from '../../generated/graphql';
import { RouteComponentProps } from 'react-router-dom';

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [register] = useRegisterMutation();

  return (
    <AuthForm>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          console.log('form submitted');
          let email = data.email;
          let password = data.password;
          const response = await register({
            variables: {
              email,
              password,
            },
          });
          console.log(response);
          setSubmitting(false);
          history.push('/');
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              placeholder="email"
              name="email"
              type="input"
              as={TextField}
            />
            <div>
              <Field
                placeholder="password"
                name="password"
                type="password"
                as={TextField}
              />
            </div>
            <div>
              <Field
                placeholder="confirm password"
                name="confirmPassword"
                type="password"
                as={TextField}
              />
            </div>

            <div>
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
};

export default Register;
