require 'test_helper'

class ConcursosControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:concursos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create concurso" do
    assert_difference('Concurso.count') do
      post :create, :concurso => { }
    end

    assert_redirected_to concurso_path(assigns(:concurso))
  end

  test "should show concurso" do
    get :show, :id => concursos(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => concursos(:one).to_param
    assert_response :success
  end

  test "should update concurso" do
    put :update, :id => concursos(:one).to_param, :concurso => { }
    assert_redirected_to concurso_path(assigns(:concurso))
  end

  test "should destroy concurso" do
    assert_difference('Concurso.count', -1) do
      delete :destroy, :id => concursos(:one).to_param
    end

    assert_redirected_to concursos_path
  end
end
