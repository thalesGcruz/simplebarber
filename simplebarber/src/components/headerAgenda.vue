 <template>            
    <div class="row">
        <div class="d-flex col-md-2 col-lg-2">
            <img src="../assets/img/profile/profile-default.jpg" alt="user-avatar" class="img-circle img-fluid img-perfil">
        </div>
        <div class="col-md-6 col-lg-10 col-md-7">
            <dl class="description">
                <dt>Nome</dt>
                <dd>Thales Gonçalves da Cuuz</dd>
                <dt> Telefone</dt>
                <dd>88 981206572</dd>
            </dl>
            <Datepicker class="input-date" />
        </div>
        
    </div>
 </template>
 <script>
    import Datepicker from 'vue3-date-time-picker';
    import 'vue3-date-time-picker/dist/main.css'
    export default {
        data(){
            return{
               data: null,     
            }
        },
        components:{
           Datepicker:Datepicker     
        }
    }
 </script>
 <style scoped>
    .img-perfil{
        margin-left:25px;
    }
    .description{
        position:static;
        padding-left:10px;
        border-left:8px solid #eee;
        font-size:15px;
    }
    .input-date{
        width:99%;
    }
 </style>