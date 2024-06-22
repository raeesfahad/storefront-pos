<script>

    export let item_name
    export let sold_number




</script>

<div class=" ml-[10px] w-[370px] h-[70px]  rounded-md flex flex-row">
    <div class="size-[40px] rounded-lg bg-[#ffffff] m-[12px] text-[#2f2f2f] flex flex-col justify-center items-center">
        <slot name="item-icon" />
    </div>
    
    <div class="flex flex-col m-[12px]">
        <span class=" text-xl font-semibold">{item_name}</span>
        <span class="text-xs">{sold_number.toLocaleString()} items</span>


    </div>
</div>