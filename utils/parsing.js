const noImage = '../assets/images/no_image.jpg'

// Removed from createListingArray function due to more 
// than one function using it.
function CheckSellingState (listingArray) {
    let status = listingArray.sellingStatus;
    return (
        status ? status[0].sellingState[0] : '--'
    );
}

function GetSold (itemsList) {
    let soldList = [];
    for(let i=0; i < itemsList.length; i++) {    
        if (CheckSellingState(itemsList[i]) === 'EndedWithSales') {
            soldList.push(itemsList[i]);
        }
    }
    return soldList;
}

function createListingArray (listings) {

    const CheckTitle = (listingArray) => {
        let title = listingArray.title;
        return (
            title ? title[0] : '--'
        )
    }

    const CheckPrice = (listingArray) => {
        let price = listingArray.sellingStatus;
        return (
            price ? price[0].currentPrice[0].__value__ : '00.0'
        )
    }

    const CheckCondition = (listingArray) => {
        let condition = listingArray.condition;
        return (
            condition ? condition[0].conditionDisplayName[0] : '--'
        )
    }

    const CheckImage = (listingArray) => {
        let image = listingArray.galleryURL;
        return (
            image ? image[0] : noImage
        );
    }
    let newListings = listings.map((listing) => ({
        id: Date.now(),
        title: CheckTitle(listing),
        price: CheckPrice(listing),
        condition: CheckCondition(listing),
        sellingStatus: CheckSellingState(listing),
        image: CheckImage(listing)
    }))

    return newListings;
}

export { GetSold, createListingArray };