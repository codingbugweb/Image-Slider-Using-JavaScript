const container = document.querySelector("#container"), 
       slide = document.querySelector("#slide"); 
  
 const prev = document.querySelector("#prev"), 
       next = document.querySelector("#next"); 
   
 let currImg = 0; 
 let size = container.clientWidth; 
  
 window.addEventListener("resize", ()=>{ 
     size = container.clientWidth; 
     slide.style.transform = "translateX("+(-currImg*size)+"px)"; 
 }) 
  
 window.addEventListener("load", ()=>{ 
     size = container.clientWidth; 
     prev.style.opacity = 0; 
     next.style.opacity = 0; 
 }) 
    
 next.addEventListener("click",function(){ 
    slide.style.transition = "transform .8s ease-in-out"; 
    if(currImg == 4){ 
        slide.style.transition = "none"; 
        currImg = 0; 
        slide.style.transform = "translateX("+(-currImg*size)+"px)"; 
        setTimeout(()=>{ 
                currImg++; 
                slide.style.transition = "transform .8s ease-in-out"; 
                slide.style.transform = "translateX("+(-currImg*size)+"px)"; 
        }) 
    } 
    else{ 
        slide.style.transition = "transform .8s ease-in-out"; 
        currImg++; 
        slide.style.transform = "translateX("+(-currImg*size)+"px)"; 
    } 
 }) 
  
 prev.addEventListener("click",function(){ 
    if(currImg == 0){ 
        slide.style.transition = "none"; 
        currImg = 4; 
        slide.style.transform = "translateX("+(-currImg*size)+"px)"; 
        setTimeout(()=>{ 
                currImg--; 
                slide.style.transition = "transform .8s ease-in-out"; 
                slide.style.transform = "translateX("+(-currImg*size)+"px)"; 
        })

    } 

    else{ 
        currImg--;
        slide.style.transition = "transform .8s ease-in-out"; 
        slide.style.transform = "translateX("+(-currImg*size)+"px)"; 
    } 
  
})