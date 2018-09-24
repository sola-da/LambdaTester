





var callbackArguments = [];
var argument1 = function (key, value) {
 callbackArguments.push(arguments) 

    d3_rgb_names.set(key, d3_rgbNumber(value));
};
var argument2 = function (field) {
 callbackArguments.push(arguments) 

    if (field != 'Id' && obj[field] !== orig[field])
        diff[field] = obj[field];
};
var argument3 = function (sk) {
 callbackArguments.push(arguments) 

    if (sk && sk.sendmacused)
        self.oldMacKeys.push(sk.sendmac);
    if (sk && sk.rcvmacused)
        self.oldMacKeys.push(sk.rcvmac);
};
var argument4 = null;
var argument5 = r_2;
var argument6 = function (childChart) {
 callbackArguments.push(arguments) 

    var axis = childChart.axes[axisId], scale = axis.scale;
    if (!scale.isNull) {
        scale.domain(unionExtent.min, unionExtent.max);
        axis.setScale(scale);
    }
};
var base_0 = ["X)","EM?S","r","Mp","Ql","(","e*M"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X)","EM?S","r","Mp","Ql","(","e*M"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X)","EM?S","r","Mp","Ql","(","e*M"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X)","EM?S","r","Mp","Ql","(","e*M"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test631.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)