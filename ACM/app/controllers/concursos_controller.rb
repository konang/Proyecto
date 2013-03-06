#Archivo: concrusos_controller.rb
#Proyecto: Aplicación Móvil para plataforma Android Training Assistant
#Autor(es): Andrés Rocha González
#Fecha de creación: 04/Marzo/2013
#Fecha de última actualización: 05/Marzo/2013
#Descripción general: Controlador de concursos de la aplicacion
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

class ConcursosController < ApplicationController
  # GET /concursos
  # GET /concursos.xml
  def index
    @concursos = Concurso.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @concursos }
    end
  end

  # GET /concursos/1
  # GET /concursos/1.xml
  def show
    @concurso = Concurso.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @concurso }
    end
  end

  # GET /concursos/new
  # GET /concursos/new.xml
  def new
    @concurso = Concurso.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @concurso }
    end
  end

  # GET /concursos/1/edit
  def edit
    @concurso = Concurso.find(params[:id])
  end

  # POST /concursos
  # POST /concursos.xml
  def create
    @concurso = Concurso.new(params[:concurso])

    respond_to do |format|
      if @concurso.save
        format.html { redirect_to(@concurso, :notice => 'Concurso was successfully created.') }
        format.xml  { render :xml => @concurso, :status => :created, :location => @concurso }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @concurso.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /concursos/1
  # PUT /concursos/1.xml
  def update
    @concurso = Concurso.find(params[:id])

    respond_to do |format|
      if @concurso.update_attributes(params[:concurso])
        format.html { redirect_to(@concurso, :notice => 'Concurso was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @concurso.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /concursos/1
  # DELETE /concursos/1.xml
  def destroy
    @concurso = Concurso.find(params[:id])
    @concurso.destroy

    respond_to do |format|
      format.html { redirect_to(concursos_url) }
      format.xml  { head :ok }
    end
  end
end
