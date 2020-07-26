var row=1;
var entry=document.getElementById("entry");
var name1=document.getElementById("name1");
var age1=document.getElementById("age1");
var grade1=document.getElementById("grade1");
var pass1=document.getElementById("pass1");
var cpass1=document.getElementById("cpass1");
var mobnumber1=document.getElementById("mobnumber1");
/*var gender1=document.getElementById("gender1");*/
entry.addEventListener("click",displayDetails);
	function displayDetails(){
		var name=document.getElementById("name").value;
		var age=document.getElementById("age").value;
		var grade=document.getElementById("grade").value;
		var ema=document.getElementById("ema").value;
		var pass=document.getElementById("pass").value;
		var cpass=document.getElementById("cpass").value;
		var mobnumber=document.getElementById("mobnumber").value;
		var list=document.getElementById("list").value;
		
		//var gender = document.getElementsByName("gender").value;
		//var male=document.getElementById("male").value;
		//var female=document.getElementById("female").value;
		if(!name)
		{
			document.getElementById("name1").innerHTML="**please fill the name";
			return false;
		}
		else if(name.length<3){
			document.getElementById('name1').innerHTML="**name length should be greater than 3 ";
					return false;
		}
		else if (name.length>20) {
			document.getElementById('name1').innerHTML="**name should no be greater then 20";
					return false;
		}
		else if(!isNaN(name)) {
					document.getElementById('name1').innerHTML=" should not be numric";
					return false;
		}

		else if(!age)
		{
			document.getElementById("age1").innerHTML="*please mentioned the age";
			return false;
		}
		else if(!grade)
		{
			document.getElementById("grade1").innerHTML="grade should be submitted";
			return false;
		}

		else if (!ema) {
				document.getElementById('ema1').innerHTML="please enter the email";
				return false;
			}

		else if (ema.indexOf('@')<=0) {
				document.getElementById('ema1').innerHTML="@ invalid position";
				return false;
			}
		/*else if ((ema.charAt(ema.length-4)=='.') ||(ema.character(ema.length-3)=='.')) {
				document.getElementById('ema1').innerHTML=". invalid position";
				return false;
			}*/
		else if(!pass){
					document.getElementById('pass1').innerHTML=" **password is not empty";
					return false;
		}
		else if(pass.length<6){
					document.getElementById('pass1').innerHTML=" **password should be 6 character is ";
					return false;
		}
		else if (!cpass) {
			document.getElementById('cpass1').innerHTML ="please enter confirm password";
				return false;
				}

			else if (pass!=cpass) {
				document.getElementById('confirpass').innerHTML="haven't match";
				return false;
			}	

			else if (!mobnumber) {
				document.getElementById('mobnumber1').innerHTML="plese Enter mobilenumber";
				return false;
			}

			else if(isNaN(mobnumber)){
				document.getElementById('mobnumber1').innerHTML="this is not a number";
				return false;
			}

				/*else if(mobnumber!=10){
				document.getElementById('mobnumber1').innerHTML="mo no must be 10 digit";
				return false;
			}

		else if(!male || !female){
			document.getElementById('gender1').innerHTML="*please selct gender";
		}*/

		var display=document.getElementById("display");

		var newRow=display.insertRow(row);

		var cell1=newRow.insertCell(0);
		var cell2=newRow.insertCell(1);
		var cell3=newRow.insertCell(2);
		var cell4=newRow.insertCell(3);
		var cell5=newRow.insertCell(4);
		var cell6=newRow.insertCell(5);
		var cell7=newRow.insertCell(6);
		var cell8=newRow.insertCell(7);

		cell1.innerHTML=name;
		cell2.innerHTML=age;
		cell3.innerHTML=grade;
		cell4.innerHTML=ema;
		cell5.innerHTML=pass;
		cell6.innerHTML=cpass;
		cell7.innerHTML=mobnumber;
		cell8.innerHTML=list;
		
		row++;

	}
	$(document).on('click','ul li',function(){
		$(this).addClass('active').siblings().removeClass('active')
	})