import http from './index'
export function login(username: string, password: string){
  return http.request({
    url: "/users/login",
    method: "post",
    data: {username, password},
  });
}

export function register(user: string){
  console.log(user);
  
  return http.request({
    url: "/users",
    method: "post",
    data: {"data": user},
  });
}