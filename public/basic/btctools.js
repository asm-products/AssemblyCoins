
function getoatxs(blockn){
  var url= 'http://10304d82.ngrok.com';
  url=url+'/oa/blocks/'+blockn;
  var newtxs;

  $.get(url,
    function(data,status){
        //alert("Data: " + data + "\nStatus: " + status);
        console.log(data);
        newtxs=data;
      });
    alert(newtxs);
    return newtxs;

}
