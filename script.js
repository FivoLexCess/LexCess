document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent actual form submission
  
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const dob = document.getElementById("dob").value;
    const sex = document.getElementById("sex").value;
    const email = document.getElementById("email").value;
  
    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("DOB:", dob);
    console.log("Sex:", sex);
    console.log("Email:", email);
  
    alert("Form submitted! Check the console.");
  });
  