#Archivo: problemas.py
#Proyecto: Aplicacion Movil para plataforma Android Training Assistant
#Autor(es): Andres Rocha Gonzalez, Carlos Rocha
#Fecha de creacion: 11/Abril/2013
#Fecha de ultima actualizacion: 12/Abril/2013
#Descripcion general: Script para sacar datos de la pagina del Juez en linea y ingresarlos a la base de datos.
#ITESM. Todos los derechos reservados.
#This file is part of Aplicacion Movil para plataforma Android Training Assistant.
#Aplicacion Movil para plataforma Android Training Assistant is free software: you can redistribute it and/or modify
#it under the terms of the GNU General Public License as published by
#the Free Software Foundation, either version 3 of the License, or
#(at your option) any later version.

# Aplicacion Movil para plataforma Android Training Assistant
# is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with Aplicacion Movil para plataforma Android Training Assistant.
# If not, see <http://www.gnu.org/licenses/>.

from urllib import urlopen
from bs4 import BeautifulSoup
import re
import MySQLdb
import time
import parser
import numbers

# Abre coneccion con la base de datos
db = MySQLdb.connect("localhost","root","","prueba" )

# Prepara los objetos cursor
cursor = db.cursor()
cursorinsert = db.cursor()

sigue = True
while sigue:	#valida que lo que se introdujo solo sea valor numerico
	var = raw_input("Que semana quieres checar(NUMERICO) ")
	try:
		sigue=False
		val=float(var)
	except ValueError:
		sigue=True
		print "Solo valores numericos"

# Prepara los queries para sacar los datos necesarios para hacer la busqueda
sql = """SELECT idPart FROM participantes"""
sql2= "SELECT idProb FROM problemas, semanas WHERE semanas.idSemana=problemas.idSemana_id and semanas.idSemana="+var

cursor.execute(sql)
results = cursor.fetchall()
cursor.execute(sql2)
results2=cursor.fetchall()

#Ya con los datos necesarios se hacen los ciclos para buscar los datos en la pagina del
for row2 in results2:
	problema = str(row2[0])
	i = 0
	for row in results:
		nombres=row[0]
		#Abre y guarda la informacion de la pagina con los datos que saco de la base de datos
		webpage = urlopen("http://coj.uci.cu/24h/status.xhtml?username="+nombres+"&abb="+problema+"").read()
		
		
		webpage = ''.join(webpage.splitlines())
		soup = BeautifulSoup(webpage)
		#Utiliza BeautifulSoup para sacar la informacion dentro de la tabla de resultados
		row='';
		table = soup.find('table', id='submission')
		accepted = table.tbody.find('label', class_='AC')
		if accepted:
			row = accepted.parent.parent  # Saca la liea con la informacion

		if row == "":#En Caso de que el participante no tenga el problema resuelto avisa que no lo realizo
			print "El participante "+nombres+" no logro completar el problema "+ str(problema)+ " y no se agrego"
		else:#Si el usuario si realizo el problema saca los datos de el html y los ingresa a la base de datos
			td = row.contents
			idsubida = td[0].text.strip().encode("ascii" , "ignore")
			fecha = td[1].text.strip().encode("ascii" , "ignore")
			fecha2=time.strptime(fecha, "%Y-%m-%d %H:%M:%S") 
			sql8="SELECT idSemana_id FROM problemas WHERE idProb="+problema
			cursorinsert.execute(sql8)
			idSemana= cursorinsert.fetchall()[0][0]
			sql9="SELECT fecha_fin FROM semanas WHERE idSemana='"+str(idSemana)+"'"
			cursorinsert.execute(sql9)
			fecha_fin = cursorinsert.fetchall()[0][0]
			fecha_fin = time.strptime(str(fecha_fin), "%Y-%m-%d")
			sql9="SELECT fecha_ini FROM semanas WHERE idSemana='"+str(idSemana)+"'"
			cursorinsert.execute(sql9)
			fecha_ini = cursorinsert.fetchall()[0][0]
			fecha_ini = time.strptime(str(fecha_ini), "%Y-%m-%d") 			
			
			if fecha2 <= fecha_fin and fecha2>=fecha_ini:#checa que el problema resuelto se encuentre dentro de la fecha de aceptacion y de ser lo asi continua
				tiempo = td[5].text.strip().encode("ascii" , "ignore")
				memoria = td[6].text.strip().encode("ascii" , "ignore")
				tam = td[7].text.strip().encode("ascii" , "ignore")
				leng = td[8].text.strip().encode("ascii" , "ignore")
				sql3="INSERT INTO problemaresueltos VALUES (NULL,"+idsubida+" , '"+fecha+"' , 'Accepted' , "+tiempo+", "+memoria+", "+tam+", '"+leng+"', '"+nombres+"', "+problema+", NULL, NULL)"
				cursorinsert.execute(sql3)
				sql4="SELECT valor FROM problemas WHERE idProb="+problema
				cursorinsert.execute(sql4)
				valorproblema=cursorinsert.fetchall()[0][0]
				sql5="SELECT puntaje FROM participantes WHERE idPart='"+nombres+"'"
				cursorinsert.execute(sql5)
				puntaje=valorproblema+cursorinsert.fetchall()[0][0]
				sql6="UPDATE  participantes SET  puntaje = "+str(puntaje)+" WHERE  idPart='"+nombres+"'"
				cursorinsert.execute(sql6)
				sql7="Select idPart, pos FROM participantes Order BY puntaje"
				print td[0].text.strip().encode("ascii" , "ignore"), nombres
				
		i=i+1
sql7="Select idPart FROM participantes Order BY puntaje DESC" #actualiza la base de datos ordenando a los usuarios por su ranking
cursorinsert.execute(sql7)
ordenar=cursorinsert.fetchall()
j=0
for rows in ordenar:
	name = rows[0]
	sql7="UPDATE  participantes SET  pos = "+str(j+1)+" WHERE  idPart='"+name+"'"
	cursorinsert.execute(sql7)
	j=j+1
db.commit()
		
		
		

