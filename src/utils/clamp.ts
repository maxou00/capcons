export function clamp(value: number, from: number, to: number) {
    if(value > to) {
        return to;
    }
    if(value < from) {
        return from;
    }
    return value;
}