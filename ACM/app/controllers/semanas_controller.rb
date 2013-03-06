#Archivo: semanas_controller.rb
#Proyecto: Aplicación Móvil para plataforma Android Training Assistant
#Autor(es): Andrés Rocha González
#Fecha de creación: 04/Marzo/2013
#Fecha de última actualización: 05/Marzo/2013
#Descripción general: Controlador de semanas de la aplicacion
#Nombre de la institución para cuando el código es propietario. Todos los derechos reservados.
#This file is part of Aplicación Móvil para plataforma Android Training Assistant.
#Aplicación Móvil para plataforma Android Training Assistant is free software: you can redistribute it and/or modify
#it under the terms of the GNU General Public License as published by
#the Free Software Foundation, either version 3 of the License, or
#(at your option) any later version.

# Aplicación Móvil para plataforma Android Training Assistant
# is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with Aplicación Móvil para plataforma Android Training Assistant.
# If not, see <http://www.gnu.org/licenses/>.
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
