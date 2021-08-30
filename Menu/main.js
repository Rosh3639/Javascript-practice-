//  Items
let menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "shakes buddy",
        category: "diner",
        price: 50.99,
        img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/setup/images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

let sectionCenter = document.querySelector(".section-center");
let container = document.querySelector(".btn-container");



// Load items
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayMenuButtons();
});


let displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
        // console.log(item);

        return ` <article class="menu-item">
    <img src="${item.img}"
        class="photo" alt="${item.title}" />
    <div class="item-info">
        <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
    </div>
</article> `;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
};

let displayMenuButtons = () => {
    let categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values
    }, ['all'])
    let categoryBtns = categories.map((category) => {
        return `<button class="filter-btn" type="button" data-id="${category}">
        ${category}
    </button>`
    }).join("");
    // console.log(categoryBtns);
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    // Filter Items
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let category = e.currentTarget.dataset.id;
            let menuCategory = menu.filter((menuItem) => {
                if (menuItem.category === category) {
                    return menuItem;
                }
            })
            // console.log(menuCategory);
            if (category === 'all') {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory);
            }
        })
    })

}