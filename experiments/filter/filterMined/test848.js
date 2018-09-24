





var callbackArguments = [];
var argument1 = function (x, j) {
 callbackArguments.push(arguments) 

    return j !== i;
};
var argument2 = false;
var argument3 = function (id) {
 callbackArguments.push(arguments) 

    var missing = currentBatch.diffs[id].missing;
    return missing.length === 1 && missing[0].slice(0, 2) === '1-';
};
var argument4 = r_0;
var argument5 = false;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return /(relative|absolute|fixed)/.test(e.css(this, 'position')) && /(auto|scroll)/.test(e.css(this, 'overflow') + e.css(this, 'overflow-y') + e.css(this, 'overflow-x'));
};
var argument7 = false;
var argument8 = function () {
 callbackArguments.push(arguments) 

    return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.message));
};
var argument9 = false;
var base_0 = [59,"f:+",49,"-+",705,"z","J6","*T"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,"f:+",49,"-+",705,"z","J6","*T"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,"f:+",49,"-+",705,"z","J6","*T"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,"f:+",49,"-+",705,"z","J6","*T"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test848.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)