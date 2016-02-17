class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :post
  before_create :default_values
  
  def default_values
    self.upvotes ||= 0
  end
  
  def as_json(options = {})
    super(options.merge(include: :user))
  end
end
