
// Array is a continuous memory location
// In JS Array is also a special type of Object
// We can access array elements using index

// Create an Array
let nums = [ 10, 20 ,30 ] ;

console.log("Access array elements usnig index\n-----------------------");
console.log( nums[0] ); // 10
console.log( nums[1] ); // 20
console.log( nums[2] ); // 30
console.log( nums[3] ); // undefined

console.log("Access using for-of loop\n-----------------------");
for( let num of nums)
{
    console.log( num ); //10, 20, 30
}

console.log("Access using for-in loop\n-----------------------");
for( let i in nums)
{
    console.log( nums[i] ); //10, 20, 30
}

console.log("Access using for loop\n-----------------------");
for( let i=0 ; i < nums.length ; i++ )
{
    console.log( nums[i] ); //10, 20, 30
}

// ----------------------------------------------------------------------

// Array Methods
// ----------------------------------------------------------------
// join(string delimiter)
let arr = [ 1, 2, 3, 4, 5 ];
console.log( arr.join(",")) ; // 1, 2, 3, 4, 5 

// -----------------------------------------------------------------------

// sort()
// sort( Arrowfunction )
arr = [ 5, 1, 4, 2, 3 ] ;
arr.sort() ;
console.log(arr) ; // 1, 2, 3, 4, 5

arr.sort( (a,b) => b-a ) ;
console.log( arr) ;// 5, 4, 3, 2, 1



// ---------------------------------------------------------------
// reverse()
arr = [100, 200, 300, 400, 500]
arr.reverse();
console.log(arr) ; // 500, 400, 300, 200, 100



// --------------------------------------------------------------------
// push(value) -> add element at last
// unshift(value) -> add element at first
arr = [ 10, 20, 30 ] ;
console.log( arr ); // 10, 20, 30 

arr.push(888) ;
console.log( arr ); // 10, 20, 30, 888

arr.unshift(999) ;
console.log( arr ); // 999, 10, 20, 30, 888 

//-----------------------------------------------------------------------
// pop() -> remove last element
// shift() -> remove first element
arr = [10, 20, 30, 40, 50] ;
console.log( arr ); // 10, 20, 30, 40, 50

arr.pop() ; // 50 removed
console.log( arr ) ; // 10, 20, 30, 40 

arr.shift() ; // 10 removed
console.log( arr ); // 20, 30, 40



// --------------------------------------------------------------------
// splice( startIndex, deleteCount, newElement) -> add/remove/replace anywhere
arr = [ 1, 2, 3, 4, 5, 6 ]
arr.splice( 1, 2) // from 1st index remove 2 element
console.log( arr) // 1, 4, 5, 6

arr.splice( 2, 0, 888, 999) // from 2nd index add 888 & 999
console.log( arr ); // 1, 4, 888, 999, 5, 6


// -----------------------------------------------------------------
// slice( index, end) -> returns sub array from specified index elements 
arr = [ 10, 20, 30, 40, 50, 60 ] ;
console.log( arr)

let subArr = arr.slice( 2, 5) ; 
console.log( subArr ) ; // 30, 40, 50



// --------------------------------------------------------------------
// index(element) -> returns first index of given element
// includes(element) -> checks element exists or not
arr = [ "Sheela", "Allen", "Mala", "Smith" ];
console.log( arr) ;

console.log( arr.includes( "Allen") ); // true
console.log( arr.includes( "Miller") ); // false

console.log( arr.indexOf( "Allen") ); // 1
console.log( arr.indexOf( "Miller") ); // -1



// ---------------------------------------------------------------------
// flat() -> returns flatten nested arrays ( does not modify same array)
arr = [ 1, 2, 3, [4, 5, 6], 7, 8] ;
console.log( arr );

console.log( arr.flat() );


// ----------------------------------------------------------------------
// concate(arrayRef) -> Merge arrays
let nums1 = [ 1, 2, 3 ]
let nums2 = [ 4, 2, 5, 6 ]
console.log(`nums1 :: ${nums1}`);
console.log(`nums2 :: ${nums2}`);

let newNums = nums1.concat(nums2)
console.log(`newNums :: ${newNums}`); // 1, 2, 3, 4, 2, 5, 6


// ------------------------------------------------------------------
// reduce( arrow function ) -> Reduce array to single value
// filete( arrow function ) -> Select elements based on condition
// map( arrow function ) -> Transform array → new array
// forEach( arrow function) -> Execute function for each element
arr = [ 1, 2, 5, 3, 4, 1, 5 ] ;
arr.forEach(x => console.log(x));
const squares = arr.map(x => x * x);
const evens = arr.filter(x => x % 2 === 0);
const sum = arr.reduce((a, b) => a + b, 0);
const max = arr.reduce((a, b) => a > b? a : b, -Infinity);
const min = arr.reduce((a, b) => a < b? a: b, Infinity);

console.log("sum ::", sum)
console.log("Max ::", max)
console.log("Min ::", min)
// ------------------------------------------------------------------








