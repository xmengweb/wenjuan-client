import axios, { ResDataType } from './index';

// 获取用户信息
export async function getUserInfoService(): Promise<ResDataType> {
  const url = '/user/info';
  const data = (await axios.get(url)).data as ResDataType;
  return data;
}

// 注册用户
export async function registerService(username: string, password: string, nickname?: string): Promise<ResDataType> {
  const url = '/user/register';
  const body = { username, password, nickname: nickname || username };
  const data = (await axios.post(url, body)).data as ResDataType;
  return data;
}

// 登录
export async function loginService(username: string, password: string): Promise<ResDataType> {
  const url = '/user/login';
  const body = { username, password };
  const data = (await axios.post(url, body)).data as ResDataType;
  return data;
}
