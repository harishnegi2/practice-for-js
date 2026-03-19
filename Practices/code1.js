let fruits =["apple", "banana", "cherry", "date"];


// fruits.push("mango");    // Add to end
// fruits.pop();            // Remove from end
// fruits.unshift("grape"); // Add to start 
// fruits.shift();          // Remove from start

fruits.slice(1, 3);      // Extract copy of part of array
// fruits.splice(1, 2);     // Remove/replace original array items


// fruits.includes("apple");     // true
// fruits.indexOf("banana");     // -1
// fruits.join(", ");            // "apple, kiwi, orange"
// fruits.reverse();             // reverse in place
// fruits.sort();                // sorts as strings



//  3. Looping & Iteration
// for, for...of, forEach:


// for (let fruit of fruits) console.log(fruit);
// fruits.forEach(fruit => console.log(fruit));
// map, filter, reduce:


// const upper = fruits.map(f => f.toUpperCase());
// const short = fruits.filter(f => f.length <= 5);
// const total = numbers.reduce((sum, n) => sum + n, 0);

// 4. Advanced Tricks
// Flatten nested arrays:


// const nested = [1, [2, [3]]];
// nested.flat(2); // [1, 2, 3]
// Remove duplicates:


// [...new Set([1, 2, 2, 3])]; // [1, 2, 3]
// Shuffle:


// arr.sort(() => Math.random() - 0.5);


// Deep clone:
// JSON.parse(JSON.stringify(arr));


// JSON.parse(JSON.stringify(arr));

console.log(fruits);





// let marks =[85,65,90,25,40];

// // marks.slice(1,3);
// marks.splice(0,3);

// console.log(marks);
