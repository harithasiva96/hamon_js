function fizzbuzz() {
    // Assigned num values between 1 and 101
    for(let num=1; i<101; i++)
        {
            // If the modulus of the number assigned to num and 15 is zero, return "Fizz Buzz" 
            if(num%15 == 0)
                {
                    console.log("Fizz Buzz");
                }
            else if(num%5==0)
                {
                    console.log("Buzz")  ;
                }
            else if(num%3 == 0)
                {
                    console.log("Fuzz");
                }
            else
            {
                console.log(i);
            }

    }
}
// The function is called
fizzbuzz();