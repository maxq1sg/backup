import { FormControl, InputBase } from '@material-ui/core';
import { useField, ErrorMessage } from 'formik';
import React, { FC } from 'react';
import useStyles from 'styles/mui';
import ErrorTextMessage from './ErrorMessage/ErrorTextMessage';

const LoginFormInput: FC<{ name: string; label: string; type: string }> = ({
  name,
  label,
  type,
}) => {
  const [field, meta] = useField({ name, type });
  const hasError = Boolean(meta.touched && meta.error);
  //   const isCorrect = Boolean(meta.touched && !meta.error);
  const styles = useStyles();
  return (
    <div style={{ marginBottom: '12px' }}>
      <FormControl variant="standard" fullWidth component="div">
        <div>{label}</div>
        <InputBase
          placeholder={label}
          className={styles.input}
          error={hasError}
          fullWidth
          {...field}
          name={name}
          type={type}
        />
      </FormControl>

      {hasError ? <ErrorMessage name={name} component={ErrorTextMessage} /> : null}
    </div>
  );
};

export default LoginFormInput;
