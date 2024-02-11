let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let plant = document.getElementById('plant');
let tree = document.getElementById('tree');
let content = document.getElementById('content');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
    hill2.style.left = value * -1.5 + 'px';
    hill3.style.left = value * 0.5 + 'px';
    plant.style.top = value * 1.5 + 'px';
    tree.style.top = value * 1.5 + 'px';

    // content.style.height = content.scrollHeight + "px";
    

})


