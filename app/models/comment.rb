class Comment < ActiveRecord::Base
  belongs_to :post
  before_create :default_values
  
  def default_values
    self.upvotes ||= 0
  end
end
