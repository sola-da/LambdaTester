





var callbackArguments = [];
var argument1 = function (d, i) {
 callbackArguments.push(arguments) 

    return !i || angle[d] - angle[order[i - 1]] > ε;
};
var argument2 = null;
var argument3 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument4 = null;
var argument5 = "";
var argument6 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument7 = ["6sG","z"];
var argument8 = ["Hj",100];
var argument9 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var base_0 = ["x",122,"hsn",1.7976931348623157e+308,-1,"x",82,"88E","7"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["x",122,"hsn",1.7976931348623157e+308,-1,"x",82,"88E","7"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x",122,"hsn",1.7976931348623157e+308,-1,"x",82,"88E","7"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test807.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)