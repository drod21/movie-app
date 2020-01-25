import axios from 'axios';

const successHandler = (response) => response.data;
const errorHandler = (error) => Promise.reject({ ...error })
export const axiosInstance = axios.create({ responseType: 'json' })

axiosInstance.interceptors
  .response
  .use(
    res => successHandler(res),
    err => errorHandler(err)
  )