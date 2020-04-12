export default {
    props: ['liveuser'],

    template: `
    <div class="col-xs-12 col-sm-6 col-md-4 mx-auto">
        <div class="card rounded" @click="navToUserHome()">
            <div class="card-body text-center">
                <p>{{ liveuser.uname }}</p>
            </div>
        </div>

        
        
    </div>`,

    created: function() {
        if (this.liveuser.avatar === null || this.liveuser.avatar === "null") {
            this.liveuser.avatar = "temp_avatar";
        }
    },

    methods: {
        navToUserHome() {
            // debugger;

            // send this user to its home page, and pass the user object to the home page
            this.$router.push({ name: "home", params: { currentuser: this.liveuser }})
        }
    }

}