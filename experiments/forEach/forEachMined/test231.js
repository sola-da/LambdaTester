





var callbackArguments = [];
var argument1 = function (def, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.comma();
    def.print(output);
};
var argument2 = function (side) {
 callbackArguments.push(arguments) 

    var value = 0, sideValue = this[side];
    null != sideValue && (value = 'number' == typeof sideValue ? sideValue : sideValue.resolve('left' === side || 'right' === side ? width : height));
    sides[side] = value;
};
var argument3 = r_0;
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    var key = vars[c].value || c;
    returnObj.d3plus[key] = d3.sum(leaves, function (d) {
        if (vars[c].value) {
            var a = fetchValue(vars, d, vars[c].value);
            if (typeof a !== 'number') {
                a = a ? 1 : 0;
            }
        } else if (c === 'total') {
            var a = 1;
        } else {
            var a = 0;
        }
        return a;
    });
};
var argument5 = ["SP0$","m",">!"];
var argument6 = [-1,49];
var argument7 = function (meth) {
 callbackArguments.push(arguments) 

    self[meth] = self[meth].bind(self);
};
var base_0 = [714,100,705,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,100,705,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,100,705,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,100,705,655]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test231.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)