<script>
// @ts-nocheck

    import { categories_global } from "../../../store/categories";
    
    
    let searchQuery = '';
    let cate = []
    
    categories_global.subscribe((values) => {
      if (!searchQuery) {
        cate = [...values];
      } else {
        cate = values.filter((category) => {
          const categoryNameMatches = category.category_name.toLowerCase().includes(searchQuery.toLowerCase());
          const productMatches = category.products.some((product) => product.product_name.toLowerCase().includes(searchQuery.toLowerCase()));
    
          return categoryNameMatches || productMatches;
        });
      }
    });
    
    </script>
    
    <nav class="mx-[20px] flex flex-row justify-between h-[60px] w-full">
      <div class="p-[10px] m-[5px] h-[45px] w-[300px] bg-[#2d2d2d] rounded-md text-gray-300 flex flex-row gap-2">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[20px] h-[20px] mt-[3px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <input
          class="bg-inherit focus:outline-none"
          type="text"
          placeholder="Search"
          bind:value={searchQuery}
          on:input={() => {
            if (searchQuery === '') {
              categories_global.update(() => [...categories_global]);
            } else {
              categories_global.update(() => cate);
            }
          }}
        >
      </div>
    </nav>