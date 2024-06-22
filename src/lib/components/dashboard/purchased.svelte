
<script>
// @ts-nocheck


  import { sold_items, sold_item_price } from "../../../store/sold_items";

  export let item_name;
  export let item_quant
  export let item_price
  export let product_id ;


$ : total = Number(item_quant) * Number(item_price)


  function DeleteProduct(id){
  sold_items.update((currentValue) => currentValue.filter((item) => item.id !== id));
  sold_item_price.update(current => current  = 0)
 
}



</script>

<div class=" w-[250px] p-[10px] rounded-md bg-[#2d2d2d] flex flex-row justify-between">

    <div class="flex flex-col">
    <span class="text-lg font-bold">{item_name} <span>x {item_quant}</span></span>
    <span class="text-xs">{total}</span>
    </div>


    <button class="" on:click={ ()=> {DeleteProduct(product_id)}}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#131111] hover:text-[#ffffff]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
          </svg>
            
    </button>

</div>