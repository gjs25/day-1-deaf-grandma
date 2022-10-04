
    var prompt = require('prompt'); //npm install prompt package at "https://www.npmjs.com/package/prompt". require('prompt') allows you to access all the tools associated with prompt

    prompt.start(); //start the prompt
    console.log("HEY KID!");
    let GOODBYE=0;
    
    const grandma = () => {
        prompt.get(["answer"], function (err, result) { //result.answer will allow you to capture the input from the prompt
          if  (result.answer === "") {
            console.log("WHAT?!");
            grandma() //this re-runs the function to allow you to continue running remaining conditionals 
          } else if (result.answer === result.answer.toLowerCase()) {
            console.log("SPEAK UP, KID!");
            grandma()
          } else if (result.answer === result.answer.toUpperCase() && result.answer !== "GOODBYE!") {
            console.log("NO, NOT SINCE 1946!");
            grandma()
        } else if (result.answer === "GOODBYE!" && GOODBYE === 1) {
            console.log("LATER SKATER!"); //Have to place this before the first goodbye conditional because we need to run the following conditional to add +1 to the "GOODBYE" variable. 
            return; //ends the function per instructions
          } else if (result.answer === "GOODBYE!") {
            GOODBYE++; 
            console.log("LEAVING SO SOON?");
            grandma()
          }
        });
    }
    grandma(); //invokes the function 