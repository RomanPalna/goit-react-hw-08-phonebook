import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Registration() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'userName':
        return setUserName(value);
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
    dispatch();
    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Please, register!</h2>
      <form>
        <label onSubmit={handleSubmit}>
          User Name
          <input
            type="name"
            name="name"
            value={userName}
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
