let inputbar = document.querySelector("input")
let selecttag = document.querySelector("select")
let btn = document.querySelector("button")
let cont = document.querySelector(".container")
let colorinput = document.querySelector(".color")


btn.addEventListener("click",function(){  


    let inputvalue = inputbar.value;
    inputbar.value= ""
    let selectvalue = selecttag.value;
    let color = colorinput.value;
    cont.innerHTML=""
    for(let i=1;i<=inputvalue;i++){
        let ele = document.createElement("div")
        ele.classList.add(selectvalue);
        ele.style.backgroundColor= color
        ele.setAttribute("contenteditable","true")
        cont.appendChild(ele)
        ele.addEventListener("dblclick",function(){
            cont.removeChild(ele)
          

        })

    }
    
})