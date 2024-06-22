import { writable } from "svelte/store";

export const loading_state = writable(false);
export const error_state = writable(false);
export const error_message = writable('');