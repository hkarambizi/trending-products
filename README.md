![Image of Snackpass](https://www.snackpass.co/static/media/logo_round_2.d74f1dd2.png)

# Snackpass Full Stack Code Challenge
Welcome to the Snackpass Challenge. We really appreciate you taking the time time to participate!

## The Challenge
Assume the customers around a campus order 5000 orders a day from 50 local restaurants. Each order contains one or multiple products where each product is a food item from that restaurant's menu. For example, one order could be summarized as: `2 burritos, a soda, and a side of chips`.

To complete this challenge, please build a functional website with frontend & backend code that achieves the following:
1. Displays a webpage with an infinite-scrolling list of "trending" products
   - A product is "trending" if it has been purchased at least once in the last 48 hours
   - Each item in the list should be visibly tagged with two attributes:
      * a recent purchase tag, ie: `5 purchased recently`
      * a time tag, ie: `ordered 3 min ago`
2. The trending products list should be sorted by a heuristic based on at least purchase recency & the number of recent purchases.
   - There is no "right" answer here; we'd like to see your reasoning for any heuristic you choose!
3. Persists data for the above in a database
   - Feel free to use any database technology (Sqlite, MongoDb, Redis) you'd like
   - We want to see how you choose to model the data based on the requirements

> Note: You may use any technology stack to solve this challenge

Additionally, please seek to fit your UI as close as possible to the provided mocks: [Code Challenge Mocks](https://www.figma.com/file/kYoGXQa5CNkCALUmRfB79B/Snackpass-Full-Stack-Code-Challenge?node-id=1%3A21)
> Note: These mocks include some UI elements beyond the 3 requirements outlined above. Consider these good stretch goals to reach for as time allows!

## Submission Requirements
1. Implement a Full-Stack solution including a web server, backend persistence, and associated code.
   - Please fully implement the items listed under 'The Challenge' above
   - For any additional push goal items, feel free to mock out the relevant API calls and/or use psuedocode on the frontend to show how you might complete it with more time
2. Provide a written description of your submission; see [Solution](#Solution) below
3. Please submit within 72 hours from the time you accept invitation. (If circumstances don't allow for this, please let us know early!)

## Practices
### Quality of code
 Please use best practices for writing code and publish to this repo. We want to see how you _really_ code when shipping to production - please use good formatting, in-code documentation, and performant code patterns as much as possible.
### Q & A
 1. Please create an issue and tag @shrimuthu, @aduca98, @nprbst or @seankwalker for questions or review.
 2. **When you are ready to submit, please create an issue and tag @BiancaVGreen, @shrimuthu, and @nprbst.**
### Data
For sample data, you may use [Sample Orders](https://docs.google.com/spreadsheets/d/1xfAjSlBflehOYj4O7I2YkfcBB1b9VgSHg9X-SmRWmsE/edit#gid=280279953), or generate your own.

> Note: Remember to insert your own random timestamps to fit within 48 hours window.

## Solution
_Your solution content goes here..._

Please provide an explanation on
1. How you solved the problem
2. How to setup
3. How to run it

You can be as verbose as you like!

---
Project Overview
---
The steps I will take to build this application:

Backend:
1. Set up an express server with routes that will serve product and order data to the front end. This will be the API

2. Set up a database with MongoDB. I will create three schema:
* Items - the representation of an product included in an order
* Products - the specific item details. Products will contain a field of "orders" will be of type Item
* Orders - the order details including all items

3. Use provided sample data as JSON and seed my db with it

4. Build a route for /trending that takes query params to control sorting mechanics

Frontend:

1. Use Create React To App to bootstrap a React front end.
2. Build the Trending Products page according to the spec in the prompt
3. Use React hooks triggered by handlers to fetch the data from the API and feed the data to the front end components


#### Deployment

**NOTE**: This is where I left the project. The deployed app can be seen at [Harry-Is-Trending-At-Snackpass.herokuapp.com](https://harry-is-trending-at-snackpass.herokuapp.com/)


---
Solution:
---

#### Backend

* Using the Sample Data from Google Sheets became challenging because there were 120,000 records and my sample data had to dynamically be from within a 48 hour window. I resolved to make the the date range much wider when retrieving the sample data and only saving data which fell within the past year. I then only query data within a 2 day window. I ended up not creating 3 collections, but rather using only 1 collection, but transforming the data before saving. The code for this is in `db/seeds.js`

* As I wanted to keep most of the business logic on the backend, it presented a challenge because when you paginate queries from the db, you lose the ability to do a global sort and filter. I had to limit my results returned from the database even more to come up with realistic data. You can find my logic for this in `controllers/product-controller.js`
* I used my own custom helper library `DateGenerator` to randomize and create dates for the sample data. You can find this in `utils/date-generator.js`
* I created a fun logging utility that prints out helpful, fun messages while developing. It also gives context to where the message, or error is coming from. This can be found in `utils/logger.js`

#### Frontend

* I used `create-react-app` as planned to build the frontend. Unfortunately, time was limited as I spent most of my time looking for means to query data in the cleanest and most performant manner. I had to make some concessions on the frontend.
* I did not have an account with Figma, and did not realize that the mocks sent over came with clear styling attributes. The front end I built was primarily from hand-measuring, searching through Google Fonts for something similar, and using a color sync utility to capture as much as I could. Things I got right: Title font is "Nunito", and the primary text font was a hex code match! I actually went with a lighter color, because it looked darker in the browser. The creation of my custom title was done by using 30 text shadows to resemble an outline. This was the better of the two solutions presented on StackOverflow
* I planned to build out all the individual components and modularalize the styles with styled-components or simply, importing individual `.scss` files. I only did a few simple ones: `Button.jsx`, `Title.jsx`, `SearchBar.jsx`, and `SortSelect.jsx`. My plan was to incrementally turned the small UI pieces into components until I went up the tree.


#### To-do:

* Search, Favorite -  I was setting up local state with hooks in the App.js component. My plan is to create handlers and pass them into the components through the next level component. This is a cumbersome process and its not scalable for larger applications, but the data and the size of the application allows for it. Alternatively, I could use the Context API or even set up a couple actions and a reducer in a single Redux Slice
* Loading State and Pagination - When starting the app, it takes a half second the data to be loaded. I am going to implement a simple ternary operator for the `Trending.js` component to check the value of `isLoading`. This is what I call my main container in this application. It is the component I would pass in my '/' route. Currently, there is not __true__ infinite scroll. My plan was to mimic the behavior of fetching more data on the front end, but just trigger a call to get another page of products from the local state. I would also like to 'Pull-to-Refresh' so that the representation of the time elapsed on the trending products would update.

