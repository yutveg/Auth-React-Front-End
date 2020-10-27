import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Button } from '@material-ui/core';
const Register: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: '', lastName: '' }}
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
              placeholder="first name"
              name="firstName"
              type="input"
              as={TextField}
            />
            <div>
              <Field
                placeholder="last name"
                name="lastName"
                type="input"
                as={TextField}
              />
            </div>

            <div>
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
