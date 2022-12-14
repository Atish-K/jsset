function addEvent(el, event, callback, isCapture = false){
    if(!el || !event || !callback|| typeof callback !== 'function')
    if(typeof el === 'string'){
        el = document.querySelector(el)
    }
    el.addEventListener(event, callback, isCapture);
}

addEvent(document, 'DOMContentLoaded', ()=>{
    const child = document.querySelector('.child');
    const parent = document.querySelector('.parent');
    const grandparent = document.querySelector('.grandparent');

    addEvent(child, 'click', function(e){
        console.log('child');
    }, true);
    addEvent(parent, 'click', function(e){
        console.log('parent');
    }, true);
    addEvent(grandparent, 'click', function(e){
        console.log('grandparent');
    }, true);
    addEvent(document, 'click', function(e){
        console.log('document');
    }, true);
    addEvent(html, 'click', function(e){
        console.log('html');
    }, true);
    addEvent(window, 'click', function(e){
        console.log('window');
    }, true);
})