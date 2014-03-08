class ApiController < ApplicationController
  def longboarder
    render text: {
        longboarders: [
          { location: 'Portland, OR', discipline: [:downhill], username: 'some_dude_5', age: 25 },
          { location: 'Portland, OR', discipline: [:downhill], username: 'some_dude_4', age: 24 },
          { location: 'Portland, OR', discipline: [:downhill], username: 'some_dude_3', age: 23 },
          { location: 'Portland, OR', discipline: [:downhill], username: 'some_dude_2', age: 22 },
          { location: 'Pheonix, AZ', discipline: [:downhill, :freeride], username: 'patrike12', age: 23 },
          { location: 'Canada, Montreal', discipline: [], username: 'willbilly567', age: 12 },
          { location: 'San Jose, California', discipline: [:freeride], username: 'ihaveachicken', age: 16 },
          { location: 'Sydney, Australia', discipline: [:dancing], username: 'longboard4laif', age: 32 },
          { location: 'NewYork, NewYork', discipline: [:cruising], username: 'evanli123', age: 1 },
          { location: '97213', discipline: [:cruising, :dancing], username: 'pdx_longboarder_420', age: 93 },
          { location: 'Austin, TX', discipline: [:downhill], username: 'thane-lines', age: 2 },
          { location: 'LosAngeles, CA', discipline: [], username: 'MrFrodoo', age: 43 },
        ]
    }.to_json
  end
end
