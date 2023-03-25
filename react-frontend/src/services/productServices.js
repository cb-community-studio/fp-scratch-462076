import axios from "axios";

class ProductService {
    static async getProducts() {
        const response = await axios.get("https://api.bigcommerce.com/stores/catalog/products/1/images");
        return response.data.map((product) => ({
            ...product,
            itemImageSrc: product.image_file,
            thumbnailImageSrc: product.is_thumbnail,
        }));
    }
}

export default ProductService;
