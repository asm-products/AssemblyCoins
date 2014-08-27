
function getoatxs(blockn, callback){
  var url= 'http://bitwrangle.herokuapp.com';
  url=url+'/colors/transactions/';

  $.get(url,
    function(data,status){
        //alert("Data: " + data + "\nStatus: " + status);
        var newtxs;
        newtxs=JSON.parse(data);
      //  console.log(newtxs['data'][0]['block']);

        callback(newtxs)

      });
}
