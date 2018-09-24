





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return Math.abs(x % DX) > ε;
};
var argument2 = [242,595,242,-100,607,627,595];
var argument3 = function (k) {
 callbackArguments.push(arguments) 

    return [
        'name',
        'version',
        'dependencies'
    ].indexOf(k) === -1;
};
var argument4 = r_1;
var argument5 = 1.132128035583757e+308;
var argument6 = function (d, i) {
 callbackArguments.push(arguments) 

    return i === 0;
};
var argument7 = function (file) {
 callbackArguments.push(arguments) 

    return file.indexOf('test-rolling-file-stream-write-less') > -1;
};
var argument8 = ["Wo4",843,"pY"];
var base_0 = [82,0,969,49,595,607,783,126,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,0,969,49,595,607,783,126,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,0,969,49,595,607,783,126,595]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/filter/filterMined/test156.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)