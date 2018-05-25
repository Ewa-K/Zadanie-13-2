function creatingTime(givenTime) {

    if (givenTime !== null) {

        var minutes = (givenTime / 60).toFixed(0);
        var seconds = (givenTime % 60).toFixed(0);
        var hours = (minutes / 60).toFixed(0);
        var restOfHours = (minutes % 60).toFixed(0);

        if (givenTime < 60) {
            console.log(givenTime, 'seconds');
        } else if (givenTime >= 60 && givenTime < 3600) {
            console.log(minutes, 'minutes', seconds, 'seconds');
        } else if (givenTime >= 3600) {
            console.log(hours, 'hours', restOfHours, 'minutes', seconds, 'seconds');
        }
    }
}


exports.print1 = creatingTime;