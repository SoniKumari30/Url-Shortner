const Url = require('../models/url')
const urlsCltr = { }

urlsCltr.list = (req, res) => {
    Url.find()
    .then((urls) => {
        res.json(urls)
    })
    .catch((err) => {
        res.json(err)
    })
}

urlsCltr.create =(req, res) => {  
    const body = req.body   
     const url = new Url(body) 
      url.save()      
        .then((url) => {        
                res.json(url)
                    })
            .catch((err) => {
               res.json(err)
                    })
            
}

urlsCltr.show = (req, res) => {
    const id = req.params.id 
    Url.findById(id)
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json(err)
        })
}

urlsCltr.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Url.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json(err)
        })

}
urlsCltr.destroy = (req, res) => {
    const id = req.params.id 
    Url.findByIdAndDelete(id)
        .then((url) => {//
            res.json(url)
        })
        .catch((err) => {
            res.json(err)
        })
}
// urlsCltr.redirect = (req, res) => {
//     const hash = req.params.hash
//     Url.findAndUpdate({hashedUrl:hash}, {new: true, runValidators: true})
//     .then((url) => { 
//         res.json(url)
//     })
//     .catch((err) => {
//         res.json(err)
//     })
// }

module.exports = urlsCltr