





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    return this.globals[id].activate && get.globals.indexOf(id) === -1;
};
var argument2 = null;
var argument3 = function (r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable) {
        return !ruleset.variable(r.name);
    }
    return true;
};
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument5 = false;
var argument6 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument7 = ["rLU","D","8","n,]","G;","GL","Z","Z9","oFOg"];
var argument8 = {"25":"gw]","Rr1":607,"8.543016232654456e+307":"","":"2","5.179295067206024e+307":100};
var base_0 = [618,893,0,460,705,618,0,100,705]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,893,0,460,705,618,0,100,705]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,893,0,460,705,618,0,100,705]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,893,0,460,705,618,0,100,705]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test352.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)