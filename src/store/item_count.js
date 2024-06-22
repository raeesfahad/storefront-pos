import { writable } from "svelte/store";

export let item_count = writable(0);
export let item_price_t = writable(0)




export function incrementItemPrice() {
  item_count.update(n => n + 1);
}


export function decrementItemPrice() {
  item_count.update(n => n - 1);
}


export function resetItemPrice() {
  item_count.set(0);
}

export function incrementItemCount(item_name) {
  item_count.update((counts) => {
    // @ts-ignore
    const count = counts.get(item_name) || 0;
    // @ts-ignore
    counts.set(item_name, count + 1);
    return counts;
  });
}