/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument2 = p2;
var argument3 = false;
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument5 = [25,783,1.7976931348623157e+308,82];
var argument6 = {"59":"=N","157":"n","1.107538355615099e+308":9.573067578488204e+307,"":"","&":"_",",":"GI(p","+":""};
var argument7 = "";
var argument8 = function resetEmailToValid() {
 callbackArguments.push(arguments) 

    casper.fillSelectors('.user-profile', { '#user-email': email }, false);
};
var argument9 = ["<o$",893,"E_dhe",100,213];
var argument10 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument11 = 1.3697957409864844e+308;
var argument12 = ["|k","p","dx;a","&","seE=fn"];
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test841.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)