function ElectricalAppliance(name, turn){
    this.getTurn=function (){console.log(`The ${name} switched ${turn}.`)}
}
ElectricalAppliance.prototype.getPowerConsumption=function (name, powerConsumption){
    console.log(`Power consumption ${name} is ${powerConsumption}.`)}
ElectricalAppliance.prototype.getManufacturing=function (name,manufacturing){
    console.log(`The ${name} manufactured by ${manufacturing}.`)
}

const lamp = new ElectricalAppliance('Lamp', 'off',)
const tv = new ElectricalAppliance('TV','on')
lamp.getTurn()
lamp.getPowerConsumption('Lamp','25w')
lamp.getManufacturing('Lamp','Xiaomi')
tv.getTurn()
tv.getPowerConsumption('TV','250w')
tv.getManufacturing('TV','Samsung')