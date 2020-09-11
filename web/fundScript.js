$(window).on('load',function(){
        $('#myModal3').modal('show');
    });
	
	var age= 0;
	
	function start1() {
			var n = document.forms["myForm1"]["fund"].value;
		if (n == "") {
			alert("Field must be filled out");
			document.location.reload();
		  }
		  document.getElementById('funddiv').style.display = "block";
		  
		  document.getElementById('footer').style.display = "none";
		  document.getElementById('fundid').innerHTML = "Your Fund:" +n+" - A moderate risk fund for long term investment";
	}