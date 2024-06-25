function frequency(string){
    // An empty object is assigned to a constant called obj
    const obj = {};
    // Considering each character of string
    for(let char of string)
        {
            //Check if the character is already a key in the obj object
            //If the character exists as a key, increment its value by 1
            if(obj[char]){
                obj[char]+= 1
            }
            //If the character does not exist as a key, set its value to 1
            else{
                obj[char]= 1
            }
        }
    console.log(obj)       

    
}

string = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";
frequency(string)