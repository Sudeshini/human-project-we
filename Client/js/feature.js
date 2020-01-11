var featuresubmitbtn= document.getElementById("featuresubmitbtn");
var featureFrm = document.getElementById("featureFrm");
var featureloadingdiv= document.getElementById("featureloadingdiv");

featuresubmitbtn.addEventListener("click",function(){

    //Make the loader div visible
    featureloadingdiv.classList.remove("human-removed");

    //Hide the form from the user

 featureFrm.classList.add("human-removed");
});
    
 
 
 
