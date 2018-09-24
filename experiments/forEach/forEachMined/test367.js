





var callbackArguments = [];
var argument1 = function (combinator, method) {
 callbackArguments.push(arguments) 

    Element.implement(method, function (expression) {
        return this.getElement(injectCombinator(expression, combinator));
    });
};
var argument2 = r_0;
var argument3 = function (prop) {
 callbackArguments.push(arguments) 

    data[prop] = bundle[iso + '_' + prop];
};
var argument4 = function (header) {
 callbackArguments.push(arguments) 

    xhr.setRequestHeader(header, options.header[header]);
};
var argument5 = r_1;
var argument6 = [",",";","`Ug","q{","|xU"];
var argument7 = function (plat) {
 callbackArguments.push(arguments) 

    kw.browser_min[plat.browser] = plat.version;
};
var argument8 = true;
var base_0 = ["6k2","g","d","G","oP3h","6","P","%5"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6k2","g","d","G","oP3h","6","P","%5"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6k2","g","d","G","oP3h","6","P","%5"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6k2","g","d","G","oP3h","6","P","%5"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test367.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)