





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return !jsonld.compareValues(e, value);
};
var argument2 = true;
var argument3 = [82,"uth]"];
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return !isNaN(d);
};
var argument5 = [403,969,-1,783,655,49];
var argument6 = [969,157,126,49,460,893,460,"-","2",-100];
var argument7 = function (i, atom) {
 callbackArguments.push(arguments) 

    return atom.nodeType === 1;
};
var argument8 = ["=+",")",595,618,607,783,823,242,"a&L,D","H"];
var argument9 = r_2;
var argument10 = function (attachment) {
 callbackArguments.push(arguments) 

    return !_.isUndefined(attachment.id);
};
var argument11 = 627;
var base_0 = ["{Nc:","o","h","Z0q;L5","*e"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{Nc:","o","h","Z0q;L5","*e"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test388.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)