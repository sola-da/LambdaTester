





var callbackArguments = [];
var argument1 = function (b) {
 callbackArguments.push(arguments) 

    return utils.classify(b.message) === type;
};
var argument2 = null;
var argument3 = function (t) {
 callbackArguments.push(arguments) 

    return t != '';
};
var argument4 = r_1;
var argument5 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    return !jsonld.compareValues(e, value);
};
var argument7 = ["9","(","n%","f;"];
var base_0 = ["W","m9FaCU)U&","X","t","S","^","_`EJ"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W","m9FaCU)U&","X","t","S","^","_`EJ"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W","m9FaCU)U&","X","t","S","^","_`EJ"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W","m9FaCU)U&","X","t","S","^","_`EJ"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test171.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)