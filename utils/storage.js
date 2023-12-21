const multer = require("multer")
// DISK STORAGE
// const storage = multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null,'./uploads')
//     },
//     filename: function(req,file,cb){
//         cb(null, new Date().toISOString().replace(/:/g, '-')+' '+file.originalname)
//     }
// })

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        cb(null,true)
    }else{
        cb(null,false)
    }
}
const storage = multer.memoryStorage()

const upload = multer({
    storage: storage,
    limits:{
        fileSize: 5000000
    },
    fileFilter: fileFilter
})
module.exports = upload