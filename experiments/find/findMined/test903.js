





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    if (1 === arg.length)
        return name[0] == arg;
    return name == arg;
};
var argument2 = {"823":"X-","":"","`":"","7.955415878634281e+306":403};
var argument3 = ["HM","7N",126,"!`rIn9KP",0,"Z","z*:","wc",893,"e"];
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id1;
};
var argument5 = r_0;
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    return item.login == params.profile_id;
};
var argument7 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    Object.keys(docs[0]).length.should.equal(2);
    docs[0].a.should.equal(2);
    docs[0]._id.should.equal(newDoc._id);
    done();
};
var argument8 = ["+","Y",",","x",843,"!","(",893];
var base_0 = [25,893,843]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,893,843]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,893,843]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,893,843]
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
require("fs").writeFileSync("./experiments/find/findMined/test903.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)