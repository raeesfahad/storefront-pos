<script>
  import { onMount } from "svelte";
  import supabase from "../../functions/supbase";

  export let category_name;
  export let item_count;
  export let active;
  let data_count = 0;

  onMount(async () => {
    try {
      const { data, error } = await supabase
        .schema("public")
        .from("products")
        .select()
        .eq("product_categogry ", item_count);

      if (error) {
        console.log(error.message);
      }

      data_count = data.length;
    } catch (err) {
      console.log(err.message);
    }
  });
</script>

<div
  class="size-[175px] {active
    ? 'bg-[#ffffff] text-[#111315]'
    : 'bg-[#2d2d2d] text-[#ffffff]'} rounded-md flex flex-col justify-between"
>
  <span class="m-[5px]"></span>

  <div class="m-[15px] text-xl font-bold">
    <h3>{category_name}</h3>
    <span class="text-sm">{data_count} items</span>
  </div>
</div>
