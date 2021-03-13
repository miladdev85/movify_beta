# **Note:** Not maintained...


## About this project

A website where you can find what to watch next.<br/>
**Keywords:** React, Bootstrap, Responsive design, Async / Await, ES6+

---

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

---

#### Challenges in this journey

The database used for requesting media items is not consistent when it comes to the information delivered.
Due to this, a lot of checking and verifying has to be done. The inconsistency is not necessary a big problem, but it got my attention when searching for less known movies or tv shows.

Example:

- Exactly same media object can be returned twice in same request or in different page number but still same "section"
- Incomplete object properties.
- Inconsistent object properties. Sometimes it is null, undefined, "", etc.

---
