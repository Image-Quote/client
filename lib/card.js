Vue.component('card-cp', {
    template: 
    `
    <div class="row">
        <div class="card text-center" style="width: 18rem; margin: 40px" v-for="(dummy, index) in datadummy">
            <img class="card-img-top" src="https://quotefancy.com/media/wallpaper/1600x900/15655-Charlie-Munger-Quote-Take-a-simple-idea-and-take-it-seriously.jpg"
                alt="Card image cap">
            <div class="card-body">
                <a class="btn btn-primary" data-toggle="collapse" @click="changeStatus" role="button"
                    aria-expanded="false" aria-controls="collapseExample" v-on:click="changeStatus(index)">
                    convert {{index}}
                </a>
                <div v-if="dummy.status">
                    <div class="card card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                        ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                        sapiente ea proident.
                    </div>
                    <div class="card card-footer">
                        <a href="#">share</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            datadummy: [
                    {
                        id: 1,
                        status: false
                    },
                    {
                        id: 2,
                        status: false
                    },
                    {
                        id: 3,
                        status: false
                    },
                    {
                        id: 4,
                        status: false
                    }
        
            ],
            isDisplay: false
        }
    },
    methods: {
        changeStatus(idx) {
            this.datadummy.forEach((data, index) => {
                if(index == idx){
                    if(data.status){
                     data.status = false
                    }else{
                        data.status = true
                    }
                }
            });
        }
    }
})