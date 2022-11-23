class ElectricalAppliance{
    constructor(name,turn,powerConsumption,manufacturing) {
        this.name=name
        this.getTurn=turn
        this.getPowerConsumption=powerConsumption
        this.getManufacturing=manufacturing
    }
    getInfo(){
        console.log('The '+this.name+' switched '+this.getTurn)
        console.log('Power consumption '+this.name+' is '+this.getPowerConsumption)
        console.log('The '+this.name+' manufactured by '+this.getManufacturing)
    }
}
const lamp=new ElectricalAppliance('Lamp', 'off','25w','Xiaomi')
const tv=new ElectricalAppliance('TV','on','250w','Samsung')
lamp.getInfo()
tv.getInfo()