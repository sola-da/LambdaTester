/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument2 = null;
var argument3 = function (response) {
 callbackArguments.push(arguments) 

    $scope.posting = false;
    $scope.error = response.data.errorMessage;
};
var argument4 = ["Z","]u]un#v","`&","aa","QZps","kW%","(3","]T2Qz"];
var argument5 = function (date) {
 callbackArguments.push(arguments) 

    var httpClient = new Windows.Web.Http.HttpClient();
    var headers = httpClient.defaultRequestHeaders;
    headers.ifModifiedSince = date;
    return httpClient.getAsync(new Windows.Foundation.Uri(url));
};
var argument6 = "i";
var argument7 = null;
var argument8 = function (connection) {
 callbackArguments.push(arguments) 

    expect(conn.threadId).to.be.equal(connection.threadId);
    expect(cm.validate(conn)).to.be.ok;
    return cm.releaseConnection(connection);
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8)
}
catch(e) {
r_3= e.message
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/promises/promiseMined/test946.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)