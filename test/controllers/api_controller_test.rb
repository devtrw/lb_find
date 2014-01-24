require 'test_helper'

class ApiControllerTest < ActionController::TestCase
  test "should get longboarder" do
    get :longboarder
    assert_response :success
  end

end
