


  function add7 (a) {
    return a + " + 7";
  }
  console.log(add7(1));

  function multiply(a, b) {
    return a * b; 
  }
  console.log(multiply(2,5));


  function capitalize() {
    //prompt the user for a string and save it
    let getString = prompt("type your string.");
    //convert the whole string first into toLowerCase()
    let lowered = getString.toLowerCase();
    //take out the whole string excecpt the first character
    let shortStr = lowered.slice(1);
    //take out the 1st character from the lowered string using charAt()//capitalize it using toUpperCase()
    let fstUpper = lowered.charAt(0).toUpperCase();
    //concat it to the sliced string
    return fstUpper + shortStr;
  }
  console.log(capitalize());


  function lastletter() {
      // prompt for a string and save it
      let getString = prompt("type a string.");
      // take out the 1st character using charAt() & return this single character
      let laststr = getString.slice(-1);
      return laststr;
  }
  console.log("the last letter in your string was letter" + " " + lastletter());