class Post < ActiveRecord::Base
    belongs_to :user
    has_many :comments
    before_create :default_values
  
    def default_values
        self.upvotes ||= 0
    end
  
    def as_json(options = {})
        super(options.merge(include: [:user, comments: {include: :user}]))
    end
end
