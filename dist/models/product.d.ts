export default Product;
declare class Product {
    name: string;
    url: string;
    fields: {
        label: {
            type: string;
            uniq: boolean;
            length: number;
        };
    };
}
