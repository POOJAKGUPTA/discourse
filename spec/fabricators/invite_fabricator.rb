# frozen_string_literal: true

Fabricator(:invite) do
  invited_by(fabricator: :user)
  email 'iceking@ADVENTURETIME.ooo'
  via_email true
end