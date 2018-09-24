





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return d && isValue(d.value);
};
var argument3 = null;
var argument4 = {"607":"","":59,"R":" y]","1.0217356273296604e+308":5.122795157089233e+307,"g":25,"Y":"7I;","^ ":"o","8.942033545152817e+307":"x"};
var argument5 = function (docInfo) {
 callbackArguments.push(arguments) 

    return docInfo.error;
};
var argument6 = false;
var argument7 = true;
var argument8 = function (value) {
 callbackArguments.push(arguments) 

    return !_.include(other, value);
};
var argument9 = false;
var base_0 = ["v-= H","[8k"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v-= H","[8k"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v-= H","[8k"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/filter/filterMined/test187.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)