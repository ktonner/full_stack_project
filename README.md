# Book Logger

## Description
Book Logger is an application where members can log in to find books by title or author's name. The page will give them a list of books, each book has a small image of the book, title and author's name, some description about the book. They can add their favorite books to the list on their profile. We want to build more features for the application, because of  time scope, so we couldn't add all the features we want where members can search books by genre, trade books, add to different lists. We also want to use Goodreads API to add reviews on the page, and reward members with stickers for how many pages they've read. We'll come back to work on all these functionalities when we have time to make our app unique and professional.
## Technologies
This application runs on Node with express, mysql2, passport, eslint and sequelize packages, uses mySQL in DBeaver for our local database. We use Bulma front end framework for styling and JQuery front end Javascript. We also use Google Books API.
## Deployment 
This full stack application is deployed on Heroku.
We use Heroku's Jawsdb for database.
## Steps
Our first step was to find an API to get data for the app. Once we found Google Books API, we had to get data on our page for when members log in and search for books. We, then, used POST method to save books data to database when users want to add books to their profile list. We had to use GET method to retrieve data from database and put it on the profile page.
## Authors
* Yoom Davidson
* Nardine George
* Kathleen Tonner
* James Pierson