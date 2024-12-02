import { mobilesData } from "@/data/products";
import { ProductProps } from "@/types/product";
import { NextResponse } from "next/server";

const cart: ProductProps[] = []; 

export async function POST(request: Request) {
    try {
      const { id }: { id: string } = await request.json();
      const foundProduct = mobilesData.find((product) =>  product.id = id);
  
      if (!foundProduct) {
        return NextResponse.json({ error: "Product not found!" }, { status: 404 });
      }
  
      cart.push(foundProduct);``
  
      return NextResponse.json({ message: "Product added to cart!", product: foundProduct });
    } catch (error) {
      return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
    }
  }
  

export async function GET(request: Request) {
    try {
        return NextResponse.json({ cart });
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
    }
}
