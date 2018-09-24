





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    if (d._header)
        return;
    if (d.writeHead) {
        d.statusCode = 200;
        d.setHeader('content-type', page.mimetype || 'text/html');
        d.setHeader('content-length', text.length);
    }
    d.write(text);
    d.end();
};
var argument2 = {"":3.1741205267600205e+307,"1.5694318654500385e+308":""};
var argument3 = null;
var argument4 = function (obj) {
 callbackArguments.push(arguments) 

    var googleAnalyticsId = obj.stringPropertyValue('googleAnalyticsId');
    if (googleAnalyticsId) {
        service.googleAnalyticsId = googleAnalyticsId;
    }
};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    a.push(item);
};
var argument6 = ["i","{OQ","a",":Z","uo)","q[WPQ","R+s"];
var argument7 = function (childChart) {
 callbackArguments.push(arguments) 

    childChart._createPhase2();
};
var base_0 = [")8","U","VW","k#2"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")8","U","VW","k#2"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")8","U","VW","k#2"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")8","U","VW","k#2"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
}
catch(e) {
r_3= "Error"
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test530.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)