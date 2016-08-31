```json
{
  session: {
    currentUser:{
      username: "Brady"
      id: 1,
    }
    errors: []
  },
  forms: {
    EditReview: {errors: ["Review can't be blank!"]}
  },
  games: {
    games: {
      1: {
        title: "Cool game",
        description: "Lorem ipsum, yadda yadda",
        publishedOn: "a time",
        playedStatus: "played"
        avgRating: 5,
        CoverImage: img
      }
    },
    errors: []
  },
  libraries: {
    1: {
      title: "permadeath",
      userId: 1,
      description: "is cool"
    }
  },
  reviews: {
    1: {
      gameId: 1
      userId: 1
      body: "lorem ipsum"
      tagline: "is good"
    }
  }
}
```
