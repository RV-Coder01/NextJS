import {comments} from "./data";
import {type NextRequest} from "next/server"

export async function GET(request:NextRequest){
  const searchParam=request.nextUrl.searchParams
  const query=searchParam.get("query")
  const filteredComment=query ? comments.filter((c)=>c.comment.includes(query)) :comments
  return Response.json(filteredComment)
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