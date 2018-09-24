





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument2 = {"(":""};
var argument3 = function (result) {
 callbackArguments.push(arguments) 

    return Highlight.wordsFold(result.text, query);
};
var argument4 = null;
var argument5 = function (prefix) {
 callbackArguments.push(arguments) 

    return prefix + 'Title';
};
var argument6 = 1.0530029393129853e+308;
var argument7 = null;
var argument8 = function (elem) {
 callbackArguments.push(arguments) 

    return elem.selected;
};
var base_0 = [783,5e-324,655,242,460,403,783,49,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,5e-324,655,242,460,403,783,49,-100]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,5e-324,655,242,460,403,783,49,-100]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test209.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)