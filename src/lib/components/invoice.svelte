<script>
  import { Big_Numbers } from "../functions/random-number";
  import { sold_items } from "../../store/sold_items";

  let sold_items_here = [];
  export let customer;
  export let total;
  export let taxed

sold_items.subscribe((values) => {   
  sold_items_here = [...values];
});

   let today = new Date().toLocaleDateString()





</script>

<div class="bg-white w-[400px] text-[#2f2f2f] border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
    <h1 class="font-bold text-2xl my-4 text-center text-[#2f2f2f]">Storefront POS</h1>
    <hr class="mb-1">
    <div class="flex justify-between mb-6">
        <h1 class="text-lg font-bold">Invoice</h1>
        <div class="text-gray-700">
            <div>{today}</div>
            <div>Invoice #: {Big_Numbers()}</div>
        </div>
    </div>
    <div class="mb-3 flex flex-row justify-between">
        <h2 class="text-lg font-bold mb-4">Billed to</h2>
        <div class="text-gray-700 mb-2">{customer ? customer : "Customer"}</div>
    </div>
    <table class="w-full mb-8">
        <thead>
            <tr>
                <th class="text-left font-bold text-[#2f2f2f]">Description</th>
                <th class="text-right font-bold text-[#2f2f2f]">Amount</th>
            </tr>
        </thead>
        <tbody>
            {#each sold_items_here as sold }

            <tr>
                <td class="text-left text-[#2f2f2f]">{sold.item_name} x {sold.item_count}</td>
                <td class="text-right text-[#2f2f2f]">PKR {sold.item_price}</td>
            </tr>
                
            {/each}
            
        </tbody>
        <tfoot>
            <tr>
                <td class="text-left font-bold text-[#2f2f2f]">Total</td>
                <td class="text-right font-bold text-[#2f2f2f]">PKR {total}</td>
            </tr>
            <tr>
                <td class="text-left font-bold text-[#2f2f2f]">Tax</td>
                <td class="text-right font-bold text-[#2f2f2f]">{total < 3000 ? "0%" : "7%"}</td>
            </tr>
            <tr>
                <td class="text-left font-bold text-[#2f2f2f]">Grand Total</td>
                <td class="text-right font-bold text-[#2f2f2f]">PKR {total > 3000 ? taxed : total}</td>
            </tr>
        </tfoot>
    </table>
    <div class="text-[#2f2f2f] mb-2 text-xs">Thank you for your business!</div>
    <div class="text-[#2f2f2f] mt-[40px] text-xs">**7% GST aplicable on all purchases above PKR 3000</div>
</div>