<script>
   
   import { sold_items } from "../../store/sold_items";
   let sold_items_here = []
   export let total;
   export let taxed;

   sold_items.subscribe( (values) =>{

       sold_items_here = [...values]

   })

   let sum = sold_items_here.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.item_count;
}, 0);




</script>

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-inherit">
        <thead class="text-xs text-white uppercase bg-[#131111]">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Price incl.TAX
                </th>

            </tr>
        </thead>
        <tbody>
            {#each sold_items_here as sold }
            <tr class="bg-inherit">
                <th scope="row" class="px-6 py-4 font-medium text-inherit whitespace-nowrap">
                    {sold.item_name}
                </th>
                <td class="px-6 py-4">
                    {sold.item_count}
                </td>
                <td class="px-6 py-4">
                    PKR {sold.item_price}
                </td>
            </tr>
                
            {/each}
          
        </tbody>
        <tfoot>
            <tr class="font-semibold text-inherit">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">{sum}</td>
                <td class="px-6 py-3">PKR {total}</td>
                <td class="px-6 py-3">PKR {total > 3000 ? taxed : total}</td>
            </tr>
        </tfoot>
    </table>
</div>

<div class="flex m-[20px]">
<span class="text-xs"> *7% tax aplicable on each purchase above PKR 3000</span>

</div>
