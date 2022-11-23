function obj (personCity){
    personCity={
        Andrew:'Moscow',
        Ivan:'Kazan',
        Danil:'Ufa'
    }
    for(let key in personCity){
        console.log(key+ ':'+personCity[key])
    }
}
obj()
