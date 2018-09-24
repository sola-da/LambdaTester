





var callbackArguments = [];
var argument1 = function (db) {
 callbackArguments.push(arguments) 

    return db.id === doc.id;
};
var argument2 = function (tab) {
 callbackArguments.push(arguments) 

    if (tab.get('selected')) {
        selection = tab;
        return true;
    }
};
var argument3 = false;
var argument4 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument5 = null;
var argument6 = null;
var argument7 = function (ban) {
 callbackArguments.push(arguments) 

    return ban.mask === mask;
};
var argument8 = ["e^^","O","03]d[","17","jv","Y","mU","K","eJy3","lp"];
var base_0 = [49,893,82,655,893,893,655]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,893,82,655,893,893,655]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,893,82,655,893,893,655]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,893,82,655,893,893,655]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test993.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)