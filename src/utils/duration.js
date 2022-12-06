export const duration = (time) => {

    const hours = Math.floor(time.duration / 60);
    const minutes = time.duration - hours * 60;

    if (time.duration > 60) {
        return hours + "ч " + minutes + "м"
    }
    if (time.duration === 60) {
        return hours+ "ч"
    } else {
        return minutes + "м"
    }

}