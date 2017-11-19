function validateForm()
{
	var firstName=document.membershipForm.FirstName.value;
	var lastName=document.membershipForm.LastName.value;
	var address=document.membershipForm.Address.value;
	var city=document.membershipForm.City.value;
	var postalCode=document.membershipForm.PostalCode.value;
	var age=parseInt(document.membershipForm.Age.value);
	var pass=document.membershipForm.password1.value;
	var confirm=document.membershipForm.Confirm.value;
	var em=document.membershipForm.Email.value;
	var province=document.membershipForm.Province.value.toUpperCase();

   if((age == "") || (province == "") || (pass == "") || (confirm == "") || (firstName == "") || (lastName == "") || (city == "") || (postalCode == "") || (em == "") || (address == ""))
    {
        alert("Please fill all the inputs");
        return false;
    }

	if(!((province == "QC") || (province == "ON") || (province == "MN") || (province == "SK") ||(province == "AB") ||(province == "BC")||(province == "")))
    {
        alert("Province is one of QC , ON , MN, SK , AB, BC");
                }

	var regPcode = /^[a-z][0-9][a-z][0-9][a-z][0-9]$/;
    var regEmail = /.+\@.+\..+/;
    if (postalCode.search(regPcode) == -1)
    {
        alert("Invalid postal code!");
        return false;
    }
 
    if (parseInt(age) <= 17)
    {
        alert("Minimum requirement is 18 years for membership.");
        return false;
    }
       
    if (em.search(regEmail) == -1)
    {
        alert("Please enter the valid email address");
        return false;
    }
   
    if (pass.length <= 6)
    {
        alert("Password should have at least 6 characters");
        return false;
    }
    if (pass.search(/[0-9]/) == -1)
    {
        alert("Password should have atleast 1 digit");
        return false;
    }
    if (pass.search(/[A-Z]/))
    {
        alert("Password should have at least 1 Upper case character");
        return false;
    }
    if (pass != confirm)
    {
        alert("Passwords doesn't match");
        return false;
    }
    alert("Thanks for registering with our website, your record was created successfully.")
    return true;
				    
							 
 
}