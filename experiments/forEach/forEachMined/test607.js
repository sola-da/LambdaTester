





var callbackArguments = [];
var argument1 = function (n, i) {
 callbackArguments.push(arguments) 

    if (i > depth && a[n])
        delete a[n];
};
var argument2 = true;
var argument3 = function (c) {
 callbackArguments.push(arguments) 

    if (/comment[134]/.test(c.message)) {
        output.print('//' + c.value + '\n');
        output.indent();
    } else if (c.message == 'comment2') {
        output.print('/*' + c.value + '*/');
        if (start.nlb) {
            output.print('\n');
            output.indent();
        } else {
            output.space();
        }
    }
};
var argument4 = function (method) {
 callbackArguments.push(arguments) 

    $httpBackend[prefix + method] = function (url, headers) {
        return $httpBackend[prefix](method, url, undefined, headers);
    };
};
var argument5 = function (child) {
 callbackArguments.push(arguments) 

    child.set('selected', false);
};
var argument6 = r_1;
var argument7 = null;
var base_0 = [823,618,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,618,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,618,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,618,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test607.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)