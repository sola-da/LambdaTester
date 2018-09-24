





var callbackArguments = [];
var argument1 = function (docId) {
 callbackArguments.push(arguments) 

    return getDocsToPersist(docId, view, docIdsToEmits);
};
var argument2 = false;
var argument3 = false;
var argument4 = function (word) {
 callbackArguments.push(arguments) 

    return word.charAt(0).toUpperCase() + word.substring(1);
};
var argument5 = null;
var argument6 = function (name, i) {
 callbackArguments.push(arguments) 

    return name === match[1] ? i : null;
};
var argument7 = {"":"mN","9.517499610507695e+307":"","[v":"U","-100":157,"7.772322302718488e+307":"","t_kfAX":3.890202496637786e+307,"1.7278878898460417e+308":"9"};
var argument8 = 460;
var argument9 = function (pp) {
 callbackArguments.push(arguments) 

    return entityType.clientPropertyPathToServer(pp, '/');
};
var argument10 = "";
var argument11 = 8.573749106146926e+307;
var base_0 = [783,1.7976931348623157e+308,"W"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,1.7976931348623157e+308,"W"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,1.7976931348623157e+308,"W"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,1.7976931348623157e+308,"W"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test117.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)