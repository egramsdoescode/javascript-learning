const campaign = {
    name: "Jurassic Campaign",
    messageCount: 100,
    creator: {
        firstName: "Ian",
        lastName: "Grams",
        createdAt: new Date().toString(),
    },
};

function getCampaignCreator(campaign) {
    return campaign.creator.firstName;
}

function getTimeCreated(campaign) {
    return campaign.creator.createdAt;
}

console.log(getCampaignCreator(campaign));
console.log(getTimeCreated(campaign));
