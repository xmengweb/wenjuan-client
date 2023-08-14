import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/api',
});

export type ResDataType = {
  [key: string]: unknown;
};
