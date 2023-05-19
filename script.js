function getFormvalue() {
    //Write your code here
	const form = document.getElementById("form1");
	var Fname = form.fname.value;
	var Lname = form.lname.value;
	
	alert(Fname+" "+Lname);

}
