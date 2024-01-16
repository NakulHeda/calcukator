//This will remove screen value to zero
function resetScreenValue(){
	//  window.location.reload()
	document.getElementById('screen').value = "0";
  }
 //This function will change darkmode and whitemode of calculator
  //with on/off toggle message in console
  const toggleButton  = document.querySelector("#mode");
  const toaddclass = document.querySelector(".container");
  const toaddclass2 = document.querySelector(".screen");
  
  
  toggleButton.onclick = () => {
	if (toggleButton.type === "button") {
	   toggleButton.type = ' ';
	  toaddclass.classList.add("cont");
	  toaddclass2.classList.add("scrn");
	  console.log('on')
	} else {
	  toggleButton.type = 'button';
	  toaddclass.classList.remove("cont");
	  toaddclass2.classList.remove("scrn");
	  console.log('off')
	}
  }
  
  
  
  //IMPORTANT
  //Note that: screenvalue save its data i.e value as string 
			 //but eval() is actually taking screenvalue as arguement and performing operation
			 //here eval() is built in function of javascript that directly evalauate operation