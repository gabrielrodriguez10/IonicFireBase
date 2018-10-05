# IonicFireBase

* Este proyecto permite conectar con FireBase.

- Creamos una cuenta en FireBase y en el modulo de DataBase en reglas creamos la siguiente regla, posteriormente se da clik en publicar.
    {
        "rules": {
            ".read": "auth == null",
            ".write":  "auth == null",
        }
    }

- En el Storage de FireBase cambiamos la autenticacion (auth) a null para que no pida autenticacion al momento de cargar archivos.

- Agregamos datos a nuestra base de datos FireBase
    ionicfirebase-bd3a1
        post
            1
                img: "https://cdn-images-1.medium.com/max/1200/1*d_w0..."
                titulo: "imagen1"
            2
                img: "https://udemy-images.udemy.com/course/750x422/9..."
                titulo: "imagen2"

- Instalamos AngularFireBase
    * npm install angularfire2 firebase promise-polyfill –save
    * npm i rxjs@6 rxjs-compat@6 promise-polyfill --save

- Copiamos la configuracion de FireBase a la configuracion de AngularFireBase
    export const firebaseConfig = {
        ApiKey: "………………",
        AuthDomain: "…………………",
        databaseURL: "https://pruebaslocales-9b725.firebaseio.com",
        projectId: "pruebaslocales-9b725",
        storageBucket: "pruebaslocales-9b725.appspot.com",
        MessagingSenderId: "………………………"
    };

- Agregamos librerias para la camara del dispositivo.
    * ionic cordova plugin add cordova-plugin-camera
    * npm install --save @ionic-native/camera

- Abrir la camara del dispositivo Modificamos config.xml 
    * widget id="co.harley.pruebasfirebase"

- Agregamos libreria image-picker
    * ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="your usage message"
    * npm install --save @ionic-native/image-picker
    * ionic cordova plugin add cordova-plugin-telerik-imagepicker

- Para subir archivos a FireBase se crea un nuevo provider
    * ionic g provider cargaArchivo

