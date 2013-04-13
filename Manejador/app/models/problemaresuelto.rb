#Archivo: problemaresuelto.rb
 #Proyecto: Aplicación Móvil para plataforma Android Training Assistant
 #Autor(es): Andrés Rocha González
 # Fecha de creación: 27/Marzo/2013
 #Fecha de última actualización: 27/Marzo/2013
 #Descripción general: modelacion del controlador de problemas resueltos
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

class Problemaresuelto < ActiveRecord::Base
  validates_numericality_of :tiempo, :memoria, :tam, :idSubida, :allow_nil => false, :greater_than => -1 , :message => "Debe ser sin A0 y nuerico solamente"
  validates_uniqueness_of :idSubida, :message => "Ya existe ese participante"
  validates_each :estatus, :leng do |record, attr, value|
     record.errors.add attr, 'Ingrese un valor' if value.to_s[0] == nil
  end

end
