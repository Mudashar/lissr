$(window).on('load',function(){
        $('#myModal4').modal('show');
    });
	
	var age= 0;
	
	function start2() {
			var n = document.forms["myForm2"]["advpass"].value;
		if (n != "1234") {
			alert("Wrong Password Please Enter Again:");
			document.location.reload();
		  }
		  document.getElementById('advdiv').style.display = "block";
		  
		  document.getElementById('footer').style.display = "none";
		  document.getElementById('advid').innerHTML = "Analytics: ";
	}