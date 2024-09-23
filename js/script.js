//get inputid
function getInputValById(id){
    return parseFloat(document.getElementById(id).value)
}
//get id only
function getId(id){
    return document.getElementById(id)
}
//get innertext
function getInnerTextById(id){
    return document.getElementById(id).innerText;
}
//set innertext
function setInnerTextById(id, value) {
    document.getElementById(id).innerText = value;
}
//modal===========
const modal = getId('my_modal_5');
const closeModal = getId('closeModal');


//toggle page
window.onload=function(){
    const button=getId('toggleButton');
    const currentPage=window.location.pathname;
    
    if(currentPage.includes('index.html')){
        button.textContent="Blog";
        button.onclick=function(){
            window.location.href='blog.html'
        }
    }else if(currentPage.includes('blog.html')){
        button.textContent="Home";
        button.onclick=function(){
            window.location.href='index.html'
        }
    }
}
//history section function
function history(inputNumber,title){
    let historySection=getId('history-section');
    let historyEntries = historySection.children;
    if (historyEntries.length >= 4) {
        historySection.removeChild(historyEntries[0]);
    }
    let historyCard=document.createElement('div');
    historyCard.className='history-card'
    historyCard.innerHTML=`
    <div class="card my-3 border px-5 py-8">
             
        <div class="card-content">
           <h2 class="font-bold text-xl mb-2">${inputNumber} taka ${title}</h2>
           <p>Date: ${new Date().toDateString()}</p>
        </div>
        </div>
    `;
    
    
    historySection.appendChild(historyCard);

    
    console.log(historyCard)
}
//common function for donation
function donation(blance,donateAmount,donateInputAmnt,region){
    let balance=parseFloat(getInnerTextById(blance));
    let donationAmount=parseFloat(getInnerTextById(donateAmount));
    let title=getInnerTextById(region);
    let donationInput=getInputValById(donateInputAmnt);
    //validation
    if(isNaN(donationInput)){
        alert('Invalid donation Amount');
        getId(donateInputAmnt).value="";
        return
    
    }else if(donationInput<= 0){
        alert("donation amount can't be negetive or 0");
        getId(donateInputAmnt).value=""
        return
    }
    if(donationInput>balance){
        alert("Insufficient balance for this donation");
        getId(donateInputAmnt).value=""
        return
       
    }else{
        modal.showModal();
        closeModal.addEventListener('click', function() {
            modal.close();
        });
        getId(donateInputAmnt).value=""
    }
    //balance amount in card
    let newDonationAmount=donationAmount+donationInput;
    getId(donateAmount).innerText=`${newDonationAmount} BDT`;
    //update balance
    let newBalance=balance-donationInput;
    if(newBalance<=0){
        alert("Insufficient balance for this donation")
        return
    }else{
     getId(blance).innerText=`${newBalance} BDT`
    console.log(newBalance, typeof balance)
    }
    getId(blance).innerText=`${newBalance} BDT`
    

//History
  history(donationInput,title)
}
//Calling donation Function For noakhali
getId('donateForNoakhali').addEventListener('click',function(){
    donation('balance','donation-amount-noakhali','donationInputNoakhali','noakhali')
})

//Calling donation Function For for Feni
getId('donateForFeni').addEventListener('click',function(){
    donation('balance','donation-amount-feni','donationInputFeni','feni')
})
//Calling donation Function For for Quota Protest
getId('donateForQuota').addEventListener('click',function(){
    donation('balance','donation-amount-quota','donationInputQuota','quota')
})

//donation functionality Noakhali
/*
getId('donateForNoakhali').addEventListener('click',function(){
    let balance=parseFloat(getInnerTextById('balance'));
    let donationAmountNoakhali=parseFloat(getInnerTextById("donation-amount-noakhali"));
    let noakhali=getInnerTextById('noakhali')
    let donationInputNoakhali=getInputValById('donationInputNoakhali');
    //validation
    if(isNaN(donationInputNoakhali)){
        alert('Invalid donation Amount');
        getId('donationInputNoakhali').value="";
        return
    
    }else if(donationInputNoakhali<= 0){
        alert("donation amount can't be negetive or 0");
        getId('donationInputNoakhali').value=""
        return
    }
    if(donationInputNoakhali>balance){
        alert("Insufficient balance for this donation");
        getId('donationInputNoakhali').value=""
        return
       
    }else{
        modal.showModal();
        closeModal.addEventListener('click', function() {
            modal.close();
        });
        getId('donationInputNoakhali').value=""
    }
    //balance amount in card
    let newDonationAmountNoakhali=donationAmountNoakhali+donationInputNoakhali;
    getId('donation-amount-noakhali').innerText=`${newDonationAmountNoakhali} BDT`;
    //update balance
    let newBalance=balance-donationInputNoakhali;
    if(newBalance<=0){
        alert("Insufficient balance for this donation")
        return
    }else{
     getId('balance').innerText=`${newBalance} BDT`
    console.log(newBalance, typeof balance)
    }
    getId('balance').innerText=`${newBalance} BDT`
    

    //History
  history(donationInputNoakhali,noakhali)
    
    
})
*/