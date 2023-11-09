exports.personalMsg = (req, res, next) => {
    const uid = req.iduse
    personalMsg.create({ userId: uid, msg: req.body.chatmsg })
        .then(result => {
            res.status(200).json({ message: 'chat is in now database', success: true })
        }).catch(err => {
            console.log(err)
            res.status(500).json({ message: 'something went wrong', success: false })
        })
}