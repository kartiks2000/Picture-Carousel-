const arrowl = document.querySelector(".iconl");
const arrowr = document.querySelector(".iconr");

const pic = document.querySelector(".img");

var i=1

arrowl.addEventListener("click",function(){
    if(i==1){
        i=7;
    }
    else{
        i=i-1;
    }

    pic.src="/images/pic-" + i + ".jpg";
});

arrowr.addEventListener("click",function(){
    if(i==7){
        i=1;
    }
    else{
        i=i+1;
    }

    pic.src="/images/pic-" + i + ".jpg";
});