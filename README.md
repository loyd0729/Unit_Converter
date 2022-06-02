- Unit_Converter
  * This is a solo project from Scrimba.
  * Originally this project does not contain input 
  * for the user to enter the numbers.
  * I decided to add some of input, buttons that calculate
  * the Length, Volume, and Mass where it will
  * output the calculated number to its designated unit.

- Challenges:
  1. The output of the calculation was not showing.
  2. Output were overlapping due to decimal spaces.
  3. borders were keep moving downwards after the output generated in the output field.

- Solutions:
  1. .textContent was use in every unit in order for the output to appear in the designated field.
       document.getElementById("conlen").textContent = num1a;
  2. I found out the floating number were treated as a string. I resolved this issue by parsing the output
     using parseFloat().
  3. The purpose of boders being used in this application is to staged the genrated/output unit.
     in order for the border not to move downwards, I had to div each border and made sure the margins and
     width were properly adjusted.

