





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return me.getListItemValue(x) === value;
};
var argument2 = 8.945673297540947e+306;
var argument3 = function (query) {
 callbackArguments.push(arguments) 

    return _.isEqual(query.args, args);
};
var argument4 = false;
var argument5 = r_1;
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc1._id;
};
var argument7 = r_2;
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc2._id;
};
var argument9 = r_1;
var base_0 = ["#v","`&","aa","QZps","kW%","(3","]T2Qz",":","h"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#v","`&","aa","QZps","kW%","(3","]T2Qz",":","h"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#v","`&","aa","QZps","kW%","(3","]T2Qz",":","h"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#v","`&","aa","QZps","kW%","(3","]T2Qz",":","h"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test674.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)