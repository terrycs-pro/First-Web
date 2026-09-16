//Question 1: Arithmetic
function performArithmetic() {
	const firstarithmeticnumber = Number(document.forms.ArithmeticForm.firstarithmeticnumber.value);
	const secondarithmeticnumber = Number(document.forms.ArithmeticForm.secondarithmeticnumber.value);
	const arithmeticoperator = document.forms.ArithmeticForm.arithmeticoperator.value;
	let arithmeticresult = 0;
	
	switch(arithmeticoperator) {
		case 'Addition':
			arithmeticresult = firstarithmeticnumber + secondarithmeticnumber;
			alert(`The result of adding ${firstarithmeticnumber} and ${secondarithmeticnumber} is ${arithmeticresult}.`);
			
			var arithres = '<br><div>The sum of ' + firstarithmeticnumber + ' and ' + secondarithmeticnumber + ' is ' + arithmeticresult + '</div>';
			document.getElementById("arithOutput").innerHTML += arithres;
			
			break;
			
		case 'Subtraction':
			arithmeticresult = firstarithmeticnumber - secondarithmeticnumber;
			alert(`The result of subtracting ${firstarithmeticnumber} and ${secondarithmeticnumber} is ${arithmeticresult}.`);
			
			var arithres = '<br><div>The difference of ' + firstarithmeticnumber + ' and ' + secondarithmeticnumber + ' is ' + arithmeticresult + '</div>';
			document.getElementById("arithOutput").innerHTML += arithres;
			
			break;
			
		case 'Multiplication':
			arithmeticresult = firstarithmeticnumber * secondarithmeticnumber;
			alert(`The result of multiplying ${firstarithmeticnumber} and ${secondarithmeticnumber} is ${arithmeticresult}.`);
			
			var arithres = '<br><div>The product of ' + firstarithmeticnumber + ' and ' +secondarithmeticnumber + ' is ' + arithmeticresult + '</div>';
			document.getElementById("arithOutput").innerHTML += arithres;
			
			break;
			
		case 'Division':
			if (secondarithmeticnumber == 0) {
				alert('Cannot divide by zero!');
				
				var zeroerr = '<br><div>Cannot divide by zero! </div>';
				document.getElementById("arithOutput").innerHTML += zeroerr;
				
				break;
			} else {
				arithmeticresult = firstarithmeticnumber / secondarithmeticnumber;
				alert(`The result of dividing ${firstarithmeticnumber} and ${secondarithmeticnumber} is ${arithmeticresult}.`);
				
				var arithres = '<br><div>The quotient of ' + firstarithmeticnumber + ' and ' + secondarithmeticnumber + ' is ' + arithmeticresult + '</div>';
				document.getElementById("arithOutput").innerHTML += arithres;
				
				break;
			}
		default:
			alert(`ERROR: Default case.`);
			break;
	}

}

	
			
//Question 2: Factorial	
function performFactorial() {
	const factorialnumber = Number(document.forms.FactorialForm.factorialnumber.value);
	let factorialresult = 0;
	
	if (factorialnumber < 0) {
		alert('Cannot calculate the factorial of a negative number!');
		return;
	} else if (factorialnumber === 0) {
		alert(`The factorial of ${factorialnumber} is 1.`);
		return;
	} else {
		factorialresult = 1;
		for (i = 1; i <= factorialnumber; i++) {
			factorialresult *= i;
		}
	}
	alert(`The factorial of ${factorialnumber} is ${factorialresult}.`);
	
	var factres = '<br><div>The factorial of ' + factorialnumber + ' is ' + factorialresult + '</div>';
	
	document.getElementById("factOutput").innerHTML += factres;
}

	
	
//Question 3: Nth Fibonacci Number
function fibonacciFinder() {
	const fibnumber = Number(document.forms.FibonacciForm.fibnum.value);
	
	fibresult = nthFibonacci(fibnumber);
	
	alert(`The Nth Fibonacci Number of ${fibnumber} is ${fibresult}.`);
		
	var fib = '<br><div>The Nth fibonacci Number of ' + fibnumber + ' is ' + fibresult + '</div>';
	
	document.getElementById("fibOutput").innerHTML += fib;
}

function nthFibonacci(n){

    // base case
    if (n <= 1) {
        return n;
    }
    
    // sum of the two preceding 
    // Fibonacci numbers
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}


	

//Question 4: Find Range
function performRange() {
	const firstrangenumber = Number(document.forms.RangeForm.firstrangenumber.value);
	const secondrangenumber = Number(document.forms.RangeForm.secondrangenumber.value);
	const thirdrangenumber = Number(document.forms.RangeForm.thirdrangenumber.value);
	let range = 0;
	
	let max = Math.max(firstrangenumber, secondrangenumber, thirdrangenumber);
	let min = Math.min(firstrangenumber, secondrangenumber, thirdrangenumber);
	
	range = max - min;
	
	alert(`The range between ${min} and ${max} is ${range}.`);
	
	var rangeres = '<br><div>The range between ' + min + ' and ' + max + ' is ' + range + '</div>';
	
	document.getElementById("rangeOutput").innerHTML += rangeres;
	
}

//Question 5: Email Signup
function addSignup() {
	var firstName = document.SignupForm.firstname.value;
	var lastName = document.SignupForm.lastname.value;
	var email = document.SignupForm.email.value;
	var ZIP = document.SignupForm.ZIP.value;
	
	var signupInfo = '<br><br><div>First Name: ' + firstName + '<br>Last Name: ' + lastName + '<br>Email: ' + email + '<br>ZIP: ' + ZIP + '</div>' ;
	
	document.getElementById("signupList").innerHTML += signupInfo;

}