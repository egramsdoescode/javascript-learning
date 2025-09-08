const campaign = {
    name: "Terminal.shop Campaign",
    messageCount: 100,
    creators: [
        {
            firstName: "ThePrime",
            lastName: "Agen",
            createdAt: new Date().toString(),
        },
        {
            firstName: "Teej",
            lastName: "Devries",
            createdAt: new Date().toString(),
        },
    ],
    location: {
        region: "North America",
    },
};

// You can use the ?. optional chaing operator in case region doesn't exist
function getRegion(campaign) {
    return campaign.location?.region;
}

// You should only use this operator if you know the property may not exist

console.log(getRegion(campaign));
