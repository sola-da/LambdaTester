





var callbackArguments = [];
var argument1 = function (x, child) {
 callbackArguments.push(arguments) 

    return x + child.x;
};
var argument2 = [655,"w"];
var argument3 = 4.963841462582841e+307;
var argument4 = function (count, p) {
 callbackArguments.push(arguments) 

    if (p.name && !p.value) {
        return count + 1;
    } else {
        return count;
    }
};
var argument5 = r_1;
var argument6 = {"618":1.7976931348623157e+308,"":"","5.515726328186831e+307":25,"1.347349284914078e+308":""};
var argument7 = function (prv, cur) {
 callbackArguments.push(arguments) 

    return prv + HLP.packMPI(cur);
};
var argument8 = function (r, s) {
 callbackArguments.push(arguments) 

    r[o[s]] = s;
    return r;
};
var argument9 = r_0;
var argument10 = ["4D6","@h"];
var base_0 = ["Q`N","}","#I","V!XJ","?","25b","9!","Z"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Q`N","}","#I","V!XJ","?","25b","9!","Z"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Q`N","}","#I","V!XJ","?","25b","9!","Z"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Q`N","}","#I","V!XJ","?","25b","9!","Z"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test291.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)