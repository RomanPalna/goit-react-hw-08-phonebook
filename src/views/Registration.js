import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Please, register!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User Name
          <input
            type="name"
            name="name"
            value={name}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
