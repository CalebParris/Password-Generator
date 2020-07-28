# Password-Generator

## Objective
The objective of this homework was to make a working random password generator. To accomplish this, I had to create the code for a function that promted the user on how long they wanted the password to be and if they wanted any special characters, numbers, lowercase letters, or uppercase letters in their password.

## Challenges and Solutions
The biggest challenge I faced while working on this was getting the possible pool of characters to include all of the user's choices from the prompts. The solution to this was to create an object that held all of the values for each of the choices. Then once that was complete, I created several if statements that would add the values to the possible pool of characters based on the user's input.

Another challenge I faced was accounting for user error, which includes things like leaving the prompt empty, or typing something other than a letter, or hitting the cancel button. I was able to resolve this with some while loops and if statments. The while loop accounted for any incorrect input whether it was an empty prompt or somthing other than a number. The if statments accounted for if the user no longer wanted to generate a password during the step where the length is chosen.

## Links and Screenshots
Here is a link to the complete working generator: https://calebparris.github.io/Password-Generator/ <br/>
Here is a screenshot of the generator with a random password: <br/> ![Working Password Generator](https://github.com/CalebParris/Passwor-Generator/blob/master/assets/images/Password-Generator.png)