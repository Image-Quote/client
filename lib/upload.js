Vue.component('upload-cp', {
    template: 
    `
    <div class="row" id="box-upload">
        <div class="button-upload">
            <center>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" v-on:change="getImage" accept="image/*">
            <button type="button" class="btn btn-primary" v-on:click="uploadImage">upload</button>
            </center>
        </div>
    </div>
    `,
    data:function(){
        return {
            image:'',
            getagain: '',
        }
    },
    
    methods:{
        uploadImage(){
            // console.log('masuuk upload');
            
            let self = this
            let formData = new FormData()
            formData.append("image", this.image)
            axios.post("http://localhost:3000/images",formData)
            .then((result) => {
                // console.log('masuuk then',result);
                this.$emit('getagain', result)
                console.log(result);
                
                
            }).catch((err) => {
                console.log(err);
                
            });
        },
        getImage(event){
            this.image = event.target.files[0] 
        }

    }
})