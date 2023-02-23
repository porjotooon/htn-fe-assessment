Hi, HtN folks! I had fun building this out, albeit it was rushed.
Skipped sleep to complete this today (22nd Feb, 2023) 😅
There are many things I would like to consider implementing but I am strapped for time.
So I'm happy with the current iteration of the schedule app I built with some toy validations.

Here's a sneak peak -
<br>
POV of unauthorized user:

![image](https://user-images.githubusercontent.com/52707659/220789176-8b06119e-bc08-4778-9283-0c53ce5deda6.png)

<br>
<br>
POV of authorized user:

![image](https://user-images.githubusercontent.com/52707659/220792323-752c5837-6869-489f-9403-a5955da8ef93.png)

<br>
<br>
The validation code is: 123456
<br>
Pretty safe and secure, eh? 😼

Jokes aside, I am going to list out some of the gripes I have with my current iteration and also things I would do to make it better.
First and foremost, due to shortage of time, I could not make a proper folder structure. It looks messy and I would really like to improve it.
Unfortunately, I am very tired at the time of writing and very sleep deprived.
I do not find VSCode's automated file imports to be trustworthy enough to not break this app, so this is something I would improve upon if I had more time.

I made my best effort in my sleep deprived state to make the components modular with separation of concerns.
I am not happy with some components like the `EventType` and `EventTypePicker` where I feel the code is repeated.
I feel that can be improved and could be made more elegant.

I was not sure to go strictly with styled-components or separate css modules.
This really depends on the team's best practices - I don't have much preference for this;
I'd go with the team's best practices if I'm working with them. This thought of mine applies to team's coding standards and use of internal custom component library as well.
<br>
I also added some inline styling which is frowned upon - I am a not big fan of it either since it is not consistent;
I added those inline style to solve the styling issues I faced - if I had more time, would've implemented it differently.

I did a very whacky job with the filter system, didn't I?
Initially I did not have any idea what I was doing and I was scared of mutating state, which is an absolute NO NO 🙅⛔ in React since
mutations cause unexpected behaviours, which I unsurprisingly faced when I noticed background colors of the event type tags were not working correctly, both in the main even schedule list and also within the modal.
I pieced together my thoughts and logic after a cup of coffee ☕ super early in the morning at 4am today, and voila, I made it work...I think?
`[Coffee === BigBrainMoment ? 🧠 : 🤯]`
I realized I use a lot of emojis, don't I? 🤔💭
I definitely used a lot in this web app, haha.
Guess it's a fun way to be expressive through text 😼

On to the second challenge, modals. This was tough...yeah this was pretty tough. Moving on.

The third challenge, which had been my biggest hurdle, was the design of the app itself.
I have come to appreciate even more about the fact of having designers in my teams when I previously worked in my past internships.
Any folks who happen to be reading this and also happen to be involved with designing products, you folks are absolutely amazing. 😎

On to the fourth challenge - I wanted to go the extra mile by adding in sparkles ✨ on the event name, inspired by Josh Comeau's work.
I reused a lot of the components and util functions, namely: `use-prefers-reduced-motion`, `use-random-interval`, `Sparkles`, and logic he had used to implement this nifty cool feature.
I initially thought it woudn't require many additional changes - I was pretty wrong in thinking that...too late to go back now 😵‍💫
That messed things up a little with the modal it seems, where the event name flows into the modal where it is show casing related events.
I am short on time so I couldn't come up with a fix. 🥲
Here's what it looks like:
![image](https://user-images.githubusercontent.com/52707659/220789386-baddc691-bee1-419a-a6db-5151f00517f6.png)

<br>
I wanted to make the order by date state persist by using `localStorage` but unfortunately, I am short on time. So apologies there.
<br>
I also thought about implementing authentication but again, I'm short on time sadly.
<br>
I tried my best to address accessibility issues, I am still learning a lot about accessibility and I feel there is lot of room for growth for myself.

<h2>
My response for part 2 questions:
</h2>
I drew a rough sketch of what I wanted to build. Here's what my sketch looks like:

![image](https://user-images.githubusercontent.com/52707659/220798774-173eac81-a989-4081-a1a4-14755190168e.png)

The first thought I had in mind is essentially try to fit in all the info I'm getting from the endpoint into a card component for each listed event.
I like minimalistic desgins with a flair of cuteness sprinkled generously over - while I can't say for sure if everyone would agree with me on this, but I think I did somewhat achieve what I was trying to aim for.
I struggled quite a bit to come up with this sketch - clearly shows how much reliant I am on designers to come up with designs.
I took some inspiration from https://my.hackthenorth.com/schedule, where I essentially took the idea of adding in colors for each event type.
I also added some emojis to give them some character depth.
I love React Hooks, so it was my definite tool of choice to go with for building this.

I encountered many problems while building this - filtering issues, unintended state mutations, sparkles issue which made event names overflow into the modal (something which I couldn't solve 😓) - I had to take a break and figure out what I was doing wrong and piece together a working solution to get what I was trying to achieve.
There are some tradeoffs for the hacky solution I came up with: I don't think my filtering solution is performant so I think it would scale poorly had there been hundreds or more events.

Collectively, I am proud of being able to put out a cute schedule event list web app.

<br>
With additional time, I might've tinkered with Next.js and added authentication and come up with better & performant filtering logic.
I would also add loading animations to make it look cool.

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
