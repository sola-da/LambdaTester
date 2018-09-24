





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    this.end = getElementStyles(this.el[0]);
    this.diff = styleDifference(this.start, this.end);
    return this;
};
var argument2 = "$";
var argument3 = function (m) {
 callbackArguments.push(arguments) 

    return HLP.readMPI(m);
};
var argument4 = true;
var argument5 = true;
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    var h = {
            label: key,
            units: data[key]
        };
    return h;
};
var argument7 = null;
var argument8 = true;
var argument9 = function (d) {
 callbackArguments.push(arguments) 

    return polygon[d];
};
var base_0 = [969,82,655,213,618,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,82,655,213,618,-1]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,82,655,213,618,-1]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,82,655,213,618,-1]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test289.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)