import axios, { AxiosError } from 'axios';

export const baseUrl = 'https://dev.api.myguru.com/api/v1';

const instance = axios.create({
  baseURL: baseUrl,
});

const errorHandler = (err: AxiosError) => {
  return (err.response?.status)
}

instance.interceptors.response.use(
  response => (response),
  (err: AxiosError) => errorHandler(err));

export default instance;