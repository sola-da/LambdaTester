





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return superscript[c];
};
var argument2 = function (t) {
 callbackArguments.push(arguments) 

    return linkto(t, htmlsafe(t), cssClass);
};
var argument3 = true;
var argument4 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument5 = "fP:LW";
var argument6 = "r";
var argument7 = function (expr) {
 callbackArguments.push(arguments) 

    return expr.visit(context);
};
var argument8 = "ul";
var base_0 = [403,893,655,49,-1,969,126,157,100,843]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,893,655,49,-1,969,126,157,100,843]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,893,655,49,-1,969,126,157,100,843]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,893,655,49,-1,969,126,157,100,843]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test583.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)