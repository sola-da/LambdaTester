





var callbackArguments = [];
var argument1 = function (gMarker) {
 callbackArguments.push(arguments) 

    return _this.add(gMarker);
};
var argument2 = function (child) {
 callbackArguments.push(arguments) 

    if (index) {
        element.insertBefore(child, index);
    } else {
        element.appendChild(child);
        index = child;
    }
};
var argument3 = false;
var argument4 = {"618":1.7117188987694375e+308,"969":"","1.7976931348623157e+308":5e-324,"1.053855105388298e+308":"","1.5167051325777889e+308":"f|M","":595,"8.065399981037388e+307":""};
var argument5 = function (info, index) {
 callbackArguments.push(arguments) 

    maxName = Math.max(maxName, (info.name || '').length);
    maxLabel = Math.max(maxLabel, (info.label || '').length);
    var dimName = this._userIndexesToSingleDim[index];
    dimName && (maxDim = Math.max(maxDim, dimName.length));
};
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    output.push(value);
};
var base_0 = [714,714,823,655,607,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,714,823,655,607,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,714,823,655,607,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,714,823,655,607,25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test417.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)