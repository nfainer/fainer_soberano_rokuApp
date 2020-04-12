export default {
    name: "TheVideoComponent",

    template: `
    <section class="row">
        <div class="row">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{currentMediaDetails.movies_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.movies_storyline"></p>
                <span class="media-time">{{currentMediaDetails.movies_runtime}}</span>
                <span class="media-year">{{currentMediaDetails.movies_year}}</span>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <video autoplay controls muted :src="'video/' + currentMediaDetails.movies_trailer" class="fs-video"></video>
            </div>
        </div>

        <div class="col-12 col-sm-9 media-info">
            <ul class="media-genres">
                <li>
                    <a href="action" @click.prevent="filterMedia('action')">Action</a>
                </li>
                <li>
                    <a href="comedy" @click.prevent="filterMedia('comedy')">Comedy</a>
                </li>
                <li>
                    <a href="family" @click.prevent="filterMedia('family')">Family</a>
                </li>
                <li>
                    <a href="fantasy" @click.prevent="filterMedia('fantasy')">Fantasy</a>
                </li>
                <li>
                    <a href="all" @click.prevent="retrieveVideoContent">All</a>
                </li>   
            </ul>
        </div>

        <div class="row movies-selection">
            <div class="col-12 col-sm-9">
                <div class="thumb-wrapper clearfix">
                    <img v-for="item in allRetrievedMedia" :src="'images/' + item.movies_cover" alt="media thumb" @click="loadNewMovie(item)" class="img-thumbnail rounded float-left media-thumb">
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
        this.retrieveVideoContent();
    },

    methods: {
        filterMedia(filter) {
            //debugger;

            let url = `./admin/index.php?media=movies&filter=${filter}`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.allRetrievedMedia = data;
                this.currentMediaDetails = data[0];
            })


        },



        retrieveVideoContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            // debugger;

            if (localStorage.getItem("cachedVideo")) {
                this.allRetrievedMedia = JSON.parse(localStorage.getItem("cachedVideo"));
                this.currentMediaDetails = this.allRetrievedMedia[0];

            } else {

                let url = `./admin/index.php?media=movies`;

                fetch(url)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("cachedVideo", JSON.stringify(data));

                    this.allRetrievedMedia = data;
                    this.currentMediaDetails = data[0];
                })

            }




        },

        loadNewMovie(movie){
            this.currentMediaDetails = movie;
        }
    }
}

