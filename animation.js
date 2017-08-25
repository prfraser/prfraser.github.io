function toggleHomeSpin() {
	document.getElementById("col2-row1").classList.toggle("home-flipped");
	document.getElementById("col1-row2").classList.toggle("home-flipped");
	document.getElementById("col3-row2").classList.toggle("home-flipped");
	document.getElementById("col2-row3").classList.toggle("home-flipped");
}

function toggleProjectSpin() {
	document.getElementById("col2-row1").classList.toggle("project-flipped-top");
	document.getElementById("col1-row2").classList.toggle("project-flipped-right");
	document.getElementById("col3-row2").classList.toggle("project-flipped-top");
	document.getElementById("col2-row3").classList.toggle("project-flipped-top");
}

function toggleContactSpin() {
	document.getElementById("col2-row1").classList.toggle("contact-flipped");
	document.getElementById("col1-row2").classList.toggle("contact-flipped");
	document.getElementById("col3-row2").classList.toggle("contact-flipped");
	document.getElementById("col2-row3").classList.toggle("contact-flipped");
}

function toggleAboutSpin() {
	document.getElementById("col2-row1").classList.toggle("about-flipped");
	document.getElementById("col1-row2").classList.toggle("about-flipped");
	document.getElementById("col3-row2").classList.toggle("about-flipped");
	document.getElementById("col2-row3").classList.toggle("about-flipped");
}

function removeAppliedClasses(clicked_box) {
	console.log("Ran removeAppliedClasses")
	var dispBoxOne = document.getElementById("col2-row1").classList;
	var dispBoxTwo = document.getElementById("col1-row2").classList;
	var dispBoxThree = document.getElementById("col3-row2").classList;
	var dispBoxFour = document.getElementById("col2-row3").classList;

	dispBoxOne.remove("project-flipped", "contact-flipped", "home-flipped", "about-flipped");
	dispBoxTwo.remove("project-flipped", "contact-flipped", "home-flipped", "about-flipped");
	dispBoxThree.remove("project-flipped", "contact-flipped", "home-flipped", "about-flipped");
	dispBoxFour.remove("project-flipped", "contact-flipped", "home-flipped", "about-flipped");
	spinner(clicked_box)
}

function spinner(clicked_box) {
    if (clicked_box == "col3-row1") {
		toggleProjectSpin()
	} else if (clicked_box == "col3-row3") {
		toggleContactSpin();
	} else if (clicked_box == "col1-row3") {
		toggleAboutSpin();
	}
};

