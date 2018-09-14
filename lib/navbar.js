Vue.component('navbar-cp', {
    template: 
    `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Navbar</a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input type="text" placeholder="username" v-model="email" v-if="!token && !cektoken">
                
                <input type="password" placeholder="password" v-model="password" v-if="!token && !cektoken">
                <button class="btn btn-outline-light my-2 my-sm-0" type="button" v-on:click="login()" v-if="!token && !cektoken">Login</button>
                <button class="btn btn-outline-light my-2 my-sm-0" type="button" v-on:click="logout()" v-if="token || cektoken">Logout</button>

            </form>
        </div>
    </nav>
    `,
    props: ['cektoken'],
    data(){
        return{
                email: '',
                password: '',
                isLogin: '',
                isLogout: '',
                isToken: localStorage.getItem('token'),
                token: false,
                msgErr: ''
        }
    },
    methods: {
        login(){
            axios({ 
                method: 'POST',
                url: 'http://localhost:3000/users/login',
                data: {
                    email: this.email, 
                    password: this.password
                }
            })
            .then((result) => {
                localStorage.setItem('token', result.data.token)
                this.isLogin = localStorage.getItem('token')
                this.email = ''
                this.password = ''
            })
            .catch((err) => {
                console.log(err.response);
                this.msgErr = 'login failed'
                this.$emit('geterr', this.msgErr)
            });
        },

        logout(){
            this.isLogout = localStorage.getItem('token')
            localStorage.clear()
         
        }
       
    },
    watch: {
        isLogin: function(){
            this.token = true
            this.$emit('sendtoken', this.token)
        }, 
        isLogout: function(){
            this.token = false
            this.$emit('sendtokenlogout', this.token)
        }
        
    }
})