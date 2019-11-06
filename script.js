

var handlers = { 


//make it so when clicking on icon - url is taken from list example icon 1 clicked
// then chagne vidnew to listI[0]

  changeUrl: function(position) {



  		  	   // this.listI[position] = vidNew;
  	   // var vidNew = document.getElementById("myFrame").src;

  		 document.getElementById("icon1").addEventListener('click',function()
  		 {
  		 	document.getElementById('myFrame').src = 'https://www.youtube.com/embed/0MW4RJS_DVM'
  		 	
  		 }
  		 	)
   }


}




