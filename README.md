# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# FresherNote

[Good Games live][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.goodgameswp.us

Good Games is a full-stack web application loosely inspired by Goodreads.  The backend is set upw ith Ruby on Rails and a PostgreSQL database.  The frontend is handled with React.js using the Redux framework.

## Features & Implementation

Good Games has 5 primary features:
Games
Libraries
Reviews
Ratings
Search

### Games

Games are stored in the database with columns for `title`, `description`, `release_date`, `cover`, and `platform`.  Games can be displayed in one of two primary ways.  The fist is as a `Games Index Item` component which only displays cover art, title, average rating (to be discussed later), and platform.  If a user wants to know more about a game or otherwise interact with it, they can click on the index item to be taken to the game's second view, the `Game Detail` component, which displays all of the database information on the game, as well as user reviews.

Image of Detail page

There are four kinds types of game indices that users may view.  There is a full index which lists all of the games in the site's database, a user index view which displays all of the games that are in any of the user's libraries, a library detail page which displays all games in the particular library, and a search page which displays all games that match a user inputted query.

Image of Index

Users may not add or edit games to the database, this privilege is reserved for admins.  However they can review games, rate them, or add them to any of their libraries.

### Libraries

Implementing Notebooks started with a notebook table in the database.  The `Notebook` table contains two columns: `title` and `id`.  Additionally, a `notebook_id` column was added to the `Note` table.  

The React component structure for notebooks mirrored that of notes: the `NotebookIndex` component renders a list of `CondensedNotebook`s as subcomponents, along with one `ExpandedNotebook`, kept track of by `NotebookStore.selectedNotebook()`.  

`NotebookIndex` render method:

```javascript
render: function () {
  return ({this.state.notebooks.map(function (notebook) {
    return <CondensedNotebook notebook={notebook} />
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
```

### Tags

As with notebooks, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `note_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying notes can potentially affect `Tag` objects, the `NoteIndex` and the `NotebookIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Note` components.  

![tag screenshot](tagScreenshot.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between FresherNote users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
