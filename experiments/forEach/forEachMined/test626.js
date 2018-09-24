





var callbackArguments = [];
var argument1 = function (node) {
 callbackArguments.push(arguments) 

    newP.appendChild(node);
};
var argument2 = null;
var argument3 = function (char) {
 callbackArguments.push(arguments) 

    var tmpArray = title.split(char);
    if (tmpArray.length > 1) {
        if (betterTitle)
            return self.cache['article-title'] = title;
        betterTitle = tmpArray[0].trim();
    }
};
var argument4 = r_1;
var argument5 = false;
var argument6 = function (field) {
 callbackArguments.push(arguments) 

    field.setDisabled(newDisabled);
};
var argument7 = function (prop) {
 callbackArguments.push(arguments) 

    if (typeof src[prop] !== 'undefined')
        target[prop] = compiler.aup(src[prop], target[prop]);
};
var argument8 = null;
var argument9 = false;
var base_0 = [403,126,"O*",403,"5","*"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,126,"O*",403,"5","*"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,126,"O*",403,"5","*"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,126,"O*",403,"5","*"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test626.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)