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
//sticky header
window.addEventListener('scroll', function() {
    const header = getId('header');
    const nav=getId('nav');
    if (window.scrollY > 0) {
      header.classList.add('backdrop-blur-md', 'bg-white/30');
      nav.classList.add('bg-[#F9F7F3]/20')
    } else {
      header.classList.remove('backdrop-blur-md', 'bg-white/30');
      nav.classList.remove('bg-[#F9F7F3]/20')
    }
  });

//toggle page
document.addEventListener("DOMContentLoaded",function(){
    const button = getId('toggleButton');
    const currentPage=window.location.pathname;
    if(currentPage.includes('index.html') || currentPage === '/' || currentPage === '/flood_donation_js-project5/'){
        button.textContent="Blog";
        button.onclick=function(){
            window.location.href='blog.html'
        }
    }else if(currentPage.includes('blog.html') || currentPage === '/' || currentPage === '/flood_donation_js-project5/'){
        button.textContent="Home";
        button.onclick=function(){
            window.location.href='index.html'
        }
    }
    console.log('toggle')
})

//history section function
function history(inputNumber,title){
    let historySection=getId('history-section');
    let historyEntries = historySection.children;
    if (historyEntries.length >= 6) {
        historySection.removeChild(historyEntries[0]);
    }
    let historyCard=document.createElement('div');
    historyCard.className='history-card'
    historyCard.innerHTML=`
    <div class="card my-3 border px-5 py-8">
             
        <div class="card-content">
           <h2 class="font-bold text-xl mb-2">${inputNumber} taka donated for ${title}</h2>
           <p>Date: ${new Date().toString()}</p>
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

//toggle between donation and history btn 
const donationBtn=getId('donation-btn');
const historyBtn= getId('history-btn');
historyBtn.addEventListener('click',function(){
getId('history-section').classList.remove('hidden');
getId('donation-section').classList.add('hidden');
//styling
historyBtn.classList.add("bg-[#B4F461]");
historyBtn.classList.remove('opacity-[70%]', 'border-[1px]', 'border-slate-300');
donationBtn.classList.remove("bg-[#B4F461]");
donationBtn.classList.add('opacity-[70%]', 'border-[1px]', 'border-slate-300');
})

//donationBtn
donationBtn.addEventListener('click',function(){
    getId('donation-section').classList.remove('hidden');
    getId('history-section').classList.add('hidden');

//styling
donationBtn.classList.add("bg-[#B4F461]");
donationBtn.classList.remove('opacity-[70%]', 'border-[1px]', 'border-slate-300');
historyBtn.classList.remove("bg-[#B4F461]");
historyBtn.classList.add('opacity-[70%]', 'border-[1px]', 'border-slate-300');
})




