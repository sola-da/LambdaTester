





var callbackArguments = [];
var argument1 = function (interceptor) {
 callbackArguments.push(arguments) 

    if (interceptor.request || interceptor.requestError) {
        chain.unshift(interceptor.request, interceptor.requestError);
    }
    if (interceptor.response || interceptor.responseError) {
        chain.push(interceptor.response, interceptor.responseError);
    }
};
var argument2 = false;
var argument3 = ["y"];
var argument4 = function (child) {
 callbackArguments.push(arguments) 

    child.renderInteractive();
};
var argument5 = function (id) {
 callbackArguments.push(arguments) 

    for (var j = 0; j < selectedData.length; j++) {
        if (selectedData[j] && selectedData[j].id === id) {
            newData.push(selectedData[j]);
            selectedData.shift(j);
            break;
        }
    }
};
var argument6 = function (fold) {
 callbackArguments.push(arguments) 

    fold.setFoldLine(this);
};
var base_0 = ["V","p","R"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","p","R"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","p","R"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","p","R"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test147.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)