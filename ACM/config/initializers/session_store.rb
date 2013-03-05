# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_ACM_session',
  :secret      => 'bf2a433b3f6fc1f24d95a173e7f20ba369a648278ceaff94cedb36e4387fb79e38f83ab9b4c363a8433296322f25c78670434cd1ba17fa2be7946a6a5d3f0eed'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
