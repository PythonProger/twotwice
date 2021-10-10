"use strict"
const arrayA = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const arrayB = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];
function compareItems(arrayA, arrayB) {
	let counter = 0;
	let starter = 0;
	let sameItems = [];
	let arrayC = arrayA;
	let runner = (arrayC.length-1);
			function execute() {
				while (starter < runner) {
					if (arrayC[starter] === arrayC[runner]) {
							sameItems.push(arrayC[starter]);
							counter +=1;
					}
					runner -=1;
					}
				starter +=1;
				runner = (arrayC.length-1)
			}
			arrayC.forEach(function() { execute(); });
	starter = 0;
	arrayC = arrayB;
	runner = (arrayC.length-1);
			arrayC.forEach(function() { execute(); });
	starter = 0;
	arrayC = sameItems;
	sameItems = [];
	runner = (arrayC.length-1);
	counter = 0;
			arrayC.forEach(function(item, index, array) {
					while (starter < runner) {
						if (arrayC[starter] === arrayC[runner]) {
							if (sameItems.includes(arrayC[starter]) === false) {
								sameItems.push(arrayC[starter]);
								counter +=1;
								}
							}
					runner -=1;	
						}
				starter +=1;
				runner = (arrayC.length-1)
			});
			console.log(counter + ' - ' + sameItems);
	return sameItems;
	}
compareItems(arrayA, arrayB);
