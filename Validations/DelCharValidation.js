
const DelCharValFunc = (req, res, next) => {
    const {userName} = req.body;
    if(!userName){
        res.status(200).json({
            Code:"0000",
            Message:"Username invalid/missing"
        })
        return;
    }
    next();
}

module.exports ={DelCharValFunc}