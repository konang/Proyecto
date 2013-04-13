#Archivo: problemas_controller.rb
 #Proyecto: Aplicación Móvil para plataforma Android Training Assistant
 #Autor(es): Andrés Rocha González
 # Fecha de creación: 27/Marzo/2013
 #Fecha de última actualización: 27/Marzo/2013
 #Descripción general: controlador de problemas
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


class ProblemasController < ApplicationController
  # GET /problemas
  # GET /problemas.xml
  def index
    @problemas = Problema.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @problemas }
    end
  end

  # GET /problemas/1
  # GET /problemas/1.xml
  def show
    @problema = Problema.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @problema }
    end
  end

  # GET /problemas/new
  # GET /problemas/new.xml
  def new
    @problema = Problema.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @problema }
    end
  end

  # GET /problemas/1/edit
  def edit
    @problema = Problema.find(params[:id])
  end

  # POST /problemas
  # POST /problemas.xml
  def create
    @problema = Problema.new(params[:problema])

    respond_to do |format|
      if @problema.save
        format.html { redirect_to(@problema, :notice => 'Problema was successfully created.') }
        format.xml  { render :xml => @problema, :status => :created, :location => @problema }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @problema.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /problemas/1
  # PUT /problemas/1.xml
  def update
    @problema = Problema.find(params[:id])

    respond_to do |format|
      if @problema.update_attributes(params[:problema])
        format.html { redirect_to(@problema, :notice => 'Problema was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @problema.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /problemas/1
  # DELETE /problemas/1.xml
  def destroy
    @problema = Problema.find(params[:id])
    @problema.destroy

    respond_to do |format|
      format.html { redirect_to(problemas_url) }
      format.xml  { head :ok }
    end
  end
end
