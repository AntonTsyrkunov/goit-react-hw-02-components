export function countTotalFeedback (state) {
    const values = Object.values(state);
    return values.reduce((acc, value) => acc+value)
}