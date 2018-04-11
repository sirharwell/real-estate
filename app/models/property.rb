class Property < ApplicationRecord
  belongs_to :agent
  has_one :address

  #Property.available
  def self.available
    select('
              properties.id, price, beds, baths, sq_ft,
              ad.city, ad.state, ad.street,
              a.first_name, a.last_name, a.email, a.id AS agent_id')
      .joins('INNER JOIN agents a ON a.id = properties.agnet_id
              INNER JOIN addresses ad on ad.property_id = properties.id')
      .where('properties.sold <> TRUE')
      .order('a.id')
    end
end
