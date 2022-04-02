# Pre-work - **MemoLights!**

**Memolights!** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Ezequiel Lorenzo Acevedo**

Time spent:  **4** hours spent in total

Link to project: https://glitch.com/edit/#!/memolights

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Visual strikes (hearts to display amount of strikes left)

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
Start/Stop button
<img src="http://g.recordit.co/aGo87F3JbF.gif">

![Timer - lose game]
<img src="http://g.recordit.co/x1TKlQjdkp.gif">

![Player strikes]
<img src="http://g.recordit.co/y0oE5vm3bw.gif">

![Game speed-up]
<img src="http://g.recordit.co/Hnp2xBbmWG.gif">

![Win game]
<img src="http://g.recordit.co/5pmNnkGnbM.gif">

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

https://www.delftstack.com/howto/html/html-button-with-image/#:~:text=Placing%20the%20%3Cimg%3E%20tag%20inside%20the%20%3Cbutton%3E%20tag,height%20and%20width%20to%2080%20and%20100%20respectively.

https://www.freecodecamp.org/news/css-rules-to-live-by-962a051e1eb2/#:~:text=CSS%20rules%20that%20will%20make%20your%20life%20easier,Selectors.%20...%2010%20Specificity.%20...%20More%20items...%20

https://www.youtube.com/watch?v=SMzZaYTIYB8

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

Being this my first time being exposed directly to HTML, JavaScript, and CSS, it was challenging to understand and come up with different ideas that would have been otherwise easier in other languages. Although programming logic is similar (if not the same) across most languages, it is difficult for me to grasp some concepts right away, especially in web development. While working with some of the optional features for my game, I encountered what would be my major challenge in this project: the timer. Creating a timer in Java would have been somewhat simple, but developing it on a website was a new experience for me.

I did not know how to complete this task, but I did not want to get a complete answer from someone else. Although I did not know where to start, I wanted to leave some thinking for myself! To accomplish my goal, I decided to look for something similar to a timer: a stopwatch (in JavaScript). Searching for “how to make a stopwatch” would give me all the tools I needed to create a timer, but not the timer itself. I also added some reading (this always helps) from different programming websites to understand what exactly each line of code was doing. In the end, I was able to overcome this challenge and was satisfied with the learning outcomes of my research and my own work.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

As I have mentioned before, web development is a whole new experience for me. However, this experience is something that excites me and sparks my desire for learning. After completing this submission, I noticed how difficult it could be to debug a website. In Java and other languages, we have powerful tools, such as the debugger, to find and fix the issues in our code. I suppose that there exist some debuggers for website development, but how does one debug a website effectively?

Something else that I faced while working on this project was designing the website's style. Although there was a minimized number of components that could be styled in this project, simple things like deciding object colors and positions gave me a hard time. To be honest, I struggle with design; however, I am aware that it is a crucial part of web development. For this reason, I would like to know how to develop better designing and creative skills.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

Given more time to complete this project, I would refactor the functions to hide and display the images in the buttons. Without much knowledge about CSS and JavaScript, I must admit that the method I used to approach this feature may not have been the most efficient. I would research and write a much more polished code to add these functionalities to my project with more time.

Besides polishing the already existing features, I would like to add some additional ones. One of these features would be implementing a level system where the game would get increasingly difficult. In this level system, the first levels would start with short patterns and give the user more time to make guesses. As the level increases, the pattern becomes larger, the time to guess decreases, and the clues play faster. In addition to this level system, I would implement a score feature to give the player a score based on the level they reached and the number of clues they guessed. The user would get 5 points for each correct guess and 100 points multiplied by the level number (e.g., level 2 = 200pts, level 3 = 300pts, etc.) for each level completed.

Finally, I would dedicate some time to improving the design of my website. For this part of the project, I will require getting different people’s opinions in order to shape the style. As I have expressed above, designing is not one of my strengths; however, I am willing to accept help and advice from others to make my projects even better.




## Interview Recording URL Link

[My 5-minute Interview Recording] https://www.loom.com/share/affaef2eec0e49b3ba989ec430ec7756?sharedAppSource=personal_library


## License

    Copyright Ezequiel Lorenzo Acevedo

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
