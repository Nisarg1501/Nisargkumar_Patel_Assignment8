"use strict";

const scores = [];

const displayScores = () => scores.join(", ");

const calculateAverage = () => {
	const total = scores.reduce( (prev, curr) => prev + parseInt(curr), 0);
	return total / scores.length;
};

// load user entries in scores array
for(let i = 2;i<process.argv.length ; i++){
	scores.push(process.argv[i]);
}

if(process.argv.length < 4){
	console.error("For Calulate the average score please provide minimum of two number.");
	process.exit(1);
}
// display all scores
console.log("All Scores: " , displayScores());

// display average score
console.log("Average score: ", calculateAverage());

console.log("Nisargkumar Patel , 8826311");