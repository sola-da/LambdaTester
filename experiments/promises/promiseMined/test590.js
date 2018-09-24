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
var argument2 = null;
var argument3 = function (jqxhr, statusTxt, error) {
 callbackArguments.push(arguments) 

    self.showErrors(jqxhr.statusCode().status + ' ' + error);
};
var argument4 = r_0;
var argument5 = function () {
 callbackArguments.push(arguments) 

    deferred.resolve(mongoWhere);
};
var argument6 = p2;
var argument7 = null;
var argument8 = null;
var argument9 = function (result) {
 callbackArguments.push(arguments) 

    result.booths.forEach(function (booth) {
        booth.sellSheet = _.filter(booth.sellSheet, function (item) {
            return productName == item.item;
        });
        booth.hasVarieties = false;
    });
    return result;
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test590.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)