





var callbackArguments = [];
var argument1 = function (pred) {
 callbackArguments.push(arguments) 

    return pred != null;
};
var argument2 = null;
var argument3 = {")?":"1Ew","1.7943081201748512e+308":3.2101975278535635e+307,"1.2840375318467056e+308":"U#","5.393054903530909e+307":"n","oia":""};
var argument4 = function (user) {
 callbackArguments.push(arguments) 

    return user.p('name') === 'uniquefind';
};
var argument5 = r_0;
var argument6 = function (elem, i) {
 callbackArguments.push(arguments) 

    if (elem.message == 'ImportStatement') {
        _imports_positions.push(i);
        return true;
    }
    return false;
};
var argument7 = r_2;
var argument8 = function (file) {
 callbackArguments.push(arguments) 

    return path.join(__dirname, file) !== __filename && file !== 'pages.js';
};
var argument9 = r_2;
var argument10 = false;
var base_0 = ["W",82,157,59,"i8",",",893,"W^afC#e+"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W",82,157,59,"i8",",",893,"W^afC#e+"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test496.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)