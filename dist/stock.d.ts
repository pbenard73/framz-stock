export const StockModule: typeof MyStockModule;
declare class MyStockModule {
    name: string;
    models: (typeof Product)[];
}
import Product from "./models/product";
export {};
