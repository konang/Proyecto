#Archivo: participante.rb
 #Proyecto: Aplicación Móvil para plataforma Android Training Assistant
 #Autor(es): Andrés Rocha González
 # Fecha de creación: 27/Marzo/2013
 #Fecha de última actualización: 27/Marzo/2013
 #Descripción general: modelacion del controlador de participante
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


class Participante < ActiveRecord::Base
  validates_uniqueness_of :idPart, :message => "Ya existe ese participante"
  validates_each :idPart, :nom do |record, attr, value|
     record.errors.add attr, 'Ingrese un valor' if value.to_s[0] == nil
  end
   validates_numericality_of :mat, :allow_nil => false, :greater_than => 0 , :message => "Debe ser sin A0 y nuerico solamente"
   validates_numericality_of :puntaje, :allow_nil => true, :greater_than => -1 , :message => "Debe ser nuerico solamente"
   validates_numericality_of :pos, :allow_nil => true, :greater_than => -1 , :message => "Debe ser nuerico solamente"


end
