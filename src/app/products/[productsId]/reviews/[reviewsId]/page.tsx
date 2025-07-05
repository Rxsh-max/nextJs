  import {notFound} from 'next/navigation'
  export default async function reviewsDetails({
    params,
  }: {params : Promise<{productsId:String , reviewsId:string}>}){
    const {productsId,reviewsId} = await params;
    if(parseInt(reviewsId)>100){
        notFound();
    }
    return <h1>review {reviewsId} for product {productsId}</h1>
  }