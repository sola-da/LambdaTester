





var callbackArguments = [];
var argument1 = function (backup) {
 callbackArguments.push(arguments) 

    return backup.name === name;
};
var argument2 = null;
var argument3 = function (r) {
 callbackArguments.push(arguments) 

    if (r.cursor.row == row)
        return true;
    row = r.cursor.row;
};
var argument4 = null;
var argument5 = r_0;
var argument6 = function (i, elem) {
 callbackArguments.push(arguments) 

    return !jQuery('a', elem).length;
};
var argument7 = r_2;
var argument8 = r_0;
var argument9 = function (attachment) {
 callbackArguments.push(arguments) 

    return !_.isUndefined(attachment.id);
};
var argument10 = true;
var argument11 = null;
var base_0 = ["<","r8","x2zw>IWn","jL","JSr}","X","f",">",":","%"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<","r8","x2zw>IWn","jL","JSr}","X","f",">",":","%"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<","r8","x2zw>IWn","jL","JSr}","X","f",">",":","%"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<","r8","x2zw>IWn","jL","JSr}","X","f",">",":","%"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test753.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)