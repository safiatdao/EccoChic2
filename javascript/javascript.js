    //Contact Page
        function submitForm() {
            // Got values name, email, message from form tag 
            var fname = document.getElementById("fname").value;
            var lname = document.getElementById("lname").value;
            var email = document.getElementById("userEmail").value;
            var message = document.getElementById("message").value;

            //If form is empty do alert asking user to fill in text field
            if ((fname === '') || (lname == '') || (email == '') || (message == '')) {
              alert('Please enter some text in the fields.');
              return false; // Prevent form submission
            }

            //If they have filled in the text field send this alert
            else{
              // Displays the data inputted by user
              alert( "Thank you! " + "" + fname + " your mesage has been sent");
            }
            

        }
          
         
  //Product Page
       //Rent Button 
      const rentButtons = document.querySelectorAll('.rentButton');
      
      rentButtons.forEach(button => {
        //When user clicks on a button the function is processed
        button.addEventListener('click', function() {
          const dressId= Rhilestone-embellished;
        });
      });

      //Alert user that they have rented a dress
      function submitChoice(dressId) {
        alert("You have rented the " + dressId + ". Thank you!");
        }
     
        
     