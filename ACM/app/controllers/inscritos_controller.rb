#Archivo: inscritos_controller.rb
#Proyecto: Aplicación Móvil para plataforma Android Training Assistant
#Autor(es): Andrés Rocha González
#Fecha de creación: 04/Marzo/2013
#Fecha de última actualización: 05/Marzo/2013
#Descripción general: Controlador de inscritos de la aplicacion
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
