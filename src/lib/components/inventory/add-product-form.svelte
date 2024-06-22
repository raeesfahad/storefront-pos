<script>
  import { categories_unpaginated } from "../../../store/categories";



</script>

  <form on:submit={(event)=>{ event.preventDefault()}} class="flex flex-col gap-1 justify-center mx-[90px] mt-[20px] mb-[20px]">
     
    <label class="mb-1" for="product_name">Product Name</label>
    <input class="w-[400px] rounded-md h-[50px] bg-[#2f2f2f] p-1" type="text" name="product_name" id="" required>

    <label class="mb-1" for="product_price">Product Price</label>
    <input class="w-[400px] rounded-md h-[50px] bg-[#2f2f2f] p-1" type="text" name="product_price" id="" required>

    <label class="mb-1" for="product_category">Product Category</label>
    <select class="w-[400px] rounded-md h-[50px] bg-[#2f2f2f] p-1" name="cars" id="cars" required>

      {#each $categories_unpaginated as category (category.id)}

      <option class="p-2" value={category.id}>{category.category_name}</option>
      {/each}
     
    </select>

    <label class="mb-1" for="product_units">Units</label>
    <input class="w-[400px] rounded-md h-[50px] bg-[#2f2f2f] p-1" type="number" min="0" name="product_units" id="" required>

     <button class="bg-[#ffffff] w-[180px] p-2 h-[50px] rounded-full mt-[20px] mx-[90px] text-[#2f2f2f]" type="submit">Add Product</button>

  </form>