<script>
  import { sold_items  } from "../../store/sold_items";
  import Invoice from "./invoice.svelte";
  import html2canvas from 'html2canvas';
  import jsPDF from 'jspdf';

  export let total_price;
  export let payable;
  export let customer_name;

  let sold_here = []

  sold_items.subscribe( (values)=>{

     sold_here = [...values]

  })
  

function completePurchase() {

    let div = document.getElementById('printable');
    const imgWidth = 57; 
    const imgHeight = 85; 

    html2canvas(div)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.autoPrint();
            pdf.output('dataurlnewwindow');
        });
}

    


</script>

<div class="flex flex-row gap-2">
 
  <div class="flex flex-row size-[600px] justify-center">
    <div class="flex flex-row">

      <div id='printable'>
        <Invoice customer={customer_name ? customer_name : "customer"} total={total_price} taxed={payable} />
      </div>
      

      <div class="mt-[15px] flex justify-center h-[60px]">
        <button on:click={completePurchase}
          class="bg-[#111315] mx-[30px] rounded-full p-[10px] w-[180px] text-md hover:bg-[#ffffff] hover:text-[#111315] border border-[#ffffff]"
        >
          Complete Purchase</button
        >
      </div>
    </div>
  </div>
</div>
