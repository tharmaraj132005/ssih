const firebaseConfig = {
    apiKey: "AIzaSyAXHTjHYz3Rc7bEEA6qi0TZboLXCBj0uCQ",
    authDomain: "patientdetslogin5476.firebaseapp.com",
    databaseURL: "https://patientdetslogin5476-default-rtdb.firebaseio.com",
    projectId: "patientdetslogin5476",
    storageBucket: "patientdetslogin5476.appspot.com",
    messagingSenderId: "7534988225",
    appId: "1:7534988225:web:61b281af4cb4647829bd40"
  };
  
  firebase.initializeApp(firebaseConfig);
  const patientDetails103019DB = firebase.database().ref('patientDetails103019');
  
  document.getElementById("contactform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    
    const name = getElementVal("name");
    const emailID = getElementVal("email");
    const Phone = getElementVal("phone");
    const Date = getElementVal("dob");
    const Address = getElementVal("address");
    const Gender = getElementVal("gender");
    const Emg = getElementVal("emg");
    const Aadhar = getElementVal("zip");
    const  city= getElementVal("city");
    const state = getElementVal("state");
    const Pass = getElementVal("password");
    const Confirm = getElementVal("confirm-password");
    
    savemsg(name, emailID, Phone, Date, Address, Gender, Emg, Aadhar, Pass, Confirm,city,state);
  }
  
  const savemsg = (name, emailID, Phone, Date, Address, Gender, Emg, Aadhar, Pass, Confirm,state,city) => {
    const newContact = patientDetails103019DB.push();
    newContact.set({
      name: name,
      email: emailID,
      phone: Phone,
      Date: Date,
      Address: Address,
      Gender: Gender,
      Emg: Emg,
      Aadha: Aadhar,
      Pass: Pass,
      Confirm: Confirm,
      state:state,
      city:city
    });
  }
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
  
  document.getElementById("but").addEventListener("click", function() {
    const userId = '-O657up1FZMwJ2D-OnQ-';
    const userRef = firebase.database().ref('patientDetails103019/' + userId);
    
    userRef.once('value')
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val()); // Logs user data
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });