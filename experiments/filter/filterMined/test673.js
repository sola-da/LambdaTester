





var callbackArguments = [];
var argument1 = function (choice) {
 callbackArguments.push(arguments) 

    if (filteringCaseSensitive) {
        return choice.indexOf(query) != -1;
    } else {
        return choice.toLowerCase().indexOf(lowerCaseQuery) != -1;
    }
};
var argument2 = null;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
};
var argument5 = r_0;
var argument6 = r_0;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return d3.select(this).classed(CLASS.EXPANDED);
};
var argument8 = 823;
var argument9 = {"-1":""};
var argument10 = function (a) {
 callbackArguments.push(arguments) 

    return a[vars.id.value] == n[vars.id.value];
};
var argument11 = false;
var argument12 = null;
var base_0 = ["d6","#","gn","!f","Y:=","g_dW","t","t",")","nOq"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d6","#","gn","!f","Y:=","g_dW","t","t",")","nOq"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d6","#","gn","!f","Y:=","g_dW","t","t",")","nOq"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d6","#","gn","!f","Y:=","g_dW","t","t",")","nOq"]
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test673.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)