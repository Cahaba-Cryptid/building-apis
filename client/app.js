const getChirps = async () => {
    try { 
        let chirps = await $.ajax({
        type: 'GET',
        url: '/api/chirps',
    })
        console.log(chirps)
    } catch (error) {
        console.log(error);
    }
}

getChirps();