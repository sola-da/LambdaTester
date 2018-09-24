





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var $this = $(this);
    return $this.children().length === 0 && $.trim($this.text()).length > 0;
};
var argument2 = null;
var argument3 = function (b) {
 callbackArguments.push(arguments) 

    return checks.indexOf(b[vars.id.value]) >= 0;
};
var argument4 = function (log) {
 callbackArguments.push(arguments) 

    return log.reactID.indexOf(rootID) === 0;
};
var argument5 = {"H":"","":655,"X":7.837717139587785e+307,"{":"","0PL5":"","`I":627};
var argument6 = false;
var argument7 = function (row, index) {
 callbackArguments.push(arguments) 

    return logicRows.indexOf(index) == -1;
};
var base_0 = [893,843,893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,843,893]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,843,893]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,843,893]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test736.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)