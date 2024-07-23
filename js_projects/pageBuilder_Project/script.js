const backgroundContainer = document.querySelector('.background');

//add button
document.querySelector('#add_btn').addEventListener('click', () => {
    const box = boxStyle();
    backgroundContainer.appendChild(box);
});

//save button 
document.getElementById('save_btn').addEventListener('click', () => {
    const box = boxStyle();
    localStorage.setItem('boxBackground', JSON.stringify(backgroundContainer.innerHTML));
});

if (localStorage.getItem('boxBackground')) {
    const localStorageBox = JSON.parse(localStorage.getItem('boxBackground'));
    const box = document.createElement('div');
    box.innerHTML += localStorageBox;
    backgroundContainer.appendChild(box);
}


//function box style
const boxStyle = () => {
    const box = document.createElement('div');

    let sizew = document.querySelector('#sizew').value;
    let sizeh = document.querySelector('#sizeh').value;

    let textArea = document.querySelector('#textArea').value;
    let textColor = document.querySelector('#textColor').value;

    let fontSize = document.querySelector('#fontSize').value;
    let fontType = document.querySelector('#fontType').value;

    let borderWidth = document.querySelector('#borderWidth').value;
    let borderColor = document.querySelector('#borderColor').value;
    let borderStyle = document.querySelector('#borderStyle').value;


    box.style.width = sizew + "px";
    box.style.height = sizeh + "px";

    box.textContent = textArea;
    box.style.color = textColor;

    box.style.fontSize = fontSize + 'px';
    box.style.fontFamily = fontType;


    box.style.border = '1px solid #000';
    box.style.borderWidth = borderWidth + "px";
    box.style.borderStyle = borderStyle;
    box.style.borderColor = borderColor;

    return box;
};

document.getElementById('delete_btn').addEventListener('click', () => {
    localStorage.clear();
    backgroundContainer.innerHTML = '';
});