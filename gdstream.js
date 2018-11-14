   var url_string = window.location.href;
   var url = new URL(url_string);
   var c = url.searchParams.get("id");
   document.getElementById("source").src="https://www.googleapis.com/drive/v3/files/"+c+"?alt=media&key=AIzaSyCYLYrU4KQ5HJtc4tSjQDt0aj503YjQ0zY"
