import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import validate from '../../helpers/validators';
import InputField from '../InputField';

const RegisterForm = (props) => {
  const { handleSubmit, pristine, isSubmitting } = props;

  return (
    <div className="md-cell md-cell--12">
      <form className="form-signin" onSubmit={handleSubmit}>
        <div>
          <Field name="email" component={InputField} label="Email" />
        </div>
        <div>
          <Field name="username" component={InputField} label="Username" />
        </div>
        <div>
          <Field name="password" component={InputField} label="Password" />
        </div>
        <button
          style={{ width: '100%' }}
          className="md-btn md-btn--block md-btn--flat md-btn--text md-pointer--hover md-background md-background--primary-hover md-inline-block"
          disabled={pristine || isSubmitting}
          type="submit"
        >
          {isSubmitting ? <i className="fa fa-spin fa-spinner" /> : null}
          Submit
        </button>
      </form>
      {/* <p className="auth_option">
        Already have an account?
        <Link to="/login" className="btn-sm">
          Login
        </Link>
      </p> */}
    </div>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.func.isRequired,
};

export default reduxForm({
  validate,
  form: 'registrationform',
})(RegisterForm);
