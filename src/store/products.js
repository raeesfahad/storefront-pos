import { writable } from "svelte/store";
import supabase from "../lib/functions/supbase";

export const products = writable([]);
export const productsError = writable(null);
export const currentPage = writable(1);
export const totalPages = writable(0);

let page_no

currentPage.subscribe( (value) => {
    page_no = value
})


export async function getProducts(page = page_no) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('id, product_name, product_price, product_units , product_categories(category_name)')
      .range((page - 1) * 10, page * 10 - 1);
    if (error) {
      throw error;
    }
    products.set(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    productsError.set(error.message);
  }
}

export function nextPage() {
    currentPage.update(currentPage => page_no + 1);
    getProducts(currentPage);
  }
  
  export function previousPage() {
    currentPage.update(currentPage => page_no - 1);
    getProducts(currentPage);
  }