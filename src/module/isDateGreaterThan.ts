export default function(date1: Date, date2: Date) {
    return date1.getTime() - date2.getTime() >= 1800000
}