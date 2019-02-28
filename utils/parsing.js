function GetSold (itemsList) {
    let soldList = [];
    for(let i=0; i < itemsList.length; i++) {    
        if (itemsList[i].sellingStatus[0].sellingState[0] === 'EndedWithSales') {
            soldList.push(itemsList[i]);
        }
    }
    return soldList;
}

export { GetSold };