   var url_string = window.location.href;
   var url = new URL(url_string);
   var c = url.searchParams.get("id");
   document.getElementById("source").src="https://www.googleapis.com/drive/v3/files/"+c+"?alt=media&key=AIzaSyBZethatcyJlZbPQRr7GkHnfm_Jm7yQTDI"