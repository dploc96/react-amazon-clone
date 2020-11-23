import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../actions/userActions';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import './RegisterPage.css';

function RegisterPage(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="register__container">
        <h1>Register</h1>

        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}

        <form onSubmit={submitHandler}>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h5>Confirm Password</h5>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="register__registerButton">
            Register
          </button>
        </form>

        <div>
          Already have an account?{' '}
          <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
