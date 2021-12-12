import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers, Session } from "@retesm/web";
import axios, {AxiosRequestConfig} from "axios";
//import config from "config";

const apiUrl = process.env.API_URL || '';

export default (req: any, res: any) => {
  //const session = Session.create(req, res);

  const axiosInstance = axios.create({
    baseURL: apiUrl,
  });

  // Set the AUTH token for any request
  axiosInstance.interceptors.request.use(function (requestConfig: AxiosRequestConfig) {
    const token = null; //session.getApiToken();
    if(requestConfig?.headers)
      requestConfig.headers.Authorization = token ? `Bearer ${token}` : '';
    return requestConfig;
  });
  // const token = session.get();
  // const user =
  // const authState = user ? {auth: { loggedIn: true, user }} : {};

  const store = createStore(
    reducers,
    {}, //authState,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};
