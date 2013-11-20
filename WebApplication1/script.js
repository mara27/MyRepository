var angajati = new Array();

angajati[0] = new Object();
angajati[0].nume = "Ababei";
angajati[0].prenume = "Alina";
angajati[0].varsta = 20;
angajati[0].data_angajarii = new Date(2000,06,23);
angajati[0].departament = "Vanzari";

angajati[1] = new Object();
angajati[1].nume = "Balan";
angajati[1].prenume = "George";
angajati[1].varsta = 26;
angajati[1].data_angajarii = new Date(2000,02,05);
angajati[1].departament = "Departament_2";

angajati[2] = new Object();
angajati[2].nume = "Cercel";
angajati[2].prenume = "Ana";
angajati[2].varsta = 30;
angajati[2].data_angajarii = new Date(1999,11,05);
angajati[2].departament = "Departament_2";

function creareTabel(){

document.writeln('<table border="1" align="center">');
document.writeln("<thead>");
document.writeln("<tr>");
document.writeln("<td> Nume </td>");
document.writeln("<td> Prenume </td>");
document.writeln("<td> Varsta </td>");
document.writeln("<td> Data angajarii </td>");
document.writeln("<td> Departament </td>");
document.writeln("</tr>");
document.writeln("</thead>");
document.writeln("<tbody id="bodyjs">");

for( var i=0; i<angajati.length; i++)
{
document.writeln("<tr>");
document.writeln('<td>' + angajati[i].nume +'</td>');
document.writeln('<td>' + angajati[i].prenume + '</td>');
document.writeln('<td>' + angajati[i].varsta + '</td>');
document.writeln('<td>' + angajati[i].data_angajarii.toLocaleDateString() + '</td>');
document.writeln('<td>' + angajati[i].departament + '</td>');
document.writeln('</tr>');
}
document.writeln("</tbody>");
document.writeln("</table>");
}

function newLine(){
var table=document.getElementById("bodyjs");
var row=table.insertRow(-1);
}