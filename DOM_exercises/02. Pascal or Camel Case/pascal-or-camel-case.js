function solve() {
    let connector = '';
    let firstParameter = document.getElementById('text').value.split(' ');
    let secondParameter = document.getElementById('naming-convention').value;
	let output = document.getElementById('result')


	if (secondParameter == 'Camel Case') {
		connector += firstParameter[0].toLowerCase();
		for (let i=1; i < firstParameter.length; i++) {
			let word = firstParameter[i];
			let firstCapital = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			connector +=firstCapital
		}

	}
	else if (secondParameter == 'Pascal Case') {
		for (let i=0; i < firstParameter.length; i++) {
			let word = firstParameter[i];
			let firstCapitalLetter = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			connector += firstCapitalLetter
		}
		
	}
	else {
		output.textContent = 'Error!';
		return
	}
	output.textContent = connector;
}
	
