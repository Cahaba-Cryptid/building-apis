const displayChirps = chirps => {
    for (let key in chirps) {
        $('#chirps').append(`
        <article class="col-8-md">
            <div class="card m-1 p-1 shadow">
                <div class="card-body">
                    <h3 class="card-title">${chirps[key].User}</h3>
                    <p class="card-text">${chirps[key].chirp}
                </div>
            </div>
        </article>
        `)
    }
}

const getChirps = async () => {
    try {
        let chirps = await $.ajax({
            type: 'GET',
            url: '/api/chirps',
        });
        delete chirps['nextid'];
        displayChirps(chirps)
    } catch (error) {
        console.log(error);
    }
}

getChirps();