import http from './index'
export function getNewsAll(){
  return http.request({
    url: "/news?id=0",
    method: "get",
  });
}

export function getNews(id: number){
  return http.request({
    url: "/news?id=" + id,
    method: "get",
  })
}