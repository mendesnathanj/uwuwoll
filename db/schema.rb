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

ActiveRecord::Schema.define(version: 2020_03_31_232141) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "animes", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.string "publisher", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
    t.index ["slug"], name: "index_animes_on_slug", unique: true
    t.index ["title"], name: "index_animes_on_title"
  end

  create_table "comments", force: :cascade do |t|
    t.text "content", null: false
    t.boolean "spoiler", default: false, null: false
    t.integer "user_id"
    t.integer "episode_id", null: false
    t.integer "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["episode_id"], name: "index_comments_on_episode_id"
    t.index ["parent_id"], name: "index_comments_on_parent_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "episodes", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.integer "episode_num", null: false
    t.integer "season_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "anime_id", null: false
    t.string "slug"
    t.index ["season_id"], name: "index_episodes_on_season_id"
    t.index ["slug"], name: "index_episodes_on_slug", unique: true
    t.index ["title"], name: "index_episodes_on_title"
  end

  create_table "lists", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_lists_on_user_id", unique: true
  end

  create_table "saved_animes", force: :cascade do |t|
    t.boolean "favorited", default: false, null: false
    t.integer "list_id", null: false
    t.integer "anime_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_id", "anime_id"], name: "index_saved_animes_on_list_id_and_anime_id", unique: true
  end

  create_table "seasons", force: :cascade do |t|
    t.string "title", null: false
    t.integer "anime_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "season_num"
    t.index ["anime_id"], name: "index_seasons_on_anime_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
