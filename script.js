var num1 = 10;
document.write("Result : " + "<br>");
document.write("The value of a is:" + num1 + "<br>");
document.write("...................................."  + "<br>");
++num1;
document.write("The value of ++a is : " + num1 + "<br>");
document.write("Now The value of a is : " + num1 + "<br>" + "<br>");


document.write("<br>"+ "The value of a++ is : " + num1 + "<br>");
num1++;
document.write("Now The value of a is : " + num1 + "<br>");

--num1;
document.write( "<br>"+"The value of --a is : " + num1 + "<br>");
document.write("Now The value of a is : " + num1 + "<br>");

document.write( "<br>"+"The value of a-- is : " + num1 + "<br>");
num1--;
document.write("Now The value of a is : " + num1 + "<br>");


document.write("<h2>Increment and Decrement</h2>");
var  a = 2;
var b = 1;
document.write("a is : " + a+ "<br>");
document.write("b is : " + b+ "<br>")
// −−a − −−b + ++b + b−−
var result =(--a - --b + ++b + b--);
document.write("Final result is " + result);




document.write("<h2>Greeting Message</h2>");
var userName = prompt("Please! Enter your Name");
alert("Hi! Welcome "+ userName);
document.write("Hello " + userName);


var table = prompt("Enter your Number");
if(table == ""){
    var table = 5;
}

document.write("<h1>multiplication table of " + table + "</h1>")

document.write("<br>" + table + " x 1 =" + table * 1)
document.write("<br>" + table + " x 2 =" + table *2)
document.write("<br>" + table + " x 3 ="   + table *3)
document.write("<br>" + table + " x 4 ="   + table *4)
document.write("<br>" + table + " x 5 ="   + table *5)
document.write("<br>" + table + " x 6 ="   + table *6)
document.write("<br>" + table + " x 7 ="   + table *7)
document.write("<br>" + table + " x 8 ="   + table *8)
document.write("<br>" + table + " x 9 ="   + table *9)
document.write("<br>" + table + " x 10 ="   + table *10)
 

document.write("<h1>Student Marksheet</h1>");

var sub1 = prompt("Enter first Subject Name");
var sub2 = prompt("Enter second Subject Name");
var sub3 = prompt("Enter third Subject Name");

var marks = 100;

var sub1Marks = +prompt("Enter Obtain Marks " + sub1);
var sub2Marks= +prompt("Enter Obtain Marks " + sub2);
var sub3Marks= +prompt("Enter Obtain Marks " + sub3);


 var per1 = +prompt("Enter percentage  " + sub1 );
var per2= +prompt("Enter percentage " + sub2  );
var per3 = +prompt("Enter percentage " + sub3 );

var totalNum = marks * 3;
var ObtainMarks = sub1Marks + sub2Marks + sub3Marks;
var percentage = (ObtainMarks / totalNum) * 100;

document.write("<table>");
document.write("<tr>   <th>Subjects</th> <th>Total marks</th> <th>Obtain marks</th>  <th>Percantege</th> </tr>   ");

   document.write("<tr>" +" <td>"  +sub1+ "</td>" + "<td>" + marks + "</td>" + "<td>" + sub1Marks  + "</td>" +  "<td>" + per1  + "</td>" +"</tr>")
   document.write("<tr>" +" <td>"  +sub2+ "</td>" + "<td>" + marks + "</td>" + "<td>" + sub2Marks  + "</td>"+ "<td>" + per2  + "</td>" +"</tr>")
   document.write("<tr>" +" <td>"  +sub3+ "</td>" + "<td>" + marks + "</td>" + "<td>" + sub3Marks  + "</td>"+ "<td>" + per3  + "</td>" +"</tr>")

document.write("</table><br>");

document.write("Total Marks: " +totalNum+ "<br>");

document.write("Obtained Marks: " + ObtainMarks + "<br>");

document.write("Percentage: " + percentage +"%");

