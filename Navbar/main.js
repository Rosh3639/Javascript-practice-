// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggle class



let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");


navToggle.addEventListener("click", () => {
    // console.log(links.classList);
    // console.log(links.classList.contains('links')); 

    // Another approach 

    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // }
    // else{
    //     links.classList.add("show-links");
    // }

    // One liner 

    links.classList.toggle("show-links");
});


