class Question < ApplicationRecord
  belongs_to :survey
  has_many :choices

  def as_json
    super(include: :posts)
  end
end
