function write(element,i){

    const writer = element.innerHTML.split('')

    setTimeout(()=>{
            writer.forEach((letter, i) => {
                setTimeout(()=>{
                    element.innerHTML = element.innerHTML.slice(0,-1)
                }, 150*i)
            });


        setTimeout(()=>{
            writer.forEach((letter, i) => {
                setTimeout(()=>{
                    element.innerHTML += letter
                }, 150*i)
            });
        }, 1500)

    }, 3000*i)       
  
}


const greetings = document.getElementById("greetings");
const im =  document.getElementById("Im");

for(let i = 0; i < 3; i++){
    setTimeout(()=>{
        write(greetings,i);
    }, 3000*i)
}

