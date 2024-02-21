const fs = require('fs')
const path = require('path')

let userFilePath = path.join(__dirname, '../usuariosRegistrados.json')
let userJSON = fs.readFileSync(userFilePath, 'utf-8')
let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'))

const controller = {
    register: (req, res) => {
        let ultimo = users.length
        let usuarioNuevo = {
            id: ultimo + 1,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            email: req.body.email,
            password: req.body.password,
            fecha_creación: new Date()
        }

        let userNuevo
        if (userJSON === "") { let userNuevo = [] }
        else { userNuevo = JSON.parse(userJSON) }

        userNuevo.push(usuarioNuevo)
        let userAux = JSON.stringify(userNuevo, null, "\t")
        fs.writeFileSync(userFilePath, userAux) 

    }
}

module.exports = controller