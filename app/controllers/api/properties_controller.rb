class Api::PropertiesController < ApplicationController
  before_action :set_page

  def index
    render json: Property.page(@page).available
  end

  private
    def set_page
      @page = params[:page] || 1
    end

    def index
  properties = Property.page(@page).available
  total_pages = properties.total_pages
  render json: { properties: properties, total_pages: total_pages }
end

end
