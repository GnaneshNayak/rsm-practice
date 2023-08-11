import { useRef, useState } from 'react';
import './styles.css';
import { checkEmail, checkPassword } from './validator';

const StateForm = () => {
  const emailref = useRef();
  const passwordRef = useRef();

  const [isFistSubmited, setIsFistSubmited] = useState(false);

  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFistSubmited(true);

    const emailResults = checkEmail(emailref.current.value);
    const passwordResults = checkPassword(passwordRef.current.value);

    setEmailErrors(emailResults);
    setPasswordErrors(passwordResults);

    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert('success');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className={`form-group ${emailErrors.length > 0 ? 'error' : ''}`}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            ref={emailref}
            onChange={(e) => {
              isFistSubmited && setEmailErrors(checkEmail(e.target.value));
            }}
          />
          {emailErrors.length > 0 && (
            <div className="msg">{emailErrors.join(', ')}</div>
          )}
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
            ref={passwordRef}
            onChange={(e) => {
              isFistSubmited &&
                setPasswordErrors(checkPassword(e.target.value));
            }}
          />
          {passwordErrors.length > 0 && (
            <div className="msg">{passwordErrors.join(', ')}</div>
          )}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StateForm;
