const menuValues = [
{
    id: 1,
    title: 'Buttermilk Pancakes',
    category: 'breakfast',
    price: '$15.99',
    img: 'images/item-1.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  
},
{
    id: 2,
    title: 'Diner Double',
    category: 'lunch',
    price: '$13.99',
    img: 'images/item-2.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    id: 3,
    title: 'Godzilla Milkshake',
    category: 'shakes',
    price: '$6.99',
    img: 'images/item-3.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    id: 4,
    title: 'Country Delight',
    category: 'breakfast',
    price: '$20.99',
    img: 'images/item-4.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    id: 5,
    title: 'Egg Attack',
    category: 'lunch',
    price: '$22.99',
    img: 'images/item-5.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    id: 6,
    title: 'Oreo Dream',
    category: 'shakes',
    price: '$18.99',
    img: 'images/item-6.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    id: 7,
    title: 'Bacon Overflow',
    category: 'breakfast',
    price: '$8.99',
    img: 'images/item-7.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    id: 8,
    title: 'America Classic',
    category: 'lunch',
    price: '$12.99',
    img: 'images/item-8.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    id: 9,
    title: 'Quarantine Buddy',
    category: 'shakes',
    price: '$16.99',
    img: 'images/item-9.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    id: 10,
    title: 'Steak Dinner',
    category: 'dinner',
    price: '$39.99',
    img: 'images/item-10.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}
]

const menu = document.querySelector('.menu')
const btns = document.querySelectorAll('.btn-content button')

let activeCategory

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<div class="menu-item">
        <img src=${item.img} alt="${item.title}" class="photo">
        <span class="item-info">
            <header class="menu-header">
                <h4 class="item-name">${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </span>
    </div>`
    });

    displayMenu = displayMenu.join('')
    
    menu.innerHTML = displayMenu
}


btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        category = btn.getAttribute('data-id')

        btns.forEach((btn) => {
            btn.classList.remove('active')
        })

        btn.classList.add('active')

        const menuCategory = menuValues.filter((menuItem) => {
            if(menuItem.category === category) {
                return menuItem
            }
        })

        if(category === 'all') {
            displayMenuItems(menuValues)
        } else {
            displayMenuItems(menuCategory)
        }
    })
})

window.addEventListener('DOMContentLoaded', () => {
displayMenuItems(menuValues)
})
