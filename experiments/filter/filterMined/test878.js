





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    return child !== element;
};
var argument2 = {"893":"OzM","F":"","7P":"","5e-324":"{"};
var argument3 = true;
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    if (r.cursor.row == row)
        return true;
    row = r.cursor.row;
};
var argument5 = true;
var argument6 = false;
var argument7 = function (line) {
 callbackArguments.push(arguments) 

    return line.search('Active') >= 0;
};
var argument8 = "zRIei";
var argument9 = r_0;
var argument10 = function (r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable) {
        return !ruleset.variable(r.name);
    }
    return true;
};
var argument11 = true;
var argument12 = r_3;
var base_0 = ["(x","+D:"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(x","+D:"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(x","+D:"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(x","+D:"]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test878.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)