





var callbackArguments = [];
var argument1 = function (filter) {
 callbackArguments.push(arguments) 

    return filter(json);
};
var argument2 = false;
var argument3 = function (match) {
 callbackArguments.push(arguments) 

    return match.route.props.ignoreScrollBehavior;
};
var argument4 = false;
var argument5 = function (hint) {
 callbackArguments.push(arguments) 

    return splitUrl[0].indexOf(hint) > -1;
};
var argument6 = [-100,627,0,783];
var argument7 = function (prop) {
 callbackArguments.push(arguments) 

    nextValue = nextValue.getProperty(prop);
    return nextValue == null;
};
var argument8 = false;
var argument9 = false;
var base_0 = [627,403]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,403]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,403]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,403]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test184.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)