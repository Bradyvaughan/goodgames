# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160907203738) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.string   "title",                                          null: false
    t.text     "description",  default: "Description not found"
    t.string   "release_date",                                   null: false
    t.string   "platform",                                       null: false
    t.string   "cover",                                          null: false
    t.datetime "created_at",                                     null: false
    t.datetime "updated_at",                                     null: false
  end

  create_table "libraries", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "name"], name: "index_libraries_on_user_id_and_name", unique: true, using: :btree
  end

  create_table "library_links", force: :cascade do |t|
    t.integer  "game_id",    null: false
    t.integer  "library_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id", "library_id"], name: "index_library_links_on_game_id_and_library_id", unique: true, using: :btree
  end

  create_table "ratings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "game_id",    null: false
    t.integer  "num",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_ratings_on_game_id", using: :btree
    t.index ["user_id", "game_id"], name: "index_ratings_on_user_id_and_game_id", unique: true, using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.string   "title",      null: false
    t.text     "body",       null: false
    t.integer  "user_id",    null: false
    t.integer  "game_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "game_id"], name: "index_reviews_on_user_id_and_game_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "email",           null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
