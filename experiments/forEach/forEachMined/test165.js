





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    assert.isTrue(that.env.indexOf(key) === -1);
};
var argument2 = true;
var argument3 = function (entity) {
 callbackArguments.push(arguments) 

    entity.draw(ctx);
};
var argument4 = true;
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    if (t && funct[t.value] === 'const') {
        error('E013', t, t.value);
    }
};
var argument6 = function (cookie) {
 callbackArguments.push(arguments) 

    _this.write(cookie, null, 0);
};
var argument7 = false;
var base_0 = ["`<5;",1.7976931348623157e+308,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`<5;",1.7976931348623157e+308,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`<5;",1.7976931348623157e+308,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`<5;",1.7976931348623157e+308,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test165.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)