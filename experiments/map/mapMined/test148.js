





var callbackArguments = [];
var argument1 = function (subView) {
 callbackArguments.push(arguments) 

    return viewBuilder.buildView(subView);
};
var argument2 = null;
var argument3 = function (value, index, list) {
 callbackArguments.push(arguments) 

    return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
    };
};
var argument4 = [82,403,607];
var argument5 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument6 = function (v, k) {
 callbackArguments.push(arguments) 

    return k + '=' + v;
};
var argument7 = r_1;
var argument8 = "";
var base_0 = [595,"q!:2O4","J",714,"Y","<"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"q!:2O4","J",714,"Y","<"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"q!:2O4","J",714,"Y","<"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"q!:2O4","J",714,"Y","<"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test148.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)