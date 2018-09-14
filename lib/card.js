Vue.component('card-cp', {
    template: 
    `
    <div class="row">
    
        <div class="card" style="width: 18rem; margin:40px" v-for="image in images">
        <a v-bind:href="image.url" target="_blank" download>
            <img class="card-img-top" v-bind:src="image.url" alt="Card image cap">
        </a>
            <div class="card-body">
                <p class="card-text">{{image.text}}</p>
                <hr/>
                <h5><i>In Bahasa :</i></h5>
                <p class="card-text"><i>{{image.translate}}</i></p>
            </div>
                <div class="card-footer" v-if="mountedtoken || watchtoken">
                <center>
                <a :href="\'https://www.facebook.com/sharer/sharer.php?u=\'+image.url" target="_blank" style="color:black">
                <i class="fa fa-facebook-square" style="font-size:37px"></i>
                </a>
                <a :href="\'https://plus.google.com/share?url=\'+image.url+\'&text=\'+image.text" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
                    <img src="https://www.gstatic.com/images/icons/gplus-32.png" alt="Share on Google+" style="padding-bottom:18px"/>
                </a>
                <a class="green-button small" :href="\'https://www.shareaholic.com/api/share/?v=1&amp;apitype=1&amp;apikey=8943b7fd64cd8b1770ff5affa9a9437b&amp;service=7&amp;title=Share%20API&amp;link=http://www.shareaholic.com/api/&amp;shortener=google&amp;template=\'+image.text" style="color:black" target="_blank">
                    <i class="fa fa-twitter-square" style="font-size:36px;"></i>
                </a>
                </center>
            </div>
        </div>
    </div>
    `,
    props: ['mountedtoken', 'watchtoken', 'watchimage'],
    data(){
        return{
            images:[],
            isStatus: '',
        }
    },
    methods: {
        getAllImage(){
            let self = this
            axios({
                method:"GET",
                url:"http://localhost:3000/images",
            })
            .then((result) => {
                self.images = result.data.data
                // console.log(self.images,'-------');
                
                self.images.forEach(image => {
                    image.status = false
                });
                // console.log(self.images,'oooooooo');
                
                
            }).catch((err) => {
                
                console.log(err);
                
            });
        },

        newGet(){
            this.isGetImage = this.watchimage
            console.log(this.isGetImage);
            
        }
    },
    watch: {

        watchimage: function(){
            this.getAllImage()
        }
    },
    created() {
        this.getAllImage()
        // this.changeStatus()
      
    },
})