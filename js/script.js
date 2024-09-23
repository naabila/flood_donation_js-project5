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

