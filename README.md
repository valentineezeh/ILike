# I-Like

## Technologies Used

- Backend: Node/Express
- MongoDB, Mongoose
- Libraries: Es6, eslint, express, babel, typescript
- Frontend: React/Redux/Bootstrap/Axios
- AWS (For deployment)

## To Install

- Download or clone
- Open terminal inside the root directory of clone folder
- Type `npm install` to install all dependencies for the backend and frontend respectively
- npm run `build:live` to run development environment
- npm `start`to run the react application

## Features

- Create a mongo db with name I-Like
- Create movie
- Get all movie list
- Like a movie by clicking on the like button this increase the like number by 1

## Deployed Links
- Backend Link: http://18.130.163.40:7000/api
- Frontend Link: http://18.130.163.40:3000/

## API Endpoints

| Endpoint                                             | Functionality                      |
| ---------------------------------------------------- | ---------------------------------- |
| POST /api/add-movie                                  | Create Movie                       |
| PATCH /api/movie/\<movieId>                          | Like a Movie                       |
| GET /movies                                          | Get all movies                     |

## Bonus Challenge
### How can you improve the feature to make it more resilient against abuse/exploitation?
- Authentication:
I can improve this feature by adding authentication. Therefore making this feature only available to a user who has an encrypted token coming with its request. This will ensure that only authenticated user can access this feature which will make it more resilient against abuse/exploitation.
- User Validation:
Furthermore, I will implement a check that always ensures that a user is only entitled to like a movie only once I will do this by implementing a Set using Redis that stores the userId and the movieId liked by that user and always run a check to see if the user already like that movie before registering or adding the user like for that particular movie in the parent DB. In this way, the feature will be more resilient against abuse/exploitation.

### How can you improve the feature to make it scale to millions of users and perform without issues?
- Case 1: A million concurrent users clicking the button at the same time
- Case 2: A million concurrent users requesting the article's like count at the same time
### Answer
- Caching:
I will have instances that can store likes in a local cache (one cache per instance) and bulk them up for insertion into the DB. I will implement the cache in such a way that it flushes to the DB every 30secs by implementing a Cron job and I will have a similar setup outbound, for requesting likes, DB would be hit only if edge caches don’t have a cache for likes for that item and then they’d cache it.

- Vertical Scaling and Horizontal Scaling: 
Furthermore, this feature can be improved by adding resources to our existing server or to replace it with another powerful server. This upgrade will enable the server to accommodate more users clicking the like button also I will set up a fault-tolerant infrastructure by setting up multiple servers that host the same application so that if any of the servers go down, I still have other servers running. This now brings us to Horizontal scaling.

- Replication:
When we have over a million user concurrently hitting the like button, there is a tendency for DB failure, how I will solve it is by having a replication which is making automatic copies of the parent DB where I would read data from and write to one and more child DB which is connected to the parent by a network. So whenever the parent DB pass out, one of the children would get promoted to be the Parent DB for that duration of time.

- Load Balancing:
I will add a load balancer that evenly distributes the user actions across the servers. For this, I can implement a round-robin method which sends each request to the server on a cyclical basis

## AUTHOR
[Valentine Ezeh](https://github.com/valentineezeh/ILike)