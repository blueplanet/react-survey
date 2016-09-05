class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :caption
      t.belongs_to :survey, foreign_key: true

      t.timestamps
    end
  end
end
