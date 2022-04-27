import http from './index'
export function login(username: string, password: string){
  return http.request({
    url: "/users/login",
    method: "post",
    data: {username, password},
  });
}

export function register(user: string){
  return http.request({
    url: "/users",
    method: "post",
    data: {"data": user},
  });
}

export function modifyUser(user: string){
  return http.request({
    url: "/users",
    method: "patch",
    data: {"data": user},
  })
}

export function modifyPsd(username: string, oldPassword: string, newPassword: string){
  return http.request({
    url: "/users/psd",
    method: "patch",
    data: {username, oldPassword, newPassword},
  })
}