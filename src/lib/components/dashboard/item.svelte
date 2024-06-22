<script>
  import { writable } from 'svelte/store';
  import Random_Number from "../../functions/random-number";
  import { sold_items } from "../../../store/sold_items";
  import { onDestroy } from 'svelte';

  export let active = false;
  export let item_name;
  export let item_price;

  let itemCount = 0;

  $: {
    const item = $sold_items.find(i => i.item_name === item_name);
    itemCount = item? item.item_count : 0;
  }

  function onIncrement() {
    AddItem();
  }


  function AddItem() {
  const item = { id: Random_Number(), item_name, item_count: itemCount + 1, item_price };
  sold_items.update(items => {
    const newItemList = [...items.filter(i => i.item_name!== item_name), item];
    return newItemList.sort((a, b) => {
      const aTotalPrice = a.item_count * a.item_price;
      const bTotalPrice = b.item_count * b.item_price;
      return bTotalPrice - aTotalPrice;
    });
  });
}

 onDestroy(()=>{

    //sold_items.set([])

 })

</script>

<button on:click={onIncrement}>
  <div
    class="w-[245px] h-[120px] {active
    ? 'bg-[#ffffff] text-[#111315]'
      : 'bg-[#2d2d2d] text-[#ffffff]'} rounded-md flex flex-col justify-end shadow-lg relative"
  >


    <div class="flex flex-row justify-between">
      <div class="ml-2 flex flex-col gap-1">
        <span class="font-bold text-xl">{item_name}</span>
        <div class="flex justify-start"><p class="text-sm">PKR {item_price}</p></div>
    
      </div>

      <div class="mx-[18px]">
        <span class="text-4xl font-bold">{itemCount === 0? "": itemCount}</span>
      </div>
    </div>
  </div>
</button>