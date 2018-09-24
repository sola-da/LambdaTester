





var callbackArguments = [];
var argument1 = function (option) {
 callbackArguments.push(arguments) 

    return option.selected;
};
var argument2 = r_0;
var argument3 = function (node) {
 callbackArguments.push(arguments) 

    if (node.nodeType !== 1) {
        node.parentNode.removeChild(node);
    } else {
        return true;
    }
};
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    var i;
    if (p[0].elements[0].combinator.value === ' ') {
        p[0].elements[0].combinator = new tree.Combinator('');
    }
    for (i = 0; i < p.length; i++) {
        if (p[i].getIsReferenced() && p[i].getIsOutput()) {
            return true;
        }
    }
    return false;
};
var argument5 = null;
var argument6 = ["[_u","<)ZNw"," ","4","{Y"];
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d && isValue(d.value);
};
var argument8 = true;
var argument9 = 8.249589502626883e+307;
var base_0 = ["wu^+L","X","IS","&b)","S","=X])","o6 ","KrxE","1q("]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/filter/filterMined/test226.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)