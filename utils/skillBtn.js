let list = document.getElementById("list-skills");
let contentDescribe =  document.getElementById("content_skills_more");
let data;

function showList(){
    fetch("./skill.json").then((response) =>{
        response.json().then((data)=>{
            this.data = data;

              for(const skill in data){
                  let html = `<li class="list-skills__item" id="${skill}" >
                  <img src="${data[skill].icon}" alt="">
                  <p class="list-skills__text">
                      ${data[skill].title}
                  </p>
                  <button
                  class="list-skills__more bt_more" id="bt_more${skill}" value="${skill}">+</button>
              </li>`
                list.insertAdjacentHTML("beforebegin", html);

                document.getElementById(`${skill}`).addEventListener("click", (e)=>
                    describe(e)
                )
              }
          })
      })
  
      // const listSkills = JSON.parse("../skill.json");
  
      // console.log(listSkills)  
}

function describe({target}){
    let html = `<img src="${this.data[target.id].icon}" alt="">
    <h2 class="describe__title">${this.data[target.id].title}</h2>
    <h3 class="describe__sub-title">Experiência</h3>
    <p class="describe__text">${this.data[target.id].describe}.</p>`

    contentDescribe.innerHTML=html;
}

showList()
