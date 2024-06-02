function generatehexcode() {
    const hexvalues = '0123456789ABCDEF';
    let hexcode = '#';
    
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexvalues.length);
        hexcode += hexvalues[randomIndex];
    }
    
    document.getElementById('hexcode').innerText = hexcode;
}
