import { lazy, Suspense } from "react"

const ProductsIndex = lazy(() => import("../pages/products/indexPage"))
const Loading = () => <div>Products Loading....</div>

export default function productsRouter() {
    return (
        {
            path: "products",
            Component: ProductsIndex,
            children: [
            ] 
        }
    )
}
