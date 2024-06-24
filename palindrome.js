function palindrome() {
    let string='malayalam';
    //Convert the word into lower case.
    let string1=string.toLowerCase();
    //Convert the string in to an array.
    let arr = [...string1];
    // Length of the array is assigned to 'len'.
    let len=arr.length;
    
    let emptyarr = [];
     
    for (let i = len - 1; i >= 0; i--) {
        emptyarr.push(arr[i]); // Adding every element in arr into emptyarr.
    }

    let reversedString = emptyarr.join(''); 

    if (string1 === reversedString) {
        console.log(`Input word is a palindrome`);
    } else {
        console.log(`Input word is not a palindrome`);
    }
}

palindrome();
