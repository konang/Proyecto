require 'test_helper'

class InscritosControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:inscritos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create inscrito" do
    assert_difference('Inscrito.count') do
      post :create, :inscrito => { }
    end

    assert_redirected_to inscrito_path(assigns(:inscrito))
  end

  test "should show inscrito" do
    get :show, :id => inscritos(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => inscritos(:one).to_param
    assert_response :success
  end

  test "should update inscrito" do
    put :update, :id => inscritos(:one).to_param, :inscrito => { }
    assert_redirected_to inscrito_path(assigns(:inscrito))
  end

  test "should destroy inscrito" do
    assert_difference('Inscrito.count', -1) do
      delete :destroy, :id => inscritos(:one).to_param
    end

    assert_redirected_to inscritos_path
  end
end
