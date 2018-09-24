





var callbackArguments = [];
var argument1 = function (rev) {
 callbackArguments.push(arguments) 

    pos--;
    return {
        rev: pos + '-' + rev.id,
        status: rev.opts.status
    };
};
var argument2 = r_0;
var argument3 = false;
var argument4 = function (name, i) {
 callbackArguments.push(arguments) 

    return name === match[1] ? i : null;
};
var argument5 = null;
var argument6 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: '\'' + val + '\'',
        token: 'keyword'
    };
};
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return quote(d.metadata.id);
};
var argument8 = false;
var base_0 = ["O","n","O","!","|","k","Yo","2C","j"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O","n","O","!","|","k","Yo","2C","j"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O","n","O","!","|","k","Yo","2C","j"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O","n","O","!","|","k","Yo","2C","j"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test315.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)