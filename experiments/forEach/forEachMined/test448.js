





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
var argument2 = true;
var argument3 = function (t) {
 callbackArguments.push(arguments) 

    q.defer(t);
};
var argument4 = "";
var argument5 = {"":""};
var argument6 = function (newRow) {
 callbackArguments.push(arguments) 

    cloneTest.push(newRow);
    list1Model.push(newRow);
};
var argument7 = {"1.6625869947356085e+308":714,"1.3446966591676503e+308":""};
var argument8 = function (c) {
 callbackArguments.push(arguments) 

    c.lastAccessed = now;
};
var argument9 = null;
var base_0 = [403,"rM","E",783,-1,714,"2"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,"rM","E",783,-1,714,"2"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,"rM","E",783,-1,714,"2"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,"rM","E",783,-1,714,"2"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test448.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)