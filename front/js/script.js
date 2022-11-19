console.log("I am a loaded script!")

//TODO get the data (array) from the backend API (items in the index)
fetch('http://127.0.0.1:3000/api/products')
    .then(data => {
        return data.json();
    })
    .then(items => {
        insertItems(items);
    });

//TODO get the existing element on the page where i can insert cards
const itemsHolder = document.getElementById('items');
console.log(itemsHolder);

function insertItems(items) {
    console.log(items);

    //TODO iterate over the data that came up from the backend API (array of articles from index)
    for (let i = 0; i < items.length; i++) {
        //AND get the current element in the array (an article from the index)
        const item = items[i];
        console.log(item);
        //AND create new card DOM element which will be inserted into the home page
        const itemElement = document.createElement('item');
        itemElement.setAttribute('id', items.id);
        itemElement.classList.add('item');
        // AND insert current element's into new card DOM element
        itemElement.innerHTML = `
        <h3>${items.name}</h3>
        <a href="./product.html?identifier=${items.id}">click me</a>
        <p>${items.text}</p>
    `;
        //AND append (child) this new card DOM element to existing element on page (section tag)
        itemsHolder.appendChild(itemElement);
    }
}
