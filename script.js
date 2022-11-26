
let theDivs = document.getElementsByClassName("dropDown");
let repos = document.getElementById('repos');


repos.addEventListener('click', (e) => {
    toggleView('repoList')
})

let test;

console.log(theDivs)

for(let i = 0; i < theDivs.length ; i++){
    let child = theDivs[i].children[0].children[0].nextElementSibling;
    test = child;
    console.log(child)
    theDivs[i].addEventListener('click', (e) => {
        toggleNoId(child)
    })
    console.log("Click")
}

// theDivs.forEach(element => {
//     let child = element.firstChild.id;
//     element.addEventListener('click', toggleView(child))
//     console.log("Click")
// });

function toggleNoId(e){
    
    if(e.style.display === "none"){
        e.style.display = "block";
    }
    else{
        e.style.display = "none";
        console.log("Poof")
    }
}

function toggleView(id){
    let e = document.getElementById(id);
    if(e.style.display === "none"){
        e.style.display = "block";
    }
    else{
        e.style.display = "none";
        console.log("Poof")
    }
}