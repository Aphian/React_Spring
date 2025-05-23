import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom"

const ProductsIndex = lazy(() => import("../pages/products/indexPage"))
const Loading = () => <div>Products Loading....</div>

const ProductsList = lazy(() => import("../pages/products/listPage"))

export default function productsRouter() {
    return (
        {
            path: "products",
            Component: ProductsIndex,
            children: [
                {
                    path: "list",
                    element: <Suspense fallback={<Loading></Loading>}><ProductsList></ProductsList></Suspense>
                },
                {
                    path: "",
                    element: <Navigate to={'/products/list'}></Navigate>
                }
            ] 
        }
    )
}
