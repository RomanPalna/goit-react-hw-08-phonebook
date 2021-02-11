import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async userData => {
  try {
    const { data } = await axios.post('/users/signup', userData);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const login = createAsyncThunk('authlogin', async userData => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

export default { register, login, logOut };
