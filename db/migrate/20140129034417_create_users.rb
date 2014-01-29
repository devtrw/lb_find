class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.int :age
      t.string :location
      t.string :discipline
      t.timestamps
    end
  end
end
