export default {
    name: "AudioComponent",

    template: `
    <section class="row audio-component">
    <div class="col-12 order-1 order-md-2 col-md-9 media-container">
        <div class="col-12 order-2 order-md-1 col-md-3 media-container">
        <h4 class="media-title">{{currentMediaDetails.music_title}}</h4>
        <span class="media-year">{{currentMediaDetails.music_year}}</span>
        </div>
        <audio :src="'audio/' + currentMediaDetails.music_path" controls></audio>
    </div>

    <div class="row">
        <div class="col-12 audio-selection">
            <div class="thumb-wrapper clearfix">
                <img v-for="item in allRetrievedMedia" :src="'images/' + item.music_cover" alt="media thumb" @click="loadNewMovie(item)" class="img-thumbnail rounded float-left media-thumb">
            </div>
        </div>
    </div>  
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedMedia: []
        }
    },

    created: function() {
        this.retrieveAudioContent();
    },

    methods: {
        // filterMedia(filter) {
        //     //debugger;

        //     let url = `./admin/index.php?media=music&filter=${filter}`;

        //     fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         this.allRetrievedMedia = data;
        //         this.currentMediaDetails = data[0];
        //     })


        // },

        retrieveAudioContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            // debugger;

            // if (localStorage.getItem("cachedAudio")) {
            //     this.allRetrievedMedia = JSON.parse(localStorage.getItem("cachedAudio"));
            //     this.currentMediaDetails = this.allRetrievedMedia[0];

            // } else {

                let url = `./admin/index.php?media=music`;

                fetch(url)
                .then(res => res.json())
                .then(data => {
                    // localStorage.setItem("cachedAudio", JSON.stringify(data));

                    this.allRetrievedMedia = data;
                    this.currentMediaDetails = data[0];
                })

            // }




        },

        loadNewMovie(music){
            this.currentMediaDetails = music;
        }
    
    }
}