# GoodGames

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

GoodGames is a web application inspired by Good Reads built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Games
- [ ] Game Libraries for organizing gamess
- [ ] Reviews
- [ ] Played Status
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: /wireframes
[components]: /component-heirarchy.md
[redux-structure]: /redux-structure.md
[sample-state]: /sample-state.md
[api-endpoints]: /api-endpoints.md
[schema]: /schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Notes Model, API, and components (2 days)

**Objective:** Games can be created, read about, edited and destroyed through the API.

- [ ] `Game` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`GamesController`)
- [ ] JBuilder views for games
- Game components and respective Redux loops
  - [ ] `GamesIndex`
  - [ ] `GameIndexItem`
  - [ ] `GameDetail`
- [ ] Style games components
- [ ] Seed games

### Phase 3: Notebooks (2 day)

**Objective:** Games can be added to or removed from game Libraries that can be created, viewed, edited, and destroyed through the API

- [ ] `Library` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for libraries (`LibrariesController`)
- [ ] JBuilder views for libraries
- [ ] `Played` and `Want to Play` libraries automatically created on user registration
- [ ] Games may be added or removed from libraries
- [ ] Viewing games by library
- [ ] Style library components
- [ ] Seed libraries

### Phase 4: Reviews (1 day)

**Objective:** Users may leave reviews of any game that they have played or are playing. These reviews are connected to games and can be created, read, or destroyed through the API.

- [ ] `Review` model
- [ ] Seed database with a small amount of tet data.
- [ ] CRUD API for reviews (`ReviewsController`)
- [ ] JBuilder views for reviews
- [ ] Reviews may be created or edited through forms.
- [ ] Reviews appear on game view pages
- [ ] Style reviews components
- [ ] Seed reviews

### Phase 5: Genres and Search (2 days)

**Objective:** Games have multiple genres (predetermined)

- [ ] `Genre` model and `GenreMatch` join table
- [ ] Fetching genres for games
- [ ] Searching games by genre, title, and developer
- [ ] Search results can be reordered by genre, developer, average rating, and title
- [ ] Style search & tag components


### Bonus Features (TBD)
- [ ] Developer pages
- [ ] User ratings
- [ ] User created tags
- [ ] Multiple sessions
