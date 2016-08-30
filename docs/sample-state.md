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
    1: {
      title: "Cool game",
      developer: "Brady's Sweet Game Developers",
      description: "Lorem ipsum, yadda yadda",
      publishedOn: "a time",
      playedStatus: "played"
      avgRating: 5,
      CoverImage: img,
      developerId: 1,
      libraryId: 1,
      genres: {
        1: {
          id: 1
          name: "Roguelike"
        }
      }
    }
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
