const { Photon } = require('@generated/photon')
let photon = new Photon()

async function createData() {
    try {
        let user = await photon.users.create({
            data: {
                name: "Rayhan",
                username: "rayhan"
            }
        })
        console.log(user)
    } catch (error) {
        console.log(error)
        console.log(error.message) // <-- I expect duplicate error/warning here
    }
}

createData()