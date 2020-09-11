
	$(window).on('load',function(){
        $('#myModal').modal('show');
    });
	
	var age= 0;
	var investorData = new Array(1);
	var obj ={
		Name: '',
		Age: '',
		Ret_Age: '',
		Risk_Level: '',
		Car_Age: '0',
		Home_age: '0',
		Marriage_age: '0'
	};
	function start() {
			var n = document.forms["myForm"]["name"].value;
			var a = document.forms["myForm"]["age"].value;
			var ra = document.forms["myForm"]["retirementage"].value;
		if (n == "" ||a == "" ||ra == "" ) {
			alert("All Field must be filled out");
			document.location.reload();
		  }
		  var a1= Number(a);
		  var ra1= Number(ra);
		  if (ra1 < a1 ) {
			alert("Retirement Age Should be grather than your age");
			document.location.reload();
		  }
		   if (a1 < 18  || a1 > 50  ) {
			alert("18 < Your Age < 50 ");
			document.location.reload();
		  }
		  if ( ra1 < 60  || ra1 > 100  ) {
			alert("60 < Retirement Age < 100 ");
			document.location.reload();
		  }
		 
			//document.getElementById('closeTheModel').click();
		//var age = document.getElementById('demo').value ;
		 var x = document.getElementById("frm1");
		 /* var text = "";
		  var i;
		  for (i = 0; i < x.length -1 ;i++) {
			text += x.elements[i].value + "<br>";
		  }*/
		  
		  document.getElementById("demoage").innerHTML = x.elements[1].value;
		 document.getElementById("demoname").innerHTML = x.elements[0].value;
		  document.getElementById("demortrage").innerHTML = x.elements[2].value;
		  document.getElementById("demorisklevel").innerHTML = x.elements[3].value;
		   obj.Name = x.elements[0].value;
		   obj.Age = x.elements[1].value;
		   obj.Ret_Age = x.elements[2].value;
		   obj.Risk_Level = x.elements[3].value;
		   
		   age = Number(a);
		var x= setInterval(function(){
			age = age + 1;
		document.getElementById('demoage').innerHTML = age;
		document.getElementById('aging').innerHTML = age;
		if(age >= Number(ra)){
			document.getElementById('walkstop').src='stop.png';
			$('#myModal1').modal('show');
		
			clearInterval(x);
		}
		},700);
	}
	
	function showDivCar() {
    document.getElementById("car").style.display = "block";
	document.getElementById("car1").style.display = "none";
    document.getElementById("carage").innerHTML = "Age of: " +age ;
	obj.Car_Age = age;
	//alert('hi');
	}
	function showDivHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("home1").style.display = "none";
    document.getElementById("homeage").innerHTML = "Age of: " +age ;
	obj.Home_age = age;
	}
	function showDivMarriage() {
    document.getElementById("marriage").style.display = "block";
    document.getElementById("marriage1").style.display = "none";
    document.getElementById("marriageage").innerHTML = "Age of: " +age ;
	obj.Marriage_age = age;
	}
	
	investorData[0] = obj;
	
	//-------csv----Part-----
	
	function convertArrayOfObjectsToCSV(args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    function downloadCSV(args) {
        var data, filename, link;

        var csv = convertArrayOfObjectsToCSV({
            data: investorData
        });
        if (csv == null) return;

        filename = args.filename || 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
		document.getElementById('closeModal').style.display = "block";
		document.getElementById('csvDownload').style.display = "none";
		
		document.getElementById('datains').style.display = "none";
		document.getElementById('datains1').style.display = "block";
		
		
		document.getElementById('ifrm1').style.display = "block";
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }
	
	
	function disOut(){
		document.getElementById('ifrm').style.display =  "block";
		document.getElementById('ifrm1').style.display =  "none";
		document.getElementById('wait').style.display =  "none";
	}
	function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
