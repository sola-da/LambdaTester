





var callbackArguments = [];
var argument1 = function (b) {
 callbackArguments.push(arguments) 

    branchArrPos++;
    return b.name == branchName;
};
var argument2 = function (err, ids) {
 callbackArguments.push(arguments) 

    errLogger(err);
    t.ok(ids.length > 54, 'The limit: 0 option did not return more than 50 ids.');
    t.done();
};
var argument3 = {"59":"","":59,"9.916734134847835e+307":59,"]b":2.950046481865898e+307,"1.7052472012586547e+308":1.2410714968242455e+308,"Pq<":2.680980992019458e+307,"6.929696752141672e+307":1.4551207762349895e+308,"1.5708106545373112e+308":969};
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    done();
};
var argument5 = null;
var argument6 = r_2;
var argument7 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same(ids, [
        2,
        3,
        8
    ], 'The found ids were incorrect.');
    t.done();
};
var argument8 = true;
var base_0 = [843,"]S","`Tn&x!","gy",":","k"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,"]S","`Tn&x!","gy",":","k"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,"]S","`Tn&x!","gy",":","k"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,"]S","`Tn&x!","gy",":","k"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findMined/test519.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)