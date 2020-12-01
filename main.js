function changeImg(id, url) {
    const imgId = document.querySelector(id);
    imgId.src = url;
}

changeImg('#image-1', 'https://media.giphy.com/media/cbl5cQBtzDcHmtTEiv/giphy.gif');
changeImg('#image-2', 'https://media.giphy.com/media/ejDCC4X7p3cTq0g5qe/giphy.gif');
changeImg('#image-3', 'https://media.giphy.com/media/CsR56PJlHELUA/giphy.gif');

function strikeThroughFirstLi() {
    const firstListItem = document.querySelector('ul :first-child');
    firstListItem.style.textDecoration = 'line-through';
}

strikeThroughFirstLi(); 

function removeLi() {
    document.querySelector('li:last-child').remove();
}

removeLi();
removeLi();

function appendUl(element) {
    document.querySelector('ul').appendChild(element);
}

const newImg = document.createElement('img');
newImg.src = 'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif';
appendUl(newImg);

function changeImgHeight(img) {
    img.style.height = '30px';
}

const findImg = document.querySelector('img');
changeImgHeight(findImg);

function invisible(element) {
    element.className = 'invisible';
}

const findEl = document.querySelector('ol');
invisible(findEl);

function changeFont(fontSize, id) {
    const findId = document.querySelector(id);
    findId.style.fontSize = fontSize;
}

changeFont('30px', 'h1');

