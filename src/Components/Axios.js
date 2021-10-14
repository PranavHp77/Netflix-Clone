import axios from "axios";
import {baseUrl} from '../const/constants'

const instance = axios.create({
    baseURL: baseUrl,
  });

export default instance