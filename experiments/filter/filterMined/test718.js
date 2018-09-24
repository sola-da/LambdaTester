





var callbackArguments = [];
var argument1 = function (tut) {
 callbackArguments.push(arguments) 

    return tut != name;
};
var argument2 = null;
var argument3 = {"705":"","":1.4805471927194765e+306,"9v":"","Y":"+f2l","-1":893};
var argument4 = function (elt) {
 callbackArguments.push(arguments) 

    if (elt.value === v) {
        elt.undef = false;
        return v;
    }
};
var argument5 = [0,607,893];
var argument6 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument7 = function () {
 callbackArguments.push(arguments) 

    var m = this.slice(0, parts[i].length), p = parts[i].slice(0, m.length);
    return m == p;
};
var argument8 = r_2;
var base_0 = [969,5e-324,"J&",714,"FU",25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,5e-324,"J&",714,"FU",25]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,5e-324,"J&",714,"FU",25]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,5e-324,"J&",714,"FU",25]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test718.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)