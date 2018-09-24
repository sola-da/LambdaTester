





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return e.indexOf('Error') !== 0 && e.indexOf('d3plus.js:') < 0 && e.indexOf('d3plus.min.js:') < 0;
};
var argument2 = function (patch) {
 callbackArguments.push(arguments) 

    var parsedPath = parsePath(patch.path);
    if ([
            'add',
            'remove'
        ].indexOf(patch.op) != -1 && !isNaN(parsedPath.col)) {
        if (newOrRemovedColumns.indexOf(parsedPath.col) != -1) {
            return false;
        } else {
            newOrRemovedColumns.push(parsedPath.col);
        }
    }
    return true;
};
var argument3 = 5.956651009869568e+307;
var argument4 = ["B","(!h","l"];
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    return item['rows'];
};
var argument6 = r_2;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return 1;
};
var argument8 = null;
var argument9 = {"157":1.1713102259137485e+308,"403":122,"783":607,"969":823,"1.366743586472057e+308":"[","":"76","1.187259722010475e+308":"","Jo)MBE6":"6","-100":""};
var base_0 = ["]8h","<%MUQ","*-","&k","rC","[","z"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]8h","<%MUQ","*-","&k","rC","[","z"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test472.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)