





var callbackArguments = [];
var argument1 = function (memo, key) {
 callbackArguments.push(arguments) 

    if (_.isUndefined(memo)) {
        return self.rel(key);
    } else if (_.isArray(memo)) {
        return _.flatten(_.map(memo, function (item) {
            return item.rel(key);
        }));
    } else if (memo) {
        return memo.rel(key);
    } else {
        return null;
    }
};
var argument2 = function (prev, current, i, arr) {
 callbackArguments.push(arguments) 

    return doMerge(prev, current, true).tree;
};
var argument3 = false;
var argument4 = false;
var argument5 = function (sum, value) {
 callbackArguments.push(arguments) 

    return sum + value;
};
var argument6 = ["Ei","U","|","?","J#","h5e","?","F"];
var argument7 = null;
var argument8 = function (a, b) {
 callbackArguments.push(arguments) 

    i++;
    if (i <= 4) {
        arr.push(a + 3);
    }
    ;
    return b;
};
var argument9 = [25,126,-100,-1,595,122];
var base_0 = [0,1.7976931348623157e+308,"0","+|*",213,"c5",1.7976931348623157e+308,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,1.7976931348623157e+308,"0","+|*",213,"c5",1.7976931348623157e+308,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,1.7976931348623157e+308,"0","+|*",213,"c5",1.7976931348623157e+308,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,1.7976931348623157e+308,"0","+|*",213,"c5",1.7976931348623157e+308,969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test506.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)