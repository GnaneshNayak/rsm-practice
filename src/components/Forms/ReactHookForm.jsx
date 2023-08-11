import { useRef, useState } from 'react';
import './styles.css';
import { checkEmail, checkPassword } from './validator';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // alert('success');
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className={`form-group ${emailErrors.length > 0 ? 'error' : ''}`}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            {...register('email', {
              required: 'Required',
              validate: (value) => {
                if (!value.endsWith('@a')) {
                  return 'must end with @a';
                }
              },
            })}
          />
          {errors.email && <div className="msg">{errors.email.message}</div>}
          {/* {emailErrors.length > 0 && (
            <div className="msg">{emailErrors.join(', ')}</div>
          )} */}
        </div>
        <div
          className={`form-group ${passwordErrors.length > 0 ? 'error' : ''}`}
        >
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            {...register('password', {
              required: { value: true, message: 'required' },
              minLength: {
                value: 10,
                message: 'Must Be 10 characters or longer',
              },
              validate: {
                hasLowercase: (password) => {
                  if (!password.match(/[a-z]/)) {
                    return 'Must include a lowercase letter';
                  }
                },
                upperCase: (password) => {
                  if (!password.match(/[A-Z]/)) {
                    return 'Must include an uppercase letter';
                  }
                },
                hasNumber: (password) => {
                  if (!password.match(/[0-9]/)) {
                    return 'Must include a number';
                  }
                },
              },
            })}
          />
          {passwordErrors.length > 0 && (
            <div className="msg">{passwordErrors.join(', ')}</div>
          )}
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
