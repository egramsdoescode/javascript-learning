const campaignRecord = {
    campaignName: "Welcome Campaign",
    senderName: "Elsa",
};

// You can add a property to an object like so, EVEN if the object is declared as constant
function addID(campaignRecord) {
    campaignRecord.id =
        campaignRecord.campaignName + "-" + campaignRecord.senderName;
}

addID(campaignRecord);

console.log(campaignRecord.id);
