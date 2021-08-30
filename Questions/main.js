//using selectors inside the element

let questions = document.querySelectorAll(".question");
questions.forEach((question) => {
    // console.log(question);
    let btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click", () =>
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text")
            }
            question.classList.toggle("show-text")
        })
    )
})







// traversing the dom

// let btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) =>
//     btn.addEventListener("click", (e) => {
//         let question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     }));