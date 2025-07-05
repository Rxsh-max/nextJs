"use client"
import { usePathname } from "next/navigation"

export default function NotFound(){
    const pathname = usePathname()
    const productsId = pathname.split("/")[2]
        const reviewsId = pathname.split("/")[4]

return<>
    <h1>review {reviewsId} Not found for product {productsId} </h1>
</>
} 