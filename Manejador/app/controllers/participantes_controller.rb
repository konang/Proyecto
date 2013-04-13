#Archivo: participantes_controller.rb
 #Proyecto: Aplicación Móvil para plataforma Android Training Assistant
 #Autor(es): Andrés Rocha González
 # Fecha de creación: 27/Marzo/2013
 #Fecha de última actualización: 27/Marzo/2013
 #Descripción general: controlador de participantes
 #ITESM de Monterrey. Todos los derechos reservados.
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
 # If not, see <http://www.gnu.org/licenses/>.*/
class ParticipantesController < ApplicationController
  # GET /participantes
  # GET /participantes.xml
  def index
    @participantes = Participante.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @participantes }
    end
  end

  # GET /participantes/1
  # GET /participantes/1.xml
  def show
    @participante = Participante.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @participante }
    end
  end

  # GET /participantes/new
  # GET /participantes/new.xml
  def new
    @participante = Participante.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @participante }
    end
  end

  # GET /participantes/1/edit
  def edit
    @participante = Participante.find(params[:id])
  end

  # POST /participantes
  # POST /participantes.xml
  def create
    @participante = Participante.new(params[:participante])

    respond_to do |format|
      if @participante.save
        format.html { redirect_to(@participante, :notice => 'Participante was successfully created.') }
        format.xml  { render :xml => @participante, :status => :created, :location => @participante }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @participante.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /participantes/1
  # PUT /participantes/1.xml
  def update
    @participante = Participante.find(params[:id])

    respond_to do |format|
      if @participante.update_attributes(params[:participante])
        format.html { redirect_to(@participante, :notice => 'Participante was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @participante.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /participantes/1
  # DELETE /participantes/1.xml
  def destroy
    @participante = Participante.find(params[:id])
    @participante.destroy

    respond_to do |format|
      format.html { redirect_to(participantes_url) }
      format.xml  { head :ok }
    end
  end
end
