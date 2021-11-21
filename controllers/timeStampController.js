exports.timeStamp = function (req, res) {
    if (!req.params.time) {
        res.send({ unix: Date.now(), utc: new Date(Date.now()).toUTCString() })
    }
    else {
        const time = req.params.time;
        const date = (isNaN(time)) ? new Date(time) : new Date(parseInt(time));
        (date == "Invalid Date") && res.send({ error: "Invalid Date" })
        res.send({ unix: date.getTime(), utc: date.toUTCString() })
    }
};
