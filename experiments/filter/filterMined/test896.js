





var callbackArguments = [];
var argument1 = function (line) {
 callbackArguments.push(arguments) 

    return line.search('Active') >= 0;
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    return re.test(x.completion);
};
var argument3 = [122,705,893,843,25,714,618,25];
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument5 = function (n) {
 callbackArguments.push(arguments) 

    return typeof n.x == 'number' && typeof n.y == 'number';
};
var argument6 = {"8.835708849218787e+307":655,"ea":"","-100":""};
var argument7 = true;
var base_0 = [59,969,655,823,403,25,655,49,595,82]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,969,655,823,403,25,655,49,595,82]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,969,655,823,403,25,655,49,595,82]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,969,655,823,403,25,655,49,595,82]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test896.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)