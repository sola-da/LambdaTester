





var callbackArguments = [];
var argument1 = function (docInfo) {
 callbackArguments.push(arguments) 

    return docInfo.error;
};
var argument2 = {"49":"4X","59":"C)Z","969":655,"":"n"};
var argument3 = function (k) {
 callbackArguments.push(arguments) 

    return !old[k];
};
var argument4 = "g";
var argument5 = null;
var argument6 = function (user) {
 callbackArguments.push(arguments) 

    return user.p('name') === 'uniquefind';
};
var argument7 = null;
var argument8 = true;
var argument9 = function (item) {
 callbackArguments.push(arguments) 

    return resp.items.indexOf(item.data) !== -1;
};
var base_0 = [100,595,618,655,0,893,823,843,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,595,618,655,0,893,823,843,-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,595,618,655,0,893,823,843,-100]
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test817.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)