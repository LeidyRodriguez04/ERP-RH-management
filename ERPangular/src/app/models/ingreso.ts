
    export class ingresoComponent {
        usuario: string;
        password: string;
    
        constructor(usuario:string, password:string) {
            this.usuario = usuario
            this.password = password
        }
    
        login() {
        console.log(this.usuario);
        console.log(this.password);
        }
    }