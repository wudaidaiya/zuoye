// 对axios封装
import axios from 'axios';
const request = axios.create({
    baseURL:'http://localhost:3000'
});

export default request;