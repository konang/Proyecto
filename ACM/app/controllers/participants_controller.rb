#Archivo: participants_controller.rb
#Proyecto: Aplicación Móvil para plataforma Android Training Assistant
#Autor(es): Andrés Rocha González
#Fecha de creación: 04/Marzo/2013
#Fecha de última actualización: 05/Marzo/2013
#Descripción general: Controlador de participantes de la aplicacion
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

class ParticipantsController < ApplicationController
  # GET /participants
  # GET /participants.xml
  def index
    @participants = Participant.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @participants }
    end
  end

  # GET /participants/1
  # GET /participants/1.xml
  def show
    @participant = Participant.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @participant }
    end
  end

  # GET /participants/new
  # GET /participants/new.xml
  def new
    @participant = Participant.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @participant }
    end
  end

  # GET /participants/1/edit
  def edit
    @participant = Participant.find(params[:id])
  end

  # POST /participants
  # POST /participants.xml
  def create
    @participant = Participant.new(params[:participant])

    respond_to do |format|
      if @participant.save
        format.html { redirect_to(@participant, :notice => 'Participant was successfully created.') }
        format.xml  { render :xml => @participant, :status => :created, :location => @participant }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @participant.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /participants/1
  # PUT /participants/1.xml
  def update
    @participant = Participant.find(params[:id])

    respond_to do |format|
      if @participant.update_attributes(params[:participant])
        format.html { redirect_to(@participant, :notice => 'Participant was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @participant.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /participants/1
  # DELETE /participants/1.xml
  def destroy
    @participant = Participant.find(params[:id])
    @participant.destroy

    respond_to do |format|
      format.html { redirect_to(participants_url) }
      format.xml  { head :ok }
    end
  end
end
