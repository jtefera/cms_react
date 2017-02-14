function dateConditionalPlural(num, type) {
    if (num === 1) {
        return num + " " + type + " ago";
    } else {
        return num + " " + type + "s ago";
    }
}

function timeSince(ms) {
    var seconds = Math.floor((Date.now() - ms) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return dateConditionalPlural(interval, 'year');
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return dateConditionalPlural(interval, 'month');
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return dateConditionalPlural(interval, 'day');
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return dateConditionalPlural(interval, 'hour');
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return dateConditionalPlural(interval, 'minute');
    }
    return dateConditionalPlural(Math.floor(seconds), 'second');
}

module.exports = timeSince;