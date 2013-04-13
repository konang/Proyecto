require 'test_helper'

class SemanasControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:semanas)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create semana" do
    assert_difference('Semana.count') do
      post :create, :semana => { }
    end

    assert_redirected_to semana_path(assigns(:semana))
  end

  test "should show semana" do
    get :show, :id => semanas(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => semanas(:one).to_param
    assert_response :success
  end

  test "should update semana" do
    put :update, :id => semanas(:one).to_param, :semana => { }
    assert_redirected_to semana_path(assigns(:semana))
  end

  test "should destroy semana" do
    assert_difference('Semana.count', -1) do
      delete :destroy, :id => semanas(:one).to_param
    end

    assert_redirected_to semanas_path
  end
end
