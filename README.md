Hi, HtN folks! I had fun building this out, albeit it was rushed.
Skipped sleep to complete this today (22nd Feb, 2023) 😅
There are many things I would like to consider implementing but I am strapped for time.
So I'm happy with the current iteration of schedule app I built with some toy validations.

The validation code is: `123456`
Pretty secure and safe, eh? 😼

Jokes aside, I am going to list out some of the gripes I have with my current iteration and also things I would do to make it better.
First and foremost, due to shortage of time, I could not make a proper folder structure. It looks messy and I would really like to improve it.
Unfortunately, I am very tired at the time of speaking and very sleep deprived.
I do not find VSCode's automated file imports to be trustworthy enough to not break this app, so this is something I would improve upon if I had more time.

I made my best effort in my sleep deprived state to make the components modular with separation of concerns.
I am not happy with some components like the `EventType` and `EventTypePicker` where I feel the code is repeated.
I feel that can be improved and could be made more elegantly.

I was not sure to go strictly with styled-components or separate css modules.
This really depends on the team's best practices - I don't have much preference for this;
I'd go with the team's best practices if I'm working with them.
This thought of mine applies to team's coding standards and use of internal custom component library as well.

I did a very whacky job with the filter system, didn't I?
Initially I did not have any idea what I was doing and I was scared of mutating state, which is an absolute NO NO in React since
mutations cause unexpected behaviour, which I unsurprisingly faced when I noticed the event tag background colors were not working correctly, both in the main even schedule list and also within the modal.
I pieced together my thoughts and logic after a cup of super early morning coffee at 4am today morning, and voila, I made it work...I think? [Coffee === BigBrainMoment ? 🧠 : 🤯]

On to the second challenge, modals. This was tough.

On to the third challenge, which had been my biggest hurdle, the design of the app itself.
I have come to appreciate even more about the fact of having designers in my teams when I previously worked at my past internships.
Any folks who happen to be reading this and also happen to be involved with designing products, you folks are absolutely amazing.

On to the fourth challenge - I wanted to go the extra mile by adding in sparkles, inspired by Josh Comeau's work.
That messed up with the modal it seems, where the event name flows into the modal show casing related events.
I am short on time so I couldn't come up with a fix. 🥲

And I end my note here. Thank you.

To run this locally, first install the npm packages

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.