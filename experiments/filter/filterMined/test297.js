





var callbackArguments = [];
var argument1 = function (quoteLocation) {
 callbackArguments.push(arguments) 

    var backslashCount = 0, index = quoteLocation;
    while (index--) {
        if (stacktraceLine.charAt(index) != '\\') {
            break;
        }
        backslashCount = backslashCount + 1;
    }
    return backslashCount % 2 == 0;
};
var argument2 = false;
var argument3 = null;
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return t;
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument6 = r_2;
var argument7 = function (button) {
 callbackArguments.push(arguments) 

    return button['class'] === 'submit';
};
var base_0 = ["UB","E","NW0"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test297.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)