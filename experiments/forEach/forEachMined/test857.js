





var callbackArguments = [];
var argument1 = function (foldDelta) {
 callbackArguments.push(arguments) 

    this.addFolds(foldDelta.folds);
};
var argument2 = function (e) {
 callbackArguments.push(arguments) 

    e.value = fun.reduce(e.key, e.value);
    e.value = typeof e.value === 'undefined' ? null : e.value;
    e.key = e.key[0][0];
};
var argument3 = {"242":618,"0%":5.584208426556494e+307,"9.668248397319413e+307":""};
var argument4 = function (cb) {
 callbackArguments.push(arguments) 

    cb();
};
var argument5 = 893;
var argument6 = null;
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    attr[key] && attr.$observe(key, function (newValue, oldValue) {
        scope[key] = $sce.trustAsHtml(newValue);
    });
};
var argument8 = r_2;
var base_0 = [627,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test857.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)