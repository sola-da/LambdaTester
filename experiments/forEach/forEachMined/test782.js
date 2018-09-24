





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    this.setOption(key, optList[key]);
};
var argument2 = 705;
var argument3 = null;
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
var argument5 = r_0;
var argument6 = function (ep) {
 callbackArguments.push(arguments) 

    request.put(ep, { form: { version: version } }, function (err, res) {
        console.log('notified endpoint', ep, res.statusCode, err);
    });
};
var argument7 = "";
var argument8 = function (npName) {
 callbackArguments.push(arguments) 

    var np = entityType.getNavigationProperty(npName);
    var fkPropName = np.relatedDataProperties[0].name;
    var oldFkValue = targetEntity.getProperty(fkPropName);
    var fk = new EntityKey(np.entityType, [oldFkValue]);
    var newFk = getMappedKey(tempKeyMap, fk);
    targetEntity.setProperty(fkPropName, newFk.values[0]);
};
var base_0 = [25,893,126,5e-324]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,893,126,5e-324]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,893,126,5e-324]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,893,126,5e-324]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test782.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)