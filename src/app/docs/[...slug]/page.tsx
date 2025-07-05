export default async function docs({params,}:{
    params : Promise <{slug : String[]}>
}){
    const {slug} = await params;
    if(slug?.length===2){
        return <h1>
            viewing docs for feature {slug[0]} and concept {slug[1]}
        </h1>
          }
           if(slug?.length===1){
            return <h1>
                viewing docs for feature {slug[0]}
            </h1>
        }
    return <h1>docs Url</h1>
}