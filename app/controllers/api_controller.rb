require 'pp'

class ApiController < ApplicationController
  def longboarder
    render text: {
        longboarders: [
          { location: 'Portland, OR', dicipline: [:downhill], username: 'some_dude_5', age: 25 },
          { location: 'Pheonix, AZ', dicipline: [:downhill, :freeride], username: 'patrike12', age: 23 },
          { location: 'Canada, Montreal', dicipline: [], username: 'willbilly567', age: 12 },
          { location: 'San Jose, California', dicipline: [:freeride], username: 'ihaveachicken', age: 16 },
          { location: 'Sydney, Australia', dicipline: [:dancing], username: 'longboard4laif', age: 32 },
          { location: 'NewYork, NewYork', dicipline: [:cruising], username: 'evanli123', age: 1 },
          { location: '97213', dicipline: [:cruising, :dancing], username: 'pdx_longboarder_420', age: 93 },
          { location: 'Austin, TX', dicipline: [:downhill], username: 'thane-lines', age: 2 },
          { location: 'LosAngeles, CA', dicipline: [], username: 'MrFrodoo', age: 43 },
        ]
    }.to_json
  end

  def users
    render text: User.all.to_json
  end
end
