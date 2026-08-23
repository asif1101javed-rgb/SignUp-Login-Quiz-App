// Create Admin or Admin SignUp

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


async function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    await firebase.auth().signInWithEmailAndPassword(email.value ,password.value)
    .then((snap)=>{
        console.log(snap.user.uid)
        localStorage.setItem("admin",true);
        localStorage.setItem("userid",snap.user.uid);

        console.log(snap.user.uid);
    })
    .catch((e)=>{
        console.log(e);
    })
}