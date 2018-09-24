





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    return isTargetToShow(t.id);
};
var argument2 = null;
var argument3 = null;
var argument4 = function (x, j) {
 callbackArguments.push(arguments) 

    return j !== i;
};
var argument5 = {"100":1.0187261457436787e+308,"403":5.714486227571787e+307,"+":403,"r":1.6450802397680713e+308,"w":9.749840516947277e+307};
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return i & ret.KEY_MODS[x];
};
var argument7 = ["IrY","%","-b7b"];
var argument8 = function (ln) {
 callbackArguments.push(arguments) 

    return ln.indexOf('[') === 0 && ln.indexOf(']') > 0;
};
var argument9 = null;
var argument10 = true;
var base_0 = [655,969,100,"E","Rg","e","P","|x","N",893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,969,100,"E","Rg","e","P","|x","N",893]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,969,100,"E","Rg","e","P","|x","N",893]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,969,100,"E","Rg","e","P","|x","N",893]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test82.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)