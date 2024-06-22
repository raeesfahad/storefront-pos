<script>
  import InventoryTopBar from "../lib/components/inventory/Inventory-top-bar.svelte";
  import InvTable from "../lib/components/inventory/inv-table.svelte";

  import { getProducts, products } from "../store/products";
  import { onMount } from "svelte";
  import Loading from "../lib/components/loading.svelte";
  import { isProduct, modal_state } from "../store/inventory-controls";
  import InvModal from "../lib/components/inventory/inv-modal.svelte";
  import AddProductForm from "../lib/components/inventory/add-product-form.svelte";
  import { getUnpaginatedCategories } from "../store/categories";
  import AddCategoryForm from "../lib/components/inventory/add-category-form.svelte";


  let products_here = [];
  let modalOpen;


  modal_state.subscribe( (store) =>{

       modalOpen = store;
  })

  products.subscribe((values) => {
    products_here = values;
  });

  let currentPage = 1;
  let pageSize = 6;
  let totalPages = Math.ceil(products_here.length / pageSize);

  let tableData = [];

  export function nextPage() {
    currentPage!== totalPages? (currentPage = currentPage + 1) : null;
    updateTable();
  }

  export function previousPage() {
    currentPage!== 1? (currentPage = currentPage - 1) : null;
    updateTable();
  }

  function updateTable() {
    tableData = paginateProducts();
  }

  function paginateProducts() {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return products_here.slice(startIndex, endIndex);
  }

  onMount(async () => {
    await getProducts().catch((error) =>
      console.error("Error fetching products:", error)
    );
    await getUnpaginatedCategories();
    updateTable();
    
  });
</script>

{#if modalOpen}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<InvModal>

  <div slot="form">

  {#if $isProduct}
  
  <AddProductForm />

  {:else}

   <AddCategoryForm />
  {/if}

</div>

</InvModal>

{/if}

{#await getProducts()}

   <Loading />


  {:then products}
    <div class="flex flex-col">
      <div class="flex flex-row justify-between mt-[60px] w-full">
        <h1 class="text-2xl font-bold mt-[10px]">Inventory</h1>

        <InventoryTopBar />
      </div>

      <InvTable data={tableData} />

      <div class="flex flex-row justify-end mx-[60px] space-x-2 mt-[20px]">

        {#if currentPage !== 1}

        <button class="bg-[#ffffff] rounded-full text-[#2f2f2f] text-xs p-[5px]" on:click={previousPage}>Prev Page</button>
            
        {/if}
        <span class="text-xl">{currentPage}/{pageSize} of {totalPages}</span>

        {#if currentPage !== totalPages}
        <button class="bg-[#ffffff] rounded-full text-[#2f2f2f] text-xs p-[5px]" on:click={nextPage}>Next Page</button>  
        {/if}
       
      </div>

    </div>
  {:catch error}
    <div class="text-red-500">Error fetching products: {error.message}</div>
    <Loading />
{/await}
