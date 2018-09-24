/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (_header) {
 callbackArguments.push(arguments) 

    assert.same(headers['Content-Type'], _header);
};
var argument2 = p2;
var argument3 = {"59":7.763249420448093e+307,"157":"","":"]","1.16854316670778e+308":"","V2_":1.2182049427834077e+308};
var argument4 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument5 = false;
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    destination.requireDestinationTag = false;
    destination.balance = 0;
    return destination;
};
var argument7 = function () {
 callbackArguments.push(arguments) 

    return sh.run([
        '-c',
        adb + ' push "' + utils.joinPath(profileFolder, 'webapps') + '" ' + webapps_path
    ]);
};
var argument8 = {"0":"","4":"0G4","":"=dx"};
var argument9 = 1.071565841167593e+308;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8,argument9)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test667.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)