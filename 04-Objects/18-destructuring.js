function calculateCampaignMetrics(sent, opened, clicked) {
    const openRate = opened / sent;
    const clickRate = clicked / sent;
    const conversionRate = clicked / opened;
    return { openRate, clickRate, conversionRate };
}

const { openRate, clickRate, conversionRate } = calculateCampaignMetrics(
    8,
    6,
    10,
);

console.log(openRate, clickRate, conversionRate);
