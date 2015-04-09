class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :title
      t.string :teacher
      t.string :classroom
      t.string :time
      t.string :credit

      t.timestamps null: false
    end
  end
end
