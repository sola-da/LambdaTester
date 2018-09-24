





var callbackArguments = [];
var argument1 = function (node) {
 callbackArguments.push(arguments) 

    node.innerHTML = content;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (foldDelta) {
 callbackArguments.push(arguments) 

    this.addFolds(foldDelta.folds);
};
var argument5 = null;
var argument6 = r_0;
var argument7 = function (t) {
 callbackArguments.push(arguments) 

    format_key(t);
};
var argument8 = false;
var argument9 = {"618":627,"-1":9.981132669994919e+307,"":783};
var argument10 = function (obj) {
 callbackArguments.push(arguments) 

    var googleAnalyticsId = obj.stringPropertyValue('googleAnalyticsId');
    if (googleAnalyticsId) {
        service.googleAnalyticsId = googleAnalyticsId;
    }
};
var argument11 = {};
var base_0 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test79.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)