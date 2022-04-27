import http from './index'
export function getActivityAll(){
  return http.request({
    url: "/activities?id=0",
    method: "get",
  });
}

export function getActivity(id: number){
  return http.request({
    url: "/activities?id=" + id,
    method: "get",
  })
}