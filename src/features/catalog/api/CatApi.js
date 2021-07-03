import { axiosInstance } from "../../../services/axios";

export function getListProduct() {
    return axiosInstance.get('/products');
}

export function getProduct(id) {
    return axiosInstance.get(`/products/${id}`);
}

export function createProduct({ title = 'Title', body = 'Body' }) {
    return axiosInstance.post(`/products`, {
        title,
        body,
    });
}

export function updateProduct(id, { title = 'Title', body = 'Body' }) {
    return axiosInstance.put(`/products/${id}`, {
        title,
        body,
    });
}

export function removeProduct(id) {
    return axiosInstance.delete(`/products/${id}`);
}