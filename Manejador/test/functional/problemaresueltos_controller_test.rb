require 'test_helper'

class ProblemaresueltosControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:problemaresueltos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create problemaresuelto" do
    assert_difference('Problemaresuelto.count') do
      post :create, :problemaresuelto => { }
    end

    assert_redirected_to problemaresuelto_path(assigns(:problemaresuelto))
  end

  test "should show problemaresuelto" do
    get :show, :id => problemaresueltos(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => problemaresueltos(:one).to_param
    assert_response :success
  end

  test "should update problemaresuelto" do
    put :update, :id => problemaresueltos(:one).to_param, :problemaresuelto => { }
    assert_redirected_to problemaresuelto_path(assigns(:problemaresuelto))
  end

  test "should destroy problemaresuelto" do
    assert_difference('Problemaresuelto.count', -1) do
      delete :destroy, :id => problemaresueltos(:one).to_param
    end

    assert_redirected_to problemaresueltos_path
  end
end
