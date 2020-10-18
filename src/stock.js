import { Module } from "framz"
import Product from './models/product'

class MyStockModule extends Module {
    name = "stock"
    models = [Product]
}

export const StockModule = MyStockModule
