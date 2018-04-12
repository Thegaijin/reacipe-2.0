const validate = (values) => {
  const errors = {};
  const requiredFields = ['username', 'email', 'password'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = `${values.email} does not meet standard email conventions`;
    console.log('email errors', errors.email);
  }

  if (values.username && !/^[a-zA-Z_]+([a-zA-Z0-9]{1,10})$/i.test(values.username)) {
    errors.username = `${
      values.username
    } is not a valid username. It should comprise of alphanumeric values & an underscore.`;
    console.log('email errors', errors.username);
  }

  if (values.password && !/^\w{6,25}$/i.test(values.password)) {
    errors.password =
      'Password can only comprise of alphanumeric values & an underscore and not more than 25 characters';
  }

  if (values.categoryname && !/^[a-zA-Z\s]+$/i.test(values.categoryname)) {
    errors.categoryname = `${values.categoryname} is not a valid category name`;
  }

  if (values.recipename && !/^[a-zA-Z\s]+$/i.test(values.recipename)) {
    errors.recipename = `${values.recipename} is not a valid recipe name`;
  }
  return errors;
};

export default validate;
