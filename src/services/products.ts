import CustomAxios from "../helpers/CustomAxios";
const colors = [
    '#FF8B64', '#55C2E6', '#FF5E7D', '#F1C75B', '#7335D2'
];
function getProductsApi(limit: number = 10){
    return CustomAxios(`get`, `${import.meta.env.VITE_API_URL}/products?limit=${limit}`)
}
export {
    getProductsApi,
    colors
}