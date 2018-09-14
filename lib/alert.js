Vue.component('alert-cp',{
    template: 
    `
    <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="msgerr">
        <strong>{{msgerr}}</strong> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    `,
    props: ['msgerr']
})