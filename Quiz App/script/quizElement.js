
function quizELement(){
  document.getElementById('myDiv').innerHTML+=`
 <div class="mt-3 body subject container" 
         style="background:#063c60;padding:9px;">  
    <h2 class="text-center" id="currentSubject">Mathematics-ITMC CBT</h2>
      <div class="">
        <h6 class="" id="time"><strong>
          Time left:
          <input class="text-center" type="Number"  readonly class="" id="minute" value="40" readonly>:
          <input class="text-center" type="number" readonly class="" id="seconds" value="00" readonly> 
          </strong>
        </h6>

        <div class="progress">
          <div class="progress-bar" style="width:100%"></div>
        </div>

        <h5 id="questNo">Question 1</h5>        
        <div class="container pt-3 questions" id="questions">
        <form id="quest">
          <p class="loading">
           <span class="spinner-border spinner-border-sm"></span>Loading..
          </p>
        </form>
        </div>
      </div>
      <div class="container">
         <button class="btn btn-secondary btn-sm" onclick="previous()">  
           Previous</button>
         <button class="btn btn-secondary btn-sm" onclick="nextQuest()">Next</button>
   
         <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" id="submitbtn" data-bs-target="#myModal" onclick="show_wrong()"> Submit
         </button>
  <!-- The Modal -->
        <div class="modal" id="myModal">
         <div class="modal-dialog modal-sm">
          <div class="modal-content text-center">
      
      <!-- Modal Header -->
           <div class="modal-header text-center">
            <h4 class="modal-title" id="modalTitle">YOUR RESULT</h4>
            <button type="button" class="btn-close btn-danger" data-bs-dismiss="modal"></button>
          </div>

          <!-- Modal body -->
         <div class="modal-body" style="color:green;display:block" >
           <h3 class="text-center">Congratulations!!</h3>
           <p>You have completed the quiz</p>
           <hr>
           <h6 class="text-center">Result</h6>
           <hr>
           <h4 id="yourScore"></h4>
         </div>
     
      <!-- Modal footer -->
         <div class="modal-footer">
          <div id="Again"><a href="" onclick="location.reload()">Take Quiz Again</a></div>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
         </div>
        </div>
       </div>
     </div>
    </div>

    <div>
      <p class="text-center"><a href="index.html">Change Subject</a>
      </p>
    </div>
    <ul class="pagination row" id="goto"></ul>
  </div>

  `

  }
  quizELement()