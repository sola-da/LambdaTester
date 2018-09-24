





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return $(this).data('bootstrap-switch');
};
var argument2 = false;
var argument3 = {"122":9.84003396721203e+307,"126":-1,"":"","7]r":"","2.7226108675476254e+307":8.803986829384655e+307,"6.386043247829383e+307":"z","*xg7{<":5.720262588764512e+307};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return d3.select(this).classed(CLASS.EXPANDED);
};
var argument5 = null;
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return !_.contains(rest, value);
};
var argument7 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var argument8 = null;
var base_0 = ["i","i4","w",655,"B","%","B","LE","cD"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i","i4","w",655,"B","%","B","LE","cD"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i","i4","w",655,"B","%","B","LE","cD"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i","i4","w",655,"B","%","B","LE","cD"]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test396.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)