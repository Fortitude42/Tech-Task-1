/*
	select part
*/
let clicked = false

const store_option = document.getElementById('store-option');
const women_option = document.getElementById('women-option');
const men_option = document.getElementById('men-option');
const kids_option = document.getElementById('kids-option');
const cursor_down = document.getElementById('cursor-down');
const cursor_up = document.getElementById('cursor-up');


store_option.addEventListener("click", () => {	
	if (clicked) {
		women_option.hidden = true
		men_option.hidden = true
		kids_option.hidden = true
		cursor_down.hidden = false
		cursor_up.hidden = true
		clicked = false;		
	} else {
		women_option.hidden = false
		men_option.hidden = false
		kids_option.hidden = false
		cursor_down.hidden = true
		cursor_up.hidden = false
		clicked = true;
	}
})


/*
	quote part
*/
let data = []
let q_state = 0
const left_chevron = document.getElementById('left-chevron')
const left_chevron_gap = document.getElementById('left-chevron-gap')
const right_chevron = document.getElementById('right-chevron')
const q_text = document.getElementById('q-text')
const q_author = document.getElementById('q-author')

const cws = [document.getElementById('cw1'), document.getElementById('cw2'), document.getElementById('cw3')]
const cbs = [document.getElementById('cb1'), document.getElementById('cb2'), document.getElementById('cb3')]

right_chevron.addEventListener("click", () => {
	cws[q_state].hidden ^= true
	cbs[q_state].hidden ^= true	

	q_state++;

	cws[q_state].hidden ^= true
	cbs[q_state].hidden ^= true

	q_text.innerHTML = data[q_state].name
	q_author.innerHTML = data[q_state].price
	left_chevron.hidden = false
	left_chevron_gap.hidden = true		
	if (q_state == 2) {
		right_chevron.hidden = true		
	}
})

left_chevron.addEventListener("click", () => {
	cws[q_state].hidden ^= true
	cbs[q_state].hidden ^= true

	q_state--

	cws[q_state].hidden ^= true
	cbs[q_state].hidden ^= true

	q_text.innerHTML = data[q_state].name
	q_author.innerHTML = data[q_state].price
	right_chevron.hidden = false
	if (q_state == 0) {
		left_chevron.hidden = true
		left_chevron_gap.hidden = false
	}
})


fetch("../products.json")
.then(response => response.json())
.then(json => {
	data = json.filter(item => item.price < 5.00)	
	q_text.innerHTML = data[0].name
	q_author.innerHTML = data[0].price
})


/*
	video part
*/

const video = document.getElementById('video')
const player = document.getElementById('player')

player.addEventListener("click", () => {
	player.hidden = true
	video.hidden = false	
})