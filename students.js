var users = document.getElementById("users")


async function GetAllUsers() {

    await firebase.database().ref("user").get().then((db) => {
        console.log(db.val()) //convert read form 
        var data = Object.values(db.val()) //data convert array
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i]["name"])

            if (data[i]["image"] == undefined || data[i]["image"] == "") {
                users.innerHTML += `
         <tr>
         <td>${i + 1}</td>
                            <td>${data[i]["name"]}</td>
                            <td>${data[i].email}</td>
                            <td>
                          No image</td>
                            <td>
                                <span class="status">Active</span>
                            </td>
                        </tr>
        `
            }

            else {
                users.innerHTML += `
         <tr>
         <td>${i + 1}</td>
                            <td>${data[i]["name"]}</td>
                            <td>${data[i].email}</td>
                            <td>
                          <img src='${data[i]["image"]}' /></td>
                            <td>
                                <span class="status">Active</span>
                            </td>
                        </tr>
        `
            }

        }
        // totalStd.innerText=data.length
    })
        .catch((e) => {
            console.log(e)
        })

}

GetAllUsers()