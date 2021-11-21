exports.timeStamp = function(req, res) {
    const time = req.params.time;
    const date = (isNaN(time)) ? new Date(time) : new Date(parseInt(time))
    res.send({unix:date.getTime(), utc: date.toUTCString()})
};
