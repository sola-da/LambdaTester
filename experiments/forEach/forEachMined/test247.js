





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    acc.push(this.node);
};
var argument2 = function (event) {
 callbackArguments.push(arguments) 

    $.fn[event] = function (callback) {
        return callback ? this.bind(event, callback) : this.trigger(event);
    };
};
var argument3 = [122,627,126,5e-324,0,25,25,126,242];
var argument4 = function (type) {
 callbackArguments.push(arguments) 

    var typeAxes = chartAxes[type];
    typeAxes && typeAxes.forEach(processAxis);
};
var argument5 = true;
var argument6 = true;
var argument7 = function (c, i) {
 callbackArguments.push(arguments) 

    dataString = c.join(',');
    csv_data += i < csv_to_return.length ? dataString + '\n' : dataString;
};
var base_0 = ["b",627,5e-324]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b",627,5e-324]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["b",627,5e-324]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["b",627,5e-324]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test247.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)