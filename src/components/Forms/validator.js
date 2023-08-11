export function checkEmail(email) {
  const errors = [];
  console.log(errors);

  if (email.length === 0) {
    errors.push('Required');
  }
  if (!email.endsWith('@n')) {
    errors.push('need to ends up @n');
  }

  return errors;
}
export function checkPassword(password) {
  const errors = [];
  if (password.length === 0) {
    errors.push('cant be emty');
  }
  if (password.length < 10) {
    errors.push('Must Be 10 characters or longer');
  }
  if (!password.match(/[a-z]/)) {
    errors.push('Must include a lowercase letter');
  }
  if (!password.match(/[A-Z]/)) {
    errors.push('Must include an uppercase letter');
  }
  if (!password.match(/[0-9]/)) {
    errors.push('Must include a number');
  }

  return errors;
}
