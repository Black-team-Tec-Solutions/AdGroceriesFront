import {_api} from "./api"

export const signupPoint = (data) => _api.post ('/auth/signup',data);
export const loginPoint = (data) => _api.post('/auth/login',data);
export const logoutPoint = () => _api.post('/auth/logout');

