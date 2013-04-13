# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_Manejador_session',
  :secret      => '30c46ce48272263b15d22dfb1c5d57ae13ae0084ac7654c1fa68e3b64a9802de33c4772f4938b89370b5dc1a01543a39d4a02f20a9eed8cb72fd6b5fec2612fa'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
