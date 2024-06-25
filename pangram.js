function pangram(){
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    // Given string is converted in to lower case.
    s=s.toLowerCase();
    // Considering every character of 'alphabets'
    for(let char of alphabets){
        // If character of alphabet is not in string, then return 'Not a pangram'.
        if (!string.includes(char)) {
            console.log("Not a pangram");
            return;
            }
        }       
    
        console.log("Its a pangram");
        

    }
string="THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";
pangram(s);
