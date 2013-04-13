#Archivo: problemaresueltos_controller.rb
 #Proyecto: Aplicación Móvil para plataforma Android Training Assistant
 #Autor(es): Andrés Rocha González
 # Fecha de creación: 27/Marzo/2013
 #Fecha de última actualización: 27/Marzo/2013
 #Descripción general: controlador de problemas resueltos
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


class ProblemaresueltosController < ApplicationController
  # GET /problemaresueltos
  # GET /problemaresueltos.xml
  def index
    @problemaresueltos = Problemaresuelto.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @problemaresueltos }
    end
  end

  # GET /problemaresueltos/1
  # GET /problemaresueltos/1.xml
  def show
    @problemaresuelto = Problemaresuelto.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @problemaresuelto }
    end
  end

  # GET /problemaresueltos/new
  # GET /problemaresueltos/new.xml
  def new
    @problemaresuelto = Problemaresuelto.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @problemaresuelto }
    end
  end

  # GET /problemaresueltos/1/edit
  def edit
    @problemaresuelto = Problemaresuelto.find(params[:id])
  end

  # POST /problemaresueltos
  # POST /problemaresueltos.xml
  def create
    @problemaresuelto = Problemaresuelto.new(params[:problemaresuelto])

    respond_to do |format|
      if @problemaresuelto.save
        format.html { redirect_to(@problemaresuelto, :notice => 'Problemaresuelto was successfully created.') }
        format.xml  { render :xml => @problemaresuelto, :status => :created, :location => @problemaresuelto }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @problemaresuelto.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /problemaresueltos/1
  # PUT /problemaresueltos/1.xml
  def update
    @problemaresuelto = Problemaresuelto.find(params[:id])

    respond_to do |format|
      if @problemaresuelto.update_attributes(params[:problemaresuelto])
        format.html { redirect_to(@problemaresuelto, :notice => 'Problemaresuelto was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @problemaresuelto.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /problemaresueltos/1
  # DELETE /problemaresueltos/1.xml
  def destroy
    @problemaresuelto = Problemaresuelto.find(params[:id])
    @problemaresuelto.destroy

    respond_to do |format|
      format.html { redirect_to(problemaresueltos_url) }
      format.xml  { head :ok }
    end
  end
end
