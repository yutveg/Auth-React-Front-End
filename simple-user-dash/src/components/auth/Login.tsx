import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Button } from '@material-ui/core';

const Login: React.FC = () => {
  return (
    <div
      style={{
        margin: '300px auto',
        padding: '20px',
        backgroundColor: '#fafafa',
        width: '300px',
      }}
    >
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // some async process
          console.log(data);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Field
              placeholder="username"
              name="username"
              type="input"
              as={TextField}
            />
            <div>
              <Field
                placeholder="password"
                name="password"
                type="input"
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
    </div>
  );
};

export default Login;
