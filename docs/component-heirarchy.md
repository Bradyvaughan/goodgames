HomeContainer
  - HomePage
    - Header
      - Search
    - Sidebar
      - Search
      - LibrariesIndex
        - LibrariesIndexItem
          - LibraryDetail
            - SearchAdd
            - GamesIndex
              - GamesIndexItem
                - PlayedStatus
  - LoggedOutHome
    - OutHeader
      - SignInForm
    - OutBody
      - SignUpForm
      - Search
        - OutSearchResults

GameContainer
  - GameViewPage
    - Header
      - Search
    - GameDetail
      - PlayedStatus
      - ReviewIndex
        - ReviewIndexItem
    - Sidebar
      - ShortGameIndex
        - ShortGameIndexItem

SearchContainer
  - SearchPage
    - SearchForm
    - SearchResults
      - SearchResultItem

EditReviewPage
  - SearchResultItem
  - ReviewForm

ReviewContainer
  - Review Page
    - ReviewDetail



path='/home' component="HomeContainer"
path='/home/LibraryId' component="LibraryDetail"
path='/games' component='GamesIndex'
path='/games/gameId' component="GameContainer"
path='/games/gameId/reviews/reviewId' component="ReviewContainer"
path='/games/gameId/review' component='EditReviewPage'
path='search' component="SearchContainer"
