





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    return targetIds.indexOf(id) < 0;
};
var argument2 = [25,213,82,607];
var argument3 = function () {
 callbackArguments.push(arguments) 

    return $(t) ? n.contains(this, t) : n(this).find(t).size();
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return $.css(this, 'visibility') === 'hidden';
};
var argument5 = r_2;
var argument6 = r_0;
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    return productName == item.item;
};
var argument8 = r_2;
var argument9 = 1.7793511480058537e+308;
var base_0 = [213,122,"]",25,"GB",-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,122,"]",25,"GB",-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,122,"]",25,"GB",-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,122,"]",25,"GB",-100]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test169.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)