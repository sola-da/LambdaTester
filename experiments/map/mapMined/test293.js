





var callbackArguments = [];
var argument1 = function (docId) {
 callbackArguments.push(arguments) 

    return getDocsToPersist(docId, view, docIdsToEmits);
};
var argument2 = null;
var argument3 = true;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument5 = function (m) {
 callbackArguments.push(arguments) 

    return format(new Date(m));
};
var argument6 = function (p) {
 callbackArguments.push(arguments) 

    if (p) {
        return p;
    }
};
var base_0 = ["V","IU2&Cx0X","c","K","F@","2","I","f","K"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","IU2&Cx0X","c","K","F@","2","I","f","K"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","IU2&Cx0X","c","K","F@","2","I","f","K"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","IU2&Cx0X","c","K","F@","2","I","f","K"]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test293.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)