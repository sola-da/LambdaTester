





var callbackArguments = [];
var argument1 = function (prefix) {
 callbackArguments.push(arguments) 

    return prefix + 'Title';
};
var argument2 = null;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    var viewOpts = {
            startkey: toIndexableString([key]),
            endkey: toIndexableString([
                key,
                {}
            ])
        };
    return fetchFromView(viewOpts);
};
var argument4 = function (match) {
 callbackArguments.push(arguments) 

    return match.route;
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument6 = {"0":"","]yUW":82,"":"y","4.2101292166641446e+307":""};
var base_0 = [714,403,-1,969,126]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,403,-1,969,126]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,403,-1,969,126]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test731.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)