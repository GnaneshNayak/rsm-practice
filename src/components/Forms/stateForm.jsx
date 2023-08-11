import { useState } from 'react';
import { checkEmail, checkPassword } from './validator';

const StateForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isFistSubmited, setIsFistSubmited] = useState(false);

  const emailErrors = isFistSubmited ? checkEmail(email) : [];
  const passwordErrors = isFistSubmited ? checkPassword(password) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFistSubmited(true);

    const emailResults = emailErrors;
    const passwordResults = passwordErrors;

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
