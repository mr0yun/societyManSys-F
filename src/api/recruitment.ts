import http from './index'
export function getRecruitmentAll(){
  return http.request({
    url: "/recruitments?id=0",
    method: "get",
  });
}

export function getActivity(id: number){
  return http.request({
    url: "/recruitments?id=" + id,
    method: "get",
  })
}