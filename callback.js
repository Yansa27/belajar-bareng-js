const ordercoffe = callback => {
    let coffe = null
    console.log("silahkan menunggu...");

    setTimeout(() => {
        coffe = "berhasil di buat";

        callback (coffe);
    } , 3000)
}

ordercoffe(coffe => {
    console.log(coffe);
})


// call back hell

