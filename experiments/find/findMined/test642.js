





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([
        1,
        7
    ], ids, 'Searching when min>max condition(ZREVRANGEBYSCORE) with limit is invalid.');
    t.done();
};
var argument2 = null;
var argument3 = function (result) {
 callbackArguments.push(arguments) 

    return result.id === discussionId;
};
var argument4 = null;
var argument5 = function (err, docs) {
 callbackArguments.push(arguments) 

    done('Find should not be executed since autoload failed');
};
var argument6 = true;
var argument7 = function (err, mappings) {
 callbackArguments.push(arguments) 

    debug('Role mappings found: %s %j', err, mappings);
    if (err) {
        if (done)
            done(err);
        return;
    }
    mappings.forEach(function (m) {
        addRole(m.roleId);
    });
    if (done)
        done();
};
var argument8 = [403,607,627,969,157,1.7976931348623157e+308,655,823,100];
var argument9 = true;
var base_0 = [122,"u`",100,"Lq","Y","r",126,157,"0R"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"u`",100,"Lq","Y","r",126,157,"0R"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"u`",100,"Lq","Y","r",126,157,"0R"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"u`",100,"Lq","Y","r",126,157,"0R"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test642.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)