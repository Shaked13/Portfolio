const addButton = document.getElementById('addItem');
const itemName = document.getElementById('itemName');
const itemList = document.getElementById('itemList');

loadItems();

function addItem() {
    const item = itemName.value.trim();

    if (item) {
        createElement(item);
        itemName.value = '';
        saveItems();
    } else {
        alert('בבקשה הכנס פריט');
    }
}

addButton.addEventListener('click', addItem);

function createElement(item) {
    const listItem = document.createElement('li');
    listItem.textContent = item;

    const deleteItem = document.createElement('button');
    deleteItem.textContent = 'Delete';
    deleteItem.className = 'deleteItem';

    listItem.appendChild(deleteItem);
    itemList.appendChild(listItem);

    deleteItem.addEventListener('click', function () {
        itemList.removeChild(listItem);
        saveItems();

    })
}

function saveItems() {
    let items = [];
    itemList.querySelectorAll('li').forEach(function (item) {
        items.push(item.textContent.replace('Delete', '').trim());
    });

    localStorage.setItem('items', JSON.stringify(items));
}


function loadItems() {
    const items = JSON.parse(localStorage.getItem('items')) || [];

    items.forEach(createElement);
}





// let arrList = [];

// const item_list = document.getElementById("item_list");

// function addItem(event) {
//     event.preventDefault();
//     const item_name = document.getElementById('item_name').value;
//     const row = document.createElement('li');

//     const td1 = document.createElement('td');
//     td1.innerText = `${item_name}`;
//     td1.onclick = () => removeItem();
//     row.id = 1
//     row.innerHTML = `
//         <td>${item_name}</td>
//         <td><button onclick="editItem()" class="btn_edit">עריכה</button></td>
//         <td><button onclick="removeItem(${item_name})" class="btn_remove">מחיקה</button></td>
//         `;
//     row.appendChild(td1);

//     arrList.push(row);
//     console.log(arrList);
//     item_list.appendChild(row);
//     let li = document.createElement("li");
//     let deleteLi = document.createElement("span")
//     deleteLi.innerText = "מחיקה";


//     let editLi = document.createElement("span")
//     editLi.innerText = "עריכה";
//     // if{
//     //     editLi == name_Item
//     // }

// }

// function removeItem(name) {
//     console.log("sdf");
//     console.log(item_list);
//     arrList = arrList.filter(item => {
//         return item.item_name !== name
//     })

// }

// // name_Item();

// // const shoppingList = document.getElementById("shoppingList");
// // const itemList = document.getElementById("itemList");


// // }

// shoppingList.addEventListener("submit", addItem);
// // itemList.addEventListener("click", removeItem);


// // function deleteItem(itemId) {
// //     const item = document.getElementById(itemId);
// //     item.parentNode.removeChild(item);
// // };

// // function editItem(itemId) {
// //     const item = document.getElementById(itemId);
// //     const item_name = prompt('Edit item:', item.cells[0].innerText);
// //     if (item_name) {
// //         item.cells[0].innerText = item_name;
// //     }
// // };










// // document.getElementById(shoppingList).addEventListener('submit', function ()) {
// //     const item_name = document.getElementById("item_name").value;
// // };

// // let arrList = [];

// // function addItem() {
// //     const item_name = document.getElementById('item_name').value;
// //     arrList.appendChild(formList(item_name));
// // };

// // function formList(item_name) {
// //     const item_list = document.getElementById('item_list');
// //     item_list.innerHTML = "";

// //     const row = document.createElement('tr');
// //     row.innerHTML = `
// //         <td>${item_name}</td>
// //         <td>
// //             <button class="delete" onclick="deleteItem(${item_name})">delete</button>
// //             <button class="edit" onclick="editItem(${item_name})">edit</button>
// //         </td>
// //     `;
// //     item_list.appendChild(row);
// // };
