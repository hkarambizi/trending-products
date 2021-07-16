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

Please provide an explaination on
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

2. Set up a database with MongoDB. I will create two tables: Orders and Products

3. Use provided sample data as JSON and seed my db with it

4. Build a route for /trending that takes query params to control sorting mechanics

Frontend:
1.

---
Steps to Develop:
---

#### Building a Server

* I am going to use an express server to serve up the products list to the page. This backend will be accessible at port 5000.

