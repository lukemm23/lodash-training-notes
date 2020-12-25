// 25. LODASH EXERCISE4

// VALIDATION MESSAGES

let backendErrors = {
  email: {
    errors: [
      {
        message: "can't be blank",
      },
    ],
  },
  password: {
    errors: [
      {
        message: 'Must contain symbols in different case',
      },
      {
        message: 'Must be at least 8 symbols length',
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: 'Must match with password',
      },
    ],
  },
};

// expect
// ["Email: Can't be blank", "Password: Must contain symbols in different case, Must be at least 8 symbols length", "PasswordConfirmation: Must match with password'"]

let humanReadableBackendErrors = _.map(backendErrors, function (value, field) {
  let fieldMessages = _.chain(value.errors).map('message').join(', ').value();
  console.log(value);
  return _.upperFirst(field) + ': ' + fieldMessages;
});

console.log(humanReadableBackendErrors);
