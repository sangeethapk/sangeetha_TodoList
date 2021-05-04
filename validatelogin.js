
$( "form" ).submit(function( event ) {  
    if ( document.getElementById("name").value === "admin" && document.getElementById("psw").value==="12345" ) {  
        console.log("true");
      return true;  
    } 
    else{
          $( "span" ).text( "Not valid!" ).show().fadeOut( 3000 );  
          $("span").css("color","red");
          $(".inputs").val(null);
           event.preventDefault(); 
       }     
  });  
