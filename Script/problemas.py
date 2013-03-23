#Archivo: problemas.py
#Proyecto: Aplicación Móvil para plataforma Android Training Assistant
#Autor(es): Andrés Rocha González
#Fecha de creación: 04/Marzo/2013
#Fecha de última actualización: 05/Marzo/2013
#Descripción general: Scanner de la pagina del COJ para actualizar la base de datos
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



from bs4 import BeautifulSoup
import urllib,re
webpage = urllib.urlopen("http://coj.uci.cu/user/useraccount.xhtml?uid=Diego1149").read()

patProb = re.compile('<a href="/24h/status.xhtml?username=Diego1149&abb=(.*)" title="">')

findProb = re.findall("<b>",webpage)

listIterator = []

listIterator[:] = range(1,1)

for i in listIterator:
	print findProb[i]
	print "\n"