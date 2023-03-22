export function countPositiveFeedbackPercentage (total, good) {
    return (total === 0 ? '0' : Math.round((good/total)*100));
}