import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { AuthForm } from './formStyles';
import { useLoginMutation, MeDocument, MeQuery } from '../../generated/graphql';
import { RouteComponentProps } from 'react-router-dom';
import { setAccessToken } from '../../accessToken';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [login] = useLoginMutation();
  return (
    <AuthForm>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          let email = data.email;
          let password = data.password;
          const response = await login({
            variables: {
              email,
              password,
            },
            update: (store, { data }) => {
              if (!data) {
                return null;
              }
              store.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  me: data.login.user,
                },
              });
            },
          });
          if (response && response.data) {
            setAccessToken(response.data.login.accessToken);
          }
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

export default Login;
