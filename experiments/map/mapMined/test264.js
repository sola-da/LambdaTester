





var callbackArguments = [];
var argument1 = function (leaf) {
 callbackArguments.push(arguments) 

    delete leaf.pos;
};
var argument2 = function (dir) {
 callbackArguments.push(arguments) 

    return async.walkfiles(dir, recurse, order);
};
var argument3 = [618,49,"QQ-","N%",705,"+7E",242,595,969,783];
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return t.getTime();
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var base_0 = ["[1Nc$","j:ec","d","eHB","r","zC5$"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[1Nc$","j:ec","d","eHB","r","zC5$"]
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapMined/test264.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)