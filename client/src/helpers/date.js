import datetimeDifference from "datetime-difference";

const sayTheTimeDiff = (pastDate) => {
    const now = new Date();
    const then = new Date(pastDate)
    const result = datetimeDifference(then, now);
    if(result['days']) {
        return `${result.days} days ago`
    } else if(result['hours']) {
        return `${result['hours']} hours ago`
    } else if(result['minutes']) {
        return `${result['minutes']} mins ago`
    } else {
        return "Just now"
    }
}

export { sayTheTimeDiff};
