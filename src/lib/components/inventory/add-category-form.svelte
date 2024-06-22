
<form on:submit={(event)=>{ event.preventDefault()}} class="flex flex-col gap-1 justify-center mx-[80px] mt-[20px] mb-[20px]">
     
    <label class="mb-1" for="product_category">Product Category</label>
    <input class="w-[400px] rounded-md h-[50px] bg-[#2f2f2f] p-1" type="text" name="product_category" id="" required>

     <button class="bg-[#ffffff] w-[180px] p-2 h-[50px] rounded-full mt-[20px] mx-[90px] text-[#2f2f2f]" type="submit">Add Category</button>

  </form>