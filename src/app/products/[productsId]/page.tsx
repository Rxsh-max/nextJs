export default async function productsDetails({
     params,
     }:
     { params : Promise<{productsId:string}>;
    }){
    
    const productsId = (await params).productsId;
    return <>
    <h1>details about product {productsId} </h1>
    </>
}
