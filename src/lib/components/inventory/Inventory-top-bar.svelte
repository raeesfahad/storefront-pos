<script>
  import { modal_state,isProduct,isCategory } from "../../../store/inventory-controls"


    

</script>



<div class="space-x-2 mt-[5px]">
     
    <button on:click={()=>{modal_state.set(true); isProduct.set(true); isCategory.set(false)}} class="rounded-full bg-[#ffffff] text-md h-[35px] text-[#2f2f2f] w-[120px] p-1">Add Item</button>
    <button on:click={()=>{modal_state.set(true); isCategory.set(true); isProduct.set(false);}} class="rounded-full bg-[#ffffff] text-md h-[35px] text-[#2f2f2f] w-[120px] p-1">Add Category</button>


</div>