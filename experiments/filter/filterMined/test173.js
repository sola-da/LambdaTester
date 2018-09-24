





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d[id_var] === id;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return /(auto|scroll)/.test(e.css(this, 'overflow') + e.css(this, 'overflow-y') + e.css(this, 'overflow-x'));
};
var argument3 = false;
var argument4 = null;
var argument5 = function (choice) {
 callbackArguments.push(arguments) 

    if (filteringCaseSensitive) {
        return choice.indexOf(query) != -1;
    } else {
        return choice.toLowerCase().indexOf(lowerCaseQuery) != -1;
    }
};
var argument6 = [783,59,100,893,893,122];
var argument7 = function (ok) {
 callbackArguments.push(arguments) 

    if (~ok.indexOf('*'))
        return 0 == key.indexOf(ok.split('*')[0]);
    return key == ok;
};
var argument8 = r_3;
var argument9 = {"242":"","607":"","655":157,"1.5838780135121968e+307":7.513600885346787e+307,"":"F","G":"Q","1.327205183442181e+308":4.131138570478191e+307};
var base_0 = [783,655,157,100,460]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,655,157,100,460]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,655,157,100,460]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,655,157,100,460]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test173.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)