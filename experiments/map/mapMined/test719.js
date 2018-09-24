





var callbackArguments = [];
var argument1 = function (v, i) {
 callbackArguments.push(arguments) 

    var border = parseInt(v, 10) || 0, padding = parseInt(p[i], 10) || 0;
    return border + padding;
};
var argument2 = true;
var argument3 = function (r) {
 callbackArguments.push(arguments) 

    return linkto(r, htmlsafe(r), cssClass);
};
var argument4 = function (attribute) {
 callbackArguments.push(arguments) 

    return {
        caption: attribute,
        snippet: attribute + '="$0"',
        meta: 'attribute',
        score: Number.MAX_VALUE
    };
};
var argument5 = function (id) {
 callbackArguments.push(arguments) 

    return attributes.as().find(id);
};
var argument6 = "";
var argument7 = r_1;
var base_0 = [714,"`B",5e-324,"V","R",595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"`B",5e-324,"V","R",595]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"`B",5e-324,"V","R",595]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"`B",5e-324,"V","R",595]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test719.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)