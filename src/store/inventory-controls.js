import { writable } from "svelte/store"

export const modal_state = writable(false);
export const isCategory = writable(false);
export const isProduct = writable(false)