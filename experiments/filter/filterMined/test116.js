





var callbackArguments = [];
var argument1 = function (domain) {
 callbackArguments.push(arguments) 

    return 0 === domain.indexOf(str);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
};
var argument3 = function () {
 callbackArguments.push(arguments) 

    return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.message));
};
var argument4 = null;
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i);
};
var argument6 = 1.1468315288977058e+308;
var argument7 = true;
var base_0 = [82,460,126,126,705,122,969,705,627]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,460,126,126,705,122,969,705,627]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,460,126,126,705,122,969,705,627]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test116.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)