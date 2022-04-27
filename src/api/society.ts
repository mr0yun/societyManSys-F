import http from ".";
export function getSocietyAll(){
  return http.request({
    url: "/societies?id=0",
    method: "get",
  })
}

export function getSociety(id: number){
  return http.request({
    url: "/societies?id=" + id,
    method: "get",
  })
}

