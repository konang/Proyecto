class SemanasController < ApplicationController
  # GET /semanas
  # GET /semanas.xml
  def index
    @semanas = Semana.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @semanas }
    end
  end

  # GET /semanas/1
  # GET /semanas/1.xml
  def show
    @semana = Semana.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @semana }
    end
  end

  # GET /semanas/new
  # GET /semanas/new.xml
  def new
    @semana = Semana.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @semana }
    end
  end

  # GET /semanas/1/edit
  def edit
    @semana = Semana.find(params[:id])
  end

  # POST /semanas
  # POST /semanas.xml
  def create
    @semana = Semana.new(params[:semana])

    respond_to do |format|
      if @semana.save
        format.html { redirect_to(@semana, :notice => 'Semana was successfully created.') }
        format.xml  { render :xml => @semana, :status => :created, :location => @semana }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @semana.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /semanas/1
  # PUT /semanas/1.xml
  def update
    @semana = Semana.find(params[:id])

    respond_to do |format|
      if @semana.update_attributes(params[:semana])
        format.html { redirect_to(@semana, :notice => 'Semana was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @semana.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /semanas/1
  # DELETE /semanas/1.xml
  def destroy
    @semana = Semana.find(params[:id])
    @semana.destroy

    respond_to do |format|
      format.html { redirect_to(semanas_url) }
      format.xml  { head :ok }
    end
  end
end
