
function getoatxs(blockn){
  var url= 'bitwrangle.herokuapp.com';
  url=url+'/color/transactions/'+blockn;
  var newtxs;

  $.get(url,
    function(data,status){
        //alert("Data: " + data + "\nStatus: " + status);
        console.log(data);
        newtxs=data;
        alert(newtxs);
        return newtxs;
      });

}
