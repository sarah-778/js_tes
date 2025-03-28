
SECTION 
# js_tes
1. b
2. b 
3. b
4. b
5. b
6. a
7. a
8. c


        section B
    No1
The difference between let, const and var.

let is block scoped,can be reassigned but not redeclared
var is not blocke scoped,can be redeclared and can be reassigned
const is  bloke scoped,can be redeclared and cannot be reassigned

   No2
   javascript objects are datatypes that stores data and its attributes or its property values.
   objects stores data and its propert values while arrays for them they store a large amout of data .

   No3
   the difference between == and ===
==  compares values and allow type conversion while
=== compares  both values and types without type conversion

  No4
  These are actions or occurences that happens in the html file when javascript is loaded to it.

  exanple
  
    <button id="btn1">Click Me 1</button>
    <button id="btn2">Click Me 2</button>

    <script>
        document.getElementById("btn1").onclick = function() {
            document.body.innerHTML += "<p>Button 1 clicked!</p>";
            alert("Button 1 clicked!");
        };

        document.getElementById("btn2").onclick = function() {
            document.body.innerHTML += "<p>Button 2 clicked!</p>";
            alert("Button 2 clicked!");
        };
    </script>



