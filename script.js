
const insert = document.getElementById('insert');
const body = document.body;

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class='key'>
        ${event.key === ' ' ?  'Space'  : event.key}
        <small>event.key</small>
    </div>

    <div class='key'>
        ${event.keyCode}
        <small>event.keycode</small>
    </div>

    <div class='key'>
        ${event.code}
        <small>event.code</small>
    </div>

    `;
  
    if(event.key === 'r') {
        body.style.background = "#f00";
    }
    else if(event.keyCode === 71) {
        body.style.background = "#0f0";
    }
    else if(event.code === 'KeyB') {
        body.style.background = "#00f";
    }
    else if(event.code === 'KeyD') {
        body.style.background = "#456211";
    }
    else if(event.code === 'KeyU') {
        body.style.background = "#455465";
    }
    else if(event.code === 'KeyT') {
        body.style.background = "#232323";
    }
    else if(event.code === 'KeyO') {
        body.style.background = "#111111";
    }
    else if(event.code === 'KeyE') {
        body.style.background = "#879541";
    }
    else {
        body.style.background = "#e1e1e1";
    }
});
