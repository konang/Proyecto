#Archivo: 20130305024909_create_semanas.rb
#Proyecto: Aplicación Móvil para plataforma Android Training Assistant
#Autor(es): Andrés Rocha González
#Fecha de creación: 04/Marzo/2013
#Fecha de última actualización: 05/Marzo/2013
#Descripción general: Documento para la migracion del esquema de semana a la base de datos
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
# If not, see <http://www.gnu.org/licenses/>


class CreateSemanas < ActiveRecord::Migration
  def self.up
    create_table :semanas do |t|
      t.integer :idconcurso_id
      t.integer :idprob_id
      t.integer :semana
      t.date :fecha_ini
      t.date :fecha_fin

      t.timestamps
    end
  end

  def self.down
    drop_table :semanas
  end
end
