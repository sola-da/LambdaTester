





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return firstOnly(x);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    tx.commit();
    return done();
};
var argument3 = true;
var argument4 = r_0;
var argument5 = function (i) {
 callbackArguments.push(arguments) 

    return 'a' + i;
};
var argument6 = r_0;
var argument7 = r_0;
var argument8 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument9 = null;
var base_0 = [607,242,-1,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,242,-1,607]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,242,-1,607]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,242,-1,607]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test251.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)