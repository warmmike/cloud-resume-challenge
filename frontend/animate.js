var initDot = document.getElementById("loading");
var loading = setInterval(function() {
    if(initDot.innerHTML.length == 5) {
        initDot.innerHTML = "";
    } else {
        initDot.innerHTML += ".";
    }
}, 250); // Dot Speed

var $loadingMessage = $('#loadingH1');
 
setTimeout(function() {
      clearInterval(loading);
      $loadingMessage.hide();
   }, 1000);

var initProgram = setTimeout(function(){
    var greeting = "Welcome";
    var message = "Starting resume program";
    var $name = "Name: Michael Carman";
    var $alias = "https://github.com/warmmike/"
    var $occupation  = "Platform Engineer";
    var $Expertise  = "AREAS OF EXPERTISE";
    var $Expertise1 = "AWS, GCP, terraform, git, Github Actions, jenkins";
    var $Expertise2 = "Kubernetes, Docker, Helm, ArgoCD, Crossplane";
    var $Expertise3 = "Grafana, Prometheus, CloudWatch, Splunk, Dynatrace, NVIDIA DCGM";
    var $Expertise4 = "Python, Golang, JavaScript, Bash, PowerShell";
    var $Expertise5 = "RESTful, GraphQL, LLM/AI API Design";
    var $ExpertiseAnimation = "SQL, Oracle, RDF Graph Database";
    var $Qualifications = "PROFILE AND KEY QUALIFICATIONS";
    var $Qualifications1 = "I am a passionate technologist who loves puzzles and solving complex business challenges at scale.  My goals are to remain ever curious to evolving ideas and concepts while I build innovative solutions to the most challenging of business problems with a constant focus on cost-consciousness, security and user experience.";
    var $Hobbies = "HOBBIES";
    var $Hobbies1 = "Raspberry PI cluster (Ansible, Kubernetes), ESP32 (C, MQTT message bus), FPGA (Golang, Typescript), Local LLMs";
    var $Hobbies2 = "Kubernetes Resume Challenge https://github.com/warmmike/kubernetes-resume-challenge";
    var $HobbiesAnimation = "Cloud Resume Challenge https://github.com/warmmike/cloud-resume-challenge";
      
   function initStartup(i){
       $("#message").addClass("sign cursor").text(message.substring(0, i));
         if(i < message.length){
             setTimeout(function(){
                 initStartup(i + 1);
             }, 25);   
         }else{
            $('#message').removeClass("cursor");
            var loadingResume = function(){
                  $("#loadingMessage2").show()
                  var dotAlpha = document.getElementById("alpha-loading");
                  var loadingAlpha = setInterval(function() {
                   if(dotAlpha.innerHTML.length == 6) {
                       dotAlpha.innerHTML = "";
                   } else {
                       dotAlpha.innerHTML += ".";
                       setTimeout(function() {
                           clearInterval(loadingAlpha);
                           $("#loadingMessage2").hide();
                        }, 2000);
                   }
               }, 250);  // Dot Speed
            }
            loadingResume();
            function initName(i){
               $("#name").addClass("sign cursor").text($name.substring(0, i));
                  if(i < $name.length){
                     setTimeout(function(){
                        initName(i + 1);   
                     }, 25);
                  }else{
                     $("#name").removeClass("cursor");
                     setTimeout(function() {
                        initOccupation(0);
                     }, 1000);      
                  }
            }
            setTimeout(function() {
               initName(0);
            }, 2500);
         }
         function initOccupation(i){
            $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
                  if(i < $occupation.length){
                     setTimeout(function(){
                        initOccupation(i + 1);   
                     }, 25);
                  }else{
                     $("#occupation").removeClass("cursor");
                     setTimeout(function() {
                        initAlias(0);
                     }, 1000);
                  }
         }
         function initAlias(i){
            $("#alias").addClass("sign cursor").text($alias.substring(0, i));
               if(i < $alias.length){
                  setTimeout(function(){
                     initAlias(i + 1);   
                  }, 25);
               }else{
                  $("#alias").removeClass("cursor");
                  setTimeout(function() {
                    initExpertise(0);
                  }, 1000);
               }
               var img = document.createElement("img");
               img.style.verticalAlign = "bottom";
               img.style.paddingLeft="10px"
               img.src = "./img/logo.png";
               var src = document.getElementById("alias");
               src.appendChild(img);
         }
      function initExpertise(i){
            $('#expertise-span').addClass('fa fa-search');
            $('#expertise').addClass("cursor").text($Expertise.substring(0, i));
               if(i < $Expertise.length){
                  setTimeout(function(){
                     initExpertise(i + 1);  
                  }, 25);
               }else{
                  $('#expertise').removeClass("cursor");
                     setTimeout(function() {
                        initExpertise1(0);
                     }, 1000);
               }
         }
         function initExpertise1(i){
            $('#expertise1').addClass("sign cursor").text($Expertise1.substring(0, i));
               if(i < $Expertise1.length){
                  setTimeout(function(){
                      initExpertise1(i + 1);  
                  }, 25);
               }else{
                  $('#expertise1').removeClass("cursor");
                     setTimeout(function() {
                        initExpertise2(0);
                     }, 1000);
               }
         }
         function initExpertise2(i){
            $('#expertise2').addClass("sign cursor").text($Expertise2.substring(0, i));
               if(i < $Expertise2.length){
                  setTimeout(function(){
                      initExpertise2(i + 1);  
                  }, 25);
               }else{
                  $('#expertise2').removeClass("cursor");
                     setTimeout(function() {
                        initExpertise3(0);
                     }, 1000);
               }
         }
         function initExpertise3(i){
            $('#expertise3').addClass("sign cursor").text($Expertise3.substring(0, i));
               if(i < $Expertise3.length){
                  setTimeout(function(){
                      initExpertise3(i + 1);  
                  }, 25);
               }else{
                  $('#expertise3').removeClass("cursor");
                  setTimeout(function() {
                        initExpertise4(0);
                     }, 1000);
               }
         }
          function initExpertise4(i){
            $('#expertise4').addClass("sign cursor").text($Expertise4.substring(0, i));
               if(i < $Expertise4.length){
                  setTimeout(function(){
                      initExpertise4(i + 1);  
                  }, 25);
               }else{
                  $('#expertise4').removeClass("cursor");
                  setTimeout(function() {
                    initExpertise5(0);
                     }, 1000);
               }
         }
         function initExpertise5(i){
            $('#expertise5').addClass("sign cursor").text($Expertise5.substring(0, i));
               if(i < $Expertise5.length){
                  setTimeout(function(){
                      initExpertise5(i + 1);  
                  }, 25);
               }else{
                  $('#expertise5').removeClass("cursor");
                  setTimeout(function() {
                        initExpertiseAnimation(0);
                     }, 1000);
               }
         }
         function initExpertiseAnimation(i){
            $('#expertise-animation').addClass("sign cursor").text($ExpertiseAnimation.substring(0, i));
               if(i < $ExpertiseAnimation.length){
                  setTimeout(function(){
                      initExpertiseAnimation(i + 1);  
                  }, 25);
               }else{
                  $('#expertise-animation').removeClass("cursor");
                  setTimeout(function() {
                        initQualifications(0);
                     }, 1000);
               }
         }
         function initQualifications(i){
            $('#qualifications-span').addClass('fa fa-bars')
            $('#qualifications').addClass("cursor").text($Qualifications.substring(0, i));
               if(i < $Qualifications.length){
                  setTimeout(function(){
                      initQualifications(i + 1);  
                  }, 25);
               }else{
                  $('#qualifications').removeClass("cursor");
                  setTimeout(function() {
                        initQualifications1(0);
                     }, 1000);
               }
         }
         function initQualifications1(i){
            $('#qualifications1').addClass("sign cursor").text($Qualifications1.substring(0, i));
               if(i < $Qualifications1.length){
                  setTimeout(function(){
                      initQualifications1(i + 1);  
                  }, 25);
               }else{
                  $('#qualifications1').removeClass("cursor");
                  setTimeout(function() {
                        InitHobbies(0);
                     }, 1000);
               }
         }
          function InitHobbies(i){
            $('#hobbies-span').addClass('fa fa-chevron-up');
            $('#hobbies').addClass("cursor").text($Hobbies.substring(0, i));
               if(i < $Hobbies.length){
                  setTimeout(function(){
                      InitHobbies(i + 1);  
                  }, 25);
               }else{
                  $('#hobbies').removeClass("cursor");
                  setTimeout(function() {
                        initHobbies1(0);
                     }, 1000);
               }
         }
         function initHobbies1(i){
            $('#hobbies1').addClass("sign cursor").text($Hobbies1.substring(0, i));
               if(i < $Hobbies1.length){
                  setTimeout(function(){
                      initHobbies1(i + 1);  
                  }, 25);
               }else{
                  $('#hobbies1').removeClass("cursor");
                  setTimeout(function() {
                        initHobbies2(0);
                     }, 1000);
               }
         }
         function initHobbies2(i){
            $('#hobbies2').addClass("sign cursor").text($Hobbies2.substring(0, i));
               if(i < $Hobbies2.length){
                  setTimeout(function(){
                      initHobbies2(i + 1);  
                  }, 25);
               }else{
                  $('#hobbies2').removeClass("cursor");
                  setTimeout(function() {
                    InitHobbiesAnimation(0);
                     }, 1000);
               }
         }
         function InitHobbiesAnimation(i){
            $('#hobbies-animation').addClass("sign cursor").text($HobbiesAnimation.substring(0, i));
               if(i < $HobbiesAnimation.length){
                  setTimeout(function(){
                      InitHobbiesAnimation(i + 1);  
                  }, 25);
               }else{
                  //$('#hobbies-animation').removeClass("cursor");
               }
         }
      }
      
   function initProgramAlpha(i){
       $("#greeting").addClass("cursor").text(greeting.substring(0, i));
         if(i < greeting.length){
             setTimeout(function(){
                 initProgramAlpha(i + 1);
             }, 25);   
         }else{
            $("#greeting").removeClass("cursor");
            initStartup(0);
         }
      }
      initProgramAlpha(0)

}, 1000);

initProgram()
