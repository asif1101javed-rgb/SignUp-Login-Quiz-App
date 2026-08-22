// async function createAdminFirst(){
//     // var adminKey = await firebase.database().ref("admin").
//     await firebase.auth().createUserWithEmailAndPassword("admin@admin.com" , "admin1234")
//     .then(async(snap) => {
//         await firebase.database().ref("admin").child(snap.user.uid).set({
//             name :"Admin",
//             email :"admin@admin.com",
//             role :"Admin",
//             password :"admin1234",
//             adminkey: user.user.uid 
//         })
//            alert("admin create")
//     })
// }

