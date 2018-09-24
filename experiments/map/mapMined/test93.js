





var callbackArguments = [];
var argument1 = function (row, columnIndex) {
 callbackArguments.push(arguments) 

    row.gridString = rowIndex + 1 + 'x' + (columnIndex + 1);
    return row;
};
var argument2 = function (color) {
 callbackArguments.push(arguments) 

    return {
        text: color,
        color: color
    };
};
var argument3 = function (subView) {
 callbackArguments.push(arguments) 

    return viewBuilder.buildView(subView);
};
var argument4 = null;
var argument5 = r_1;
var argument6 = function (match) {
 callbackArguments.push(arguments) 

    return match.route;
};
var argument7 = false;
var base_0 = ["z","iW","d","&","6u","+tT","9","c@=","V"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z","iW","d","&","6u","+tT","9","c@=","V"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z","iW","d","&","6u","+tT","9","c@=","V"]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z","iW","d","&","6u","+tT","9","c@=","V"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test93.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)