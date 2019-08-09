function humanReadable(seconds) {
    let second = seconds % 60;
    let minute = ((seconds - second) / 60) % 60;
    let hour = ((seconds - (minute * 60) - second) / 3600)
    if (second < 10) {second = '0' + second}
    if (minute < 10) {minute = '0' + minute}
    if (hour < 10) {hour = '0' + hour}
    return hour + ':' + minute + ':' + second;
}