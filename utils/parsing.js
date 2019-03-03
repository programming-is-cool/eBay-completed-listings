function GetSold (itemsList) {
    let soldList = [];
    for(let i=0; i < itemsList.length; i++) {    
        if (itemsList[i].sellingStatus[0].sellingState[0] === 'EndedWithSales') {
            soldList.push(itemsList[i]);
        }
    }
    return soldList;
}

function createListingArray (listings) {
    let newListings = listings.map((listing) => ({
        id: Date.now(),
        title: listing.title[0],
        price: listing.sellingStatus[0].currentPrice[0].__value__,
        condition: listing.condition[0].conditionDisplayName[0],
        sellingStatus: listing.sellingStatus[0].sellingState[0],
        image: listing.galleryURL[0]
    }))

    return newListings;
}

export { GetSold, createListingArray };