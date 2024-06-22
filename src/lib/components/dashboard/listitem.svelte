<script>
  export let category_name;
  export let active;
  export let pathname;
  import { link } from "svelte-spa-router";
</script>

<div
  class="w-[250px] {active
    ? 'bg-[#2d2d2d]'
    : ''} h-[70px] rounded-md flex flex-row"
>
  <a href={pathname} class="text-lg m-[20px] flex flex-row gap-3" use:link>
   <slot name="icon" />
    {category_name}</a
  >
</div>
