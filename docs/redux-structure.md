## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `OutHeader` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Header` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Game Cycles

### Games API Request Actions

* `fetchAllGames`
  0. invoked from `GamesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/games` is called.
  0. `receiveAllGames` is set as the success callback.

* `addNote`
  0. invoked from add game to library button `onClick`
  0. `POST /api/libraries/libraryId` is called.
  0. `receiveSingleGame` is set as the success callback.

* `fetchSingleGame`
  0. invoked from `NoteDetail` `didMount`/`willReceiveProps`
  0. `GET /api/games/:id` is called.
  0. `receiveSingleGame` is set as the success callback.

* `removeGame`
  0. invoked from remove game button `onClick`
  0. `DELETE /api/libraries/libraryId/games/:id` is called.
  0. `removeGame` is set as the success callback.

### Games API Response Actions

* `receiveAllGames`
  0. invoked from an API callback
  0. the `GameReducer` updates `games` in the application's state.

* `receiveSingleGame`
  0. invoked from an API callback
  0. the `GameReducer` updates `games[id]` in the application's state.

* `removeGame`
  0. invoked from an API callback
  0. the `GameReducer` removes `games[id]` from the application's state.

## Library Cycles

### Libraries API Request Actions

* `fetchAllLibraries`
  0. invoked from `LibrariesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/libraries` is called.
  0. `receiveAllLibraries` is set as the success callback.

* `createLibrary`
  0. invoked from new library button `onClick`
  0. `POST /api/libraries` is called.
  0. `receiveSingleLibrary` is set as the callback.

* `fetchSingleLibrary`
  0. invoked from `LibraryDetail` `didMount`/`willReceiveProps`
  0. `GET /api/libraries/:id` is called.
  0. `receiveSingleLibrary` is set as the success callback.

* `updateLibrary`
  0. invoked from add game or remove game button `onSubmit`
  0. `POST /api/libraries` is called.
  0. `receiveSingleLibrary` is set as the success callback.

* `destroyLibrary`
  0. invoked from delete library button `onClick`
  0. `DELETE /api/libraries/:id` is called.
  0. `removeLibrary` is set as the success callback.

### Libraries API Response Actions

* `receiveAllLibraries`
  0. invoked from an API callback.
  0. The `Library` reducer updates `libraries` in the application's state.

* `receiveSingleLibrary`
  0. invoked from an API callback.
  0. The `Library` reducer updates `libraries[id]` in the application's state.

* `removeLibrary`
  0. invoked from an API callback.
  0. The `Library` reducer removes `libraries[id]` from the application's state.

## Review Cycles

### Review API Request Actions

* `fetchAllReviews`
  0. invoked from `ReviewsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/games/gameId/reviews` is called.
  0. `receiveAllReviews` is set as the success callback.

* `addNote`
  0. invoked from save button `onClick`
  0. `POST /api/games/gameId/reviews` is called.
  0. `receiveSingleReview` is set as the success callback.

* `fetchSingleReview`
  0. invoked from `ReviewDetail` `didMount`/`willReceiveProps`
  0. `GET /api/games/gameId/reviews/:id` is called.
  0. `receiveSingleReview` is set as the success callback.

* `removeReview`
  0. invoked from delete review button `onClick`
  0. `DELETE /api/games/gameId/reviews/:id` is called.
  0. `removeReview` is set as the success callback.

### Reviews API Response Actions

* `receiveAllReviews`
  0. invoked from an API callback
  0. the `ReviewReducer` updates `reveiws` in the application's state.

* `receiveSingleReview`
  0. invoked from an API callback
  0. the `ReviewReducer` updates `reviews[id]` in the application's state.

* `removeReview`
  0. invoked from an API callback
  0. the `ReviewReducer` removes `reviews[id]` from the application's state.
