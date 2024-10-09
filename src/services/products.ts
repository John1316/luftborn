import CustomAxios from "../helpers/CustomAxios";

function getProductsApi(limit: number = 10){
    return CustomAxios(`get`, `${import.meta.env.VITE_API_URL}/products?limit=${limit}`)
}
export {
    getProductsApi
}