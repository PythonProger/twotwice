# TwoTwice
The task: 
To write a function that determines which elements are present twice in each of the arrays (twice = two or more times in each array). Two arrays are given as input. The output is an array with the necessary matches. For example: on input [7, 17, 1, 9, 1, 17, 56, 56, 23]; [56, 17, 17, 17, 1, 23, 34, 23, 1, 8, 1]; on the output [1, 17]. 

The solution:

function compareItems(arrayA, arrayB) { let counter = 0; let starter = 0; let sameItems = []; let arrayC = arrayA; let runner = (arrayC.length-1); function execute() { while (starter < runner) { if (arrayC[starter] === arrayC[runner]) { sameItems.push(arrayC[starter]); counter +=1; } runner -=1; } starter +=1; runner = (arrayC.length-1) } arrayC.forEach(execute); starter = 0; arrayC = arrayB; runner = (arrayC.length-1); arrayC.forEach(execute); starter = 0; arrayC = sameItems; sameItems = []; runner = (arrayC.length-1); counter = 0; arrayC.forEach(function() { while (starter < runner) { if (arrayC[starter] === arrayC[runner]) { if (sameItems.includes(arrayC[starter]) === false) { sameItems.push(arrayC[starter]); counter +=1; } } runner -=1; } starter +=1; runner = (arrayC.length-1) }); console.log(counter + ' - ' + sameItems); return sameItems; }

Only console, without web interface. 
