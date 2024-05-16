const getAll= (req, res)=> {
    return res.status(200).json({message: 'Controller está tudo OK!'})
}

module.exports= {
    getAll
}