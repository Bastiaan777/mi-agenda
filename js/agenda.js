
var app = new Vue({
    el: '#app',
    data: {
        contactos: [],
        nuevoContacto: {
            nombre: '',
            email: '',
            telefono: ''
        }
    },
    created() {
        this.cargarContactos();
    },
    methods: {
        cargarContactos() {
            db.collection('contactos').onSnapshot((snapshot) => {
                this.contactos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            });
        },
        eliminarContacto(contacto) {
            db.collection('contactos').doc(contacto.id).delete();
        },
        agregarContacto() {
            db.collection('contactos').add({...this.nuevoContacto});
            this.nuevoContacto.nombre = '';
            this.nuevoContacto.email = '';
            this.nuevoContacto.telefono = '';
        }
    }
});

