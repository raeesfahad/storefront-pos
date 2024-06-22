import { readable } from 'svelte/store'

export const loc_pathname = readable(window.location.pathname)