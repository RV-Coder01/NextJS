import Link from 'next/link'
export default async function ArticlePage(
    {params,searchParams}
    :{params:Promise<{articleId:string}>, searchParams: Promise<{lang?:"es" | "fr" | "en"}>}
){  
    const articleId=(await params).articleId
    const lang= (await searchParams).lang

    return(
        <>
        <h1>New article {articleId}</h1>
        <p>Reading in language {lang}</p>




        <Link href={`/articles/${articleId}?lang=e`}>Spanish</Link>
        <br/>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        <br/>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        </>
    )
}