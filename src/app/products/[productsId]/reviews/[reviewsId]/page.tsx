  export default async function reviewsDetails({
    params,
  }: {params : Promise<{productsId:String , reviewsId:String}>}){
    const {productsId,reviewsId} = await params;
    return <h1>review {reviewsId} for product {productsId}</h1>
  }