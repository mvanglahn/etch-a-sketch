const sketchArea = document.querySelector('.etchASketch');
const gridOut = createEle(sketchArea,'div',' ','grid-frame')
const sketch = {x:16, y:16};

createGrid();

function createGrid(){
    const total = sketch.x * sketch.y;
    for (let i=0; i<total; i++){
        const temp = createEle(gridOut,'div', `${i+1}`,'grid');
    }
    gridOut.style.setProperty(`grid-template-columns`, `repeat(${sketch.y},1fr)`)
}
    

function createEle(parent, eleType, html, eleClass){
    const ele = document.createElement(eleType);
    ele.innerHTML = html;
    ele.classList.add(eleClass);
    return parent.appendChild(ele);
}

var box = document.querySelectorAll('.grid');
box.forEach(elem => elem.addEventListener('mouseover', hoverOn, false));
//box.addEventListener('mouseovut', hoverOff, false);

function hoverOn(){
    this.classList.add('hoverOn')
}

function hoverOff(){
    box.setAttribute('style', 'background-color: white')
}