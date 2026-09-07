import {comments} from "./data";
import {type NextRequest} from "next/server"
import {headers,cookies} from "next/headers"

export async function GET(request:NextRequest){
  const searchParam=request.nextUrl.searchParams
  const query=searchParam.get("query")

  //using header api from request
  const requestHeader= new Headers(request.headers)
  console.log(requestHeader.get("user-agent"))

  //using header api from headers
  const headerList=await headers()
  console.log(headerList.get("user-agent"))


  //using cookies api from request
  console.log(request.cookies.get("theme"))

  //using cookies api from headers
  const cookieStore=await cookies()
  cookieStore.set("color","blue")
  console.log(cookieStore.get("color"))


  const filteredComment=query ? comments.filter((c)=>c.comment.includes(query)) :comments
  return Response.json("<h1>Comments</h1>",{
    headers:{
        "Content-Type":"text/html",
        "Set-cookie":"theme=dark"
    }
  })
}

export async function POST(request:Request){
    const c=await request.json()
    const newComment={
        id:comments.length+1,
        name:c.name,
        comment:c.comment
    }
    comments.push(newComment)
    return Response.json(newComment)
    
}