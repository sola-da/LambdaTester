





var callbackArguments = [];
var argument1 = function (engine) {
 callbackArguments.push(arguments) 

    files.push({
        cwd: './engines/' + engine + '/app/javascripts',
        src: '**',
        dest: 'tmp/requirejs',
        expand: true
    });
};
var argument2 = {"82":-100,"100":"","242":"","655":7.040431825087699e+307,"1.0464322875753329e+307":"","":"J2tY","_":"s","1.7827145331524614e+307":""};
var argument3 = function (e) {
 callbackArguments.push(arguments) 

    tmp.push(e);
};
var argument4 = function (c) {
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
var argument5 = "";
var argument6 = function (className) {
 callbackArguments.push(arguments) 

    var a = map[className];
    if (ignoreCase)
        a = a.toLowerCase();
    var list = a.split(splitChar || '|');
    for (var i = list.length; i--;)
        keywords[list[i]] = className;
};
var base_0 = [49,0,823,705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,0,823,705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,0,823,705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,0,823,705]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test568.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)