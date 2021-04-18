function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var errorCheck = false;

  var latitude = document.getElementById("latitude").value;
  if(parseInt(latitude) < -90 || parseInt(latitude) > 90 || isNaN(latitude))
  {
	 document.getElementById("latitudeError").style.display = "inline-block";
	 errorCheck = false;
  }
  
  else {
	  document.getElementById("latitudeError").style.display = "none";
  }
  
  var longitude = document.getElementById("longitude").value;
  if(parseInt(longitude) < -180 || parseInt(longitude) > 180 || isNaN(longitude))
  {
	 document.getElementById("longitudeError").style.display = "inline-block";
   errorCheck = false;
  }
  
  else {
	  document.getElementById("longitudeError").style.display = "none";
  }
  
  if(errorCheck == true){
	  event.preventDefault();
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
