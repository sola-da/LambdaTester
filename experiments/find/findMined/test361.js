





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    done('Find should not be executed since autoload failed');
};
var argument2 = {"T":100,"6.39088922184633e+307":"","L{>9S>":"Q","":""};
var argument3 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    t.same(ids, [
        users[0].id,
        users[1].id
    ], 'The found id did not match the id of the saved object.');
    t.done();
};
var argument4 = [122,82,213,893,823,1.7976931348623157e+308,627,-1,-100];
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc4._id;
};
var argument6 = r_0;
var argument7 = ["&","D","^?","jxPN"];
var argument8 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument9 = null;
var argument10 = [157,242,460,122,-100,126];
var base_0 = [">","1i","HwDg",-1,"@",",Ld",126,"2",-1,126]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">","1i","HwDg",-1,"@",",Ld",126,"2",-1,126]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">","1i","HwDg",-1,"@",",Ld",126,"2",-1,126]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [">","1i","HwDg",-1,"@",",Ld",126,"2",-1,126]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test361.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)