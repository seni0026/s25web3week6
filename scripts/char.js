const charInfo = [
	[
		"Compost Heap",
		"Food Taster",
		"Compost Heap's strengths are in the creation of delicious and nutritious foodstuffs to heal the group.  Of course, he always keeps a little bit for himself.",
		"compostHeap.gif",
		60,
		80,
		50
	],
	["Felix", "Basket Weaver", "Weaving is a dangerous profession, as Felix knows. Trained from a young age, he can take any wooden object and turn it into a deadly basket.", "felix.gif", 75, 50, 60],["Robopig", "Dentist", "Finding treasure is a lot like pulling teeth, and it turns out that plyers, drills, and mirrors on little sticks are great out on the field.  Robopig is the innovator of the group, and she always has some item for the task at hand.", "robopig.gif", 70, 40, 70],["Slimy", "Proctologist", "Silmy can be a real pain in the nether regions to her enemies, and is most efficient wielding heated iron rods. She is also the brains of the group, easily solving any puzzle.", "slimeMan.gif", 40, 70, 75],["Sock Monster", "Dragon Slayer", "Easily the strongest of the group, Sock Monster can wield any type of weapon, but is most deadly with anything made from cotton.  Dragons beware!", "sockMonster.gif", 90, 30, 75]
];

// call to add a character when the page first loads
updateInfo(0);

function updateInfo(characterNumber) {
	// the variable characterNumber is sent when the function is called
	// it will be a number between 0 and 4, telling us which position in the array
	// to get the character's info

	// becaue we're now changing this dynamically, we need to remove the old info
	document.querySelector('#cInfo1').innerHTML = '';

	// add the initial character value (when the page first load)
	// using document.createElement
	const charName = document.createElement('h3');
	charName.id = 'cName';
	
	// add the character's name from the array (use the first character set)
	// from the array, get the value [0], which is also an array
	// ...and get the first value from that [0], which is the character's name
	charName.textContent = charInfo[characterNumber][0];
	
	// add the element to the page
	document.querySelector('#cInfo1').appendChild(charName);
	
	// create a second h3 element
	const charJob = document.createElement('h3');
	charJob.id = 'cJob';
	
	charJob.textContent = charInfo[characterNumber][1];
	document.querySelector('#cInfo1').appendChild(charJob);
	
	// use HTML template literals to add an image
	const imageHolder = document.querySelector('#picholder');
	
	// put the image info into a variable to add it dynamically
	const charImage = charInfo[characterNumber][3];
	
	// create the HTML as a template using backticks
	const htmlTemplate = `<img src="images/${charImage}" alt="This is the character's image">`;
	
	// add the template to the page using innerHTML
	imageHolder.innerHTML = htmlTemplate;
}

// make button clickable
// use a loop to go through all five buttons
const buttons = document.querySelectorAll('.cButton');

for(let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', changeChracter);
}

function changeChracter() {
	// remove activated from the previous button
	document.querySelector('.activated').classList.remove('activated');

	// add activated to the current button
	this.classList.add('activated');

	// figure out which number this child is, so we can apply the info
	// about the character
	let allChildren = this.parentNode.children;

	// because allChildren is not a true array, but but a collection of html elements
	// we have to convert it to a true array first
	allChildren = Array.from(allChildren);

	// use indexOf to get the position of the value
	const valuePosition = allChildren.indexOf(this);

	// call a function to update the info
	// send it the element's current position (which button we clicked on)
	// we'll use that position to get the correct character from the array
	updateInfo(valuePosition);
}