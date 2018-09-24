





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    obj[item] = true;
};
var argument2 = false;
var argument3 = {"157":"Pb"};
var argument4 = function (headerVal, headerName) {
 callbackArguments.push(arguments) 

    if (!header && angular.lowercase(headerName) == name)
        header = headerVal;
};
var argument5 = false;
var argument6 = function (component) {
 callbackArguments.push(arguments) 

    container.injection(component, Configuration.sessionPropertyName, Configuration.session);
};
var argument7 = "d";
var argument8 = function (key) {
 callbackArguments.push(arguments) 

    if (availableKeys.indexOf(vars[key].value) >= 0) {
        data = data.filter(function (d) {
            var val = fetchValue(vars, d, vars[key].value);
            if (key === 'size') {
                return typeof val === 'number';
            } else {
                return val !== null;
            }
        });
    }
};
var argument9 = null;
var base_0 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test445.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)