window.convertor = (function(){
    const measurment = ['kilometer','hectometer','decameter','meter','decimeter','centimeter','milimeter']

    function direction(small, large){
        let difference = large - small;
        return difference;
    }

    function getConverted(unitValueOne, unitValueTwo, unitOne, unitTwo){
        const unitIndexOne = measurment.indexOf(unitOne);
        const unitIndexTwo = measurment.indexOf(unitTwo);
        let lamda;
        console.log(unitValueOne, unitValueTwo, lamda, unitIndexOne, unitIndexTwo)
        if(unitValueOne) {
            lamda = 10**direction(unitIndexOne, unitIndexTwo)
            unitValueTwo = lamda * unitValueOne;
            return unitValueTwo;
        } else {
            lamda = 10**(-direction(unitIndexOne, unitIndexTwo))
            unitValueOne = lamda * unitValueTwo;
            return unitValueOne;
        }
    }

    return {
        getConverted,
        direction
    };

}());