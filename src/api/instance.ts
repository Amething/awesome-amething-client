import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const CancelToken = axios.CancelToken;
export let cancel: any;

export const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const request = ({ ...options }: AxiosRequestConfig) => {
  baseAPI.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
  const onSuccess = (response: AxiosResponse) => response.data;
  const onError = async (error: any) => {
    const originalRequest = error.config;
  };
  const getAccessToken: AxiosRequestConfig = {
    method: "post?put?",
    url: "url",
    data: {
      refreshToken: localStorage.getItem("refreshToken"),
    },
  };
  return baseAPI(options).then(onSuccess).catch(onError);
};
