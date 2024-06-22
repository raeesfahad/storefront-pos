// @ts-nocheck
import { loading_state, error_state, error_message } from "./loading-eroor";
import { writable } from "svelte/store";
import supabase from "../lib/functions/supbase";

const categoriesPerPage = 4;
export const categories_global = writable([]);
export const categories_unpaginated = writable([]);
let currentPage = 0;

export async function getCategories() {
  loading_state.set(true);
  try {
    const { data, error } = await supabase
      .from("product_categories")
      .select(
        `
          *,
          products (
            *
          )
        `
      )
      .range(currentPage, currentPage + categoriesPerPage - 1);
    if (error) {
      error_state.set(true);
      error_message.set(error.message);
    } else {
      categories_global.set(data);
    }
  } finally {
    loading_state.set(false);
  }
}

export async function nextPage() {
  currentPage += categoriesPerPage;
  loading_state.set(true);
  try {
    const { data, error } = await supabase
      .from("product_categories")
      .select(
        `
        *,
        products (
          *
        )
      `
      )
      .range(currentPage, currentPage + categoriesPerPage - 1);
    if (error) {
      error_state.set(true);
      error_message.set(error.message);
    } else if (data.length !== 0) {
      categories_global.set(data);
    }
  } finally {
    loading_state.set(false);
  }
}

export async function prevPage() {
  if (currentPage > 0) {
    currentPage -= categoriesPerPage;
    loading_state.set(true);
    try {
      const { data, error } = await supabase
        .from("product_categories")
        .select(
          `
          *,
          products (
            *
          )
        `
        )
        .range(currentPage, currentPage + categoriesPerPage - 1);
      if (error) {
        errorLoading.set(true);
        error_message.set(error.message);
      } else if (data.length !== 0) {
        categories_global.set(data);
      }
    } finally {
      loading_state.set(false);
    }
  }
}

export async function getUnpaginatedCategories() {
  const { error, data } = await supabase.from("product_categories").select();

  if (!error) {
    console.log(error);
  }
  if (!error) {
    categories_unpaginated.set(data);
  }
}
