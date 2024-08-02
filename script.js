//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', changeColor);
document.getElementById('reset').addEventListener('click', resetColors);

function changeColor() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;
    resetColors();
    const block = document.getElementById(blockId);
    if (block) {
        block.style.backgroundColor = color;
    }
	document.getElementById('block_id').value = "";
    document.getElementById('colour_id').value = "";
}

function resetColors() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
}