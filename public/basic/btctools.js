
function getoatxs(blockn){
  var url= 'bitwrangle.herokuapp.com';
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
