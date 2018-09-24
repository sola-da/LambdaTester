





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    if (currentModel.location === element.location) {
        return true;
    } else if (element.checked) {
        changeIndex++;
    }
    return false;
};
var argument2 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var argument3 = true;
var argument4 = function (element) {
 callbackArguments.push(arguments) 

    return element;
};
var argument5 = 25;
var argument6 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var base_0 = ["?t",893,"n",122,607,"Mp",213,157,"Ef"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?t",893,"n",122,607,"Mp",213,157,"Ef"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?t",893,"n",122,607,"Mp",213,157,"Ef"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?t",893,"n",122,607,"Mp",213,157,"Ef"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someMined/test53.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)