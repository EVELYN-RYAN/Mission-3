$("#grade").click(function () {
	//start by declaring variables and assigning values from inputs

    var asmt = $("#pts1").val();
	var gp = $("#pts2").val();
	var qz = $("#pts3").val();
	var ex = $("#pts4").val();
	var itx = $("#pts5").val();
	var letter ="";

	//calculate the total from the given weights and variables
	var total = (asmt * .55) + (gp * .05) + (qz * .10) + (ex * .20) + (itx * .10);

	//checks to see if values are in bounds. But ASP is what will desplay the messages if not. 
	// This only keeps the alert from showing

	if ((asmt < 1) || (asmt > 100) || (gp < 1) || (gp > 100) || (qz < 1) || (qz > 100) || (ex < 1) || (ex > 100)
		|| (itx < 1) || (itx > 100)) {
		letter = "Changed to ASP message"
	}
	else {
		//If to assign letter grade
		if (total >= 94) {
			letter = "A"
		} else if (total >= 90) {
			letter = "A-"
		} else if (total >= 87) {
			letter = "B+"
		} else if (total >= 84) {
			letter = "B"
		} else if (total >= 80) {
			letter = "B-"
		} else if (total >= 77) {
			letter = "C+"
		} else if (total >= 74) {
			letter = "C"
		} else if (total >= 70) {
			letter = "C-"
		} else if (total >= 67) {
			letter = "D+"
		} else if (total >= 64) {
			letter = "D"
		} else if (total >= 60) {
			letter = "D-"
		} else {
			letter = "E"
		}

		alert("Final Grade: " + letter + "\n" + total + "%")
	}
})