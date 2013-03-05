class InscritosController < ApplicationController
  # GET /inscritos
  # GET /inscritos.xml
  def index
    @inscritos = Inscrito.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @inscritos }
    end
  end

  # GET /inscritos/1
  # GET /inscritos/1.xml
  def show
    @inscrito = Inscrito.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @inscrito }
    end
  end

  # GET /inscritos/new
  # GET /inscritos/new.xml
  def new
    @inscrito = Inscrito.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @inscrito }
    end
  end

  # GET /inscritos/1/edit
  def edit
    @inscrito = Inscrito.find(params[:id])
  end

  # POST /inscritos
  # POST /inscritos.xml
  def create
    @inscrito = Inscrito.new(params[:inscrito])

    respond_to do |format|
      if @inscrito.save
        format.html { redirect_to(@inscrito, :notice => 'Inscrito was successfully created.') }
        format.xml  { render :xml => @inscrito, :status => :created, :location => @inscrito }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @inscrito.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /inscritos/1
  # PUT /inscritos/1.xml
  def update
    @inscrito = Inscrito.find(params[:id])

    respond_to do |format|
      if @inscrito.update_attributes(params[:inscrito])
        format.html { redirect_to(@inscrito, :notice => 'Inscrito was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @inscrito.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /inscritos/1
  # DELETE /inscritos/1.xml
  def destroy
    @inscrito = Inscrito.find(params[:id])
    @inscrito.destroy

    respond_to do |format|
      format.html { redirect_to(inscritos_url) }
      format.xml  { head :ok }
    end
  end
end
