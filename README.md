The database used for requesting media items is not consistent when it comes to the information delivered. 
Due to this, a lot of checking and verifying has to be done and is an ongoing project. One solution might be that I modify the object before putting it in state - have to think about best way of solving this.

Example:
* Exactly same media object can be returned twice in same request or in different page number but still same "section"
* Incomplete object properties.
* Inconsistent object properties. Sometimes it is null, undefined, "", etc. 

-------------------------------------------------------------------------------------------------------------------------------------------

Really not sure if my way of splitting and reusing components is right or wrong. This is definitely something I want to improve and learn.
My aim is to learn what best practice is considered and apply that.

-------------------------------------------------------------------------------------------------------------------------------------------

Most components started as React Hooks components but the handling of state, dependencies and complexity made me refactor most Hooks components to Class components. 

-------------------------------------------------------------------------------------------------------------------------------------------

Comments will be added in the next couple of days. Folder structure will also be added in the next couple of days. Whole project was rebuilt and still has legacy code and/or files not being used yet.

-------------------------------------------------------------------------------------------------------------------------------------------

Next "big" task is to learn and use React Transition Group and CSSTransition and remove most Bootstrap classes. I made the choice to not add Bootstrap from React-Bootstrap and instead just used Bootstrap CSS - don't know what is considered good or bad, I didn't want to add lots of components AND CSS.

-------------------------------------------------------------------------------------------------------------------------------------------

Enjoy! Hope you like the site and please feel free to comment or reach out where I have made errors or completely newbie misstakes. After all, this is my first project.
