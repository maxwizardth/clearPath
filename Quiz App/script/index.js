
var changePageContent=function(subject,term){
  var studentName =prompt('Enter your fullname')
     localStorage.setItem('StudentName', JSON.stringify(studentName))
   
  var newPage=window.open('','_self')
  newPage.document.write(
  `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>General Mathematics</title>
    <link rel="icon" type="image/x-icon" href="../Quiz Images/Pencil_15px.png">
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
     <link rel="stylesheet" href="../style/taymiyah.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"><\/script>
  <link rel="stylesheet" type="text/css" href="../style/subject.css">
  

  <link href="../style/css_bootstrap.min.css" rel="stylesheet">
  <script src="../style/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="../style/font-awesome.min.css">
  <script src="../style/jquery-3.6.0.js"></script>
<\/head>

<body>
  <div id="myDiv" class="animate-bottom" style="display:block">
    <!--Welcome page-->
    <div class="welcome display-1" >
      <p>welcome ! <br>
          Take the Quiz </p>
      <button class="buttonStart" onclick="swapSubject('${subject}')">Start </button>  
    </div>

    <!--Quiz Container-->
      
</div>
   <hr style="color: white;">
<script type="text/javascript" src="../script/quizElement.js"><\/script>  
<script type="text/javascript" src="../script/${term}Term.js"><\/script>
<script type="text/javascript" src="../script/subjects.js"><\/script>
</body>
</html>

`)
}

//Function to display loader 
var myVar;

function myloader() {
myVar = setTimeout(showPage, 4000);
}

function showPage() {
document.querySelector(".lds-ellipsis").style.display = "none";
document.getElementById("myDiv").style.display = "block";
}

//Scroll up
//Get the button
var mybutton = document.getElementById("myUpBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


// function to create many cards of Classes in home page
function classesCard(classes){
for (var i=0;i< classes.length;i++) {
  var display=i==0?"show":''
  document.getElementById('accordion').innerHTML+=
 `  <div class="card">
      <div class="card-header">
        <a class="btn" data-bs-toggle="collapse" href="#collapse${i}">
        ${classes[i]}<i class="fa fa-glyphicon"></i>
        </a>
      </div>
      <div id="collapse${i}" class="collapse ${display}" data-bs-parent="#accordion">
        <div class="card-body">
          <p>
           <ul>
             <li><a href="${classes[i].toLowerCase()}First/index.html">First Term</a></li>
             <li><a href="${classes[i].toLowerCase()}Second/index.html">Second Term</a></li>
             <li><a href="${classes[i].toLowerCase()}Third/index.html">Third Term</a></li>
           </ul>
            
      </div>
    </div>`}

  }



//Function for review box
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
 
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
