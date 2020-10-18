import { Model } from "framz"

class Product extends Model {
    name = "product"
    url="products"
    fields = {
        label: {
            type: "text",
            uniq: true,
            length: 250,
        },
    }
}

export default Product
