function calculateCampaignMetrics(sent, opened, clicked) {
    const openRate = opened / sent;
    const clickRate = clicked / sent;
    const conversionRate = clicked / opened;
    return { openRate, clickRate, conversionRate };
}

const campaignMetrics = calculateCampaignMetrics(8, 6, 10);

console.log(
    campaignMetrics.openRate,
    campaignMetrics.clickRate,
    campaignMetrics.conversionRate,
);
