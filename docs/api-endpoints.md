HTML API
  - GET / (loads the React web app)

JSON API

  Sessions:
    - POST /api/sessions
    - GET /api/sessions
    - DELETE /api/sessions

  Games:
    - POST /api/games (upload new game to database)
    - GET /api/games  (Get list of games)
    - GET /api/games/gameId (get single game details)


  Libraries
    - POST /api/libraries (create new library)
    - GET /api/libraries  (view library index)
    - POST /api/library/libraryId (add game to library)
    - PATCH /api/libraries/libraryId  (remove game from library)
    - DELETE /api/libraries/libraryId  (delete library wholesale)
    - GET /api/libraries/libraryId  (view library detail)

  Reviews
    - POST  /api/reviews (create new review)
    - GET  /api/reviews (view review index)
    - GET  /api/reviews/reviewId (view a single review)
    - PATCH  /api/reviews/reviewId (change a review)
    - DELETE  /api/reviews/reviewId (delete a review)
