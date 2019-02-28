function RoundTo(n, digits) {
    if (digits === undefined) {
        digits = 0;
    }

    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    return Math.round(n) / multiplicator;
}


function SalePriceAverage(soldItemList) {
    let pricesList = [];
    for(let i=0; i < soldItemList.length; i++) {
        let parsedNum = parseFloat(soldItemList[i].sellingStatus[0].currentPrice[0].__value__)
        pricesList.push(parsedNum)
    }
    let average = (list) => list.reduce((accumulator, currentValue) => 
        accumulator + currentValue) / list.length;
    let avg = average(pricesList);

    return RoundTo(avg, 2);
}

export { SalePriceAverage };