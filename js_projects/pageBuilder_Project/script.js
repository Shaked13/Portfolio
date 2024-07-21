document.querySelector('#add_btn').addEventListener('click', () => {
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

    document.querySelector('.background').appendChild(box);
});

function toggle() {
    var move = document.getElementsByClassName("sidebar");
    if (move.style.display === "none") {
        move.style.display = "block";
    } else {
        move.style.display = "none";
    }
}