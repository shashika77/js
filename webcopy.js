document.onkeyup = KeyCheck;

function noStock(l,d){
  if(l==2){
    if(d==1){navigator.clipboard.writeText(`Sorry ma'am its out of stock.\n\nYou can refer to our available long dress collection through this link.\n\nCHRISHEL - https://dresshub.lk/dresses/ALL/CHRISHEL`)}
    if(d==2){navigator.clipboard.writeText(`Sorry ma'am its out of stock.\n\nYou can refer to our available short dress collection through this link.\n\nOZERO  - https://dresshub.lk/dresses/ALL/OZERO\n\nCG - https://dresshub.lk/dresses/ALL/CG`)}
    if(d==3){navigator.clipboard.writeText(`Sorry ma'am its out of stock.\n\nYou can refer to our available party dress collection through this link.\n\nHARMANKAYA - https://dresshub.lk/dresses/ALL/HARMANKAYA`)}
  }
  if(l==1){
    if(d==1){navigator.clipboard.writeText(`Sorry ma'am me dress eka out of stock.\n\nApe available long dress collection eka balanna puluwan miss me link eka haraha.\n\nCHRISHEL - https://dresshub.lk/dresses/ALL/CHRISHEL`)}
    if(d==2){navigator.clipboard.writeText(`Sorry ma'am me dress eka out of stock.\n\nApe available short dress collection eka balanna puluwan miss me link eka haraha.\n\nOZERO  - https://dresshub.lk/dresses/ALL/OZERO\n\nCG - https://dresshub.lk/dresses/ALL/CG`)}
    if(d==3){navigator.clipboard.writeText(`Sorry ma'am me dress eka out of stock.\n\nApe available party dress collection eka balanna puluwan miss me link eka haraha.\n\nHARMANKAYA - https://dresshub.lk/dresses/ALL/HARMANKAYA`)}
  }
}

function KeyCheck(e)
{
   var KeyID = (window.event) ? event.keyCode : e.keyCode;
   if(KeyID == 113)
   {
     // alert("Copy");
           const Tlist = document.getElementsByClassName("price-tag-c fs-4 fw-light")[0].textContent ;
         
          const dressName = document.getElementsByClassName("proname m-0")[0].textContent ;
     
     
     
     
const pList = Tlist.split('LKR');

const TotalPrice = pList[1];

console.log(pList);

const ProductLink = window.location.href;

var Discount = ''

if(pList.length > 2){
       Discount = document.getElementsByClassName("discount-tag")[0].innerText +` for order through website`;
     }

const msgText = `Price - LKR ${TotalPrice} or LKR ${(parseFloat(TotalPrice.replace(",", ""))/3).toFixed(2)} x 3 interest free installments with mintpay\n\nProduct Link - ${ProductLink}\n\n${Discount}`;

 navigator.clipboard.writeText(msgText);
 
const stockCheck = document.getElementsByClassName("item-tag c-4 s-3  my-5")[0].textContent;
if(stockCheck=='OUT OF STOCK'){
  
document.getElementsByClassName("item-tag c-4 s-3  my-5")[0].innerHTML = `
<button type="button" onclick="noStock(1,1)">Long dress (s)</button>
<button type="button" onclick="noStock(1,2)">Short dress (s)</button>
<button type="button" onclick="noStock(1,3)">Party dress (s)</button> <br> 
<button type="button" onclick="noStock(2,1)">Long dress (e)</button>
<button type="button" onclick="noStock(2,2)">Short dress (e)</button>
<button type="button" onclick="noStock(2,3)">Party dress (e)</button>
`
}
    
     
     

   }
}
