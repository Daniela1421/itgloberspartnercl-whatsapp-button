# Whatsapp Button

Botón custom que permite a los clientes contactar con Kanu Pet a través de WhatsApp, este componente recibe un numero de celular, un logo y un mensaje.

![image](https://user-images.githubusercontent.com/92064924/204362847-669b0c9d-acb3-4714-ad3e-81b24a04af10.png)
![image](https://user-images.githubusercontent.com/92064924/204362941-6c98ffdd-3586-412a-89a5-bb26c9b4b11d.png)

## Configuration 

### Paso 1 - Clonar

Realizar la [clonación](https://github.com/Daniela1421/itgloberspartnercl-whatsapp-button.git) de este repositorio.

### Paso 2 - Editar el Manifest.json 

Ingresar al archivo manifest.json y realizar modificaciones en: `vendor`, `name`, `version`, `title` y `description`
como se muestra en el siguiente ejemplo: 
```
{
  "vendor": "itgloberspartnercl",
  "name": "whatsapp-button",
  "version": "0.0.1",
  "title": "Whatsapp Button Component",
  "description": "Botón de Whatsapp que recibirá un teléfono, un logo y un mensaje",
}
```
Además, verifique que el archivo cuente con los siguientes builders: 
```
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  }
```
### Paso 3 - Instalar node-modules

Para realizar esta instalación de node-modules, debe estar ubicado en la carpeta de `react` de la aplicación y ejecutar el comando `yarn`, y tendrá instaladas todas las dependencias necesarias para usar esta plantilla.

### Paso 4 - Ejecutar el preview

Despues de realizar los pasos anteriores puede verificar si su componente está funcionando ejecutando el comando `vtex link` si todo funciona correctamente deberá ver en consola `Sending locale change event`, si por el contrario ocurre un error verifique los pasos anteriores y realice nuevamente este paso. 

### Paso 5 - Implementar el componente

Por último, para utilizar el componente debe agregarlo a las `dependencies` en el `manifest.json` de su tienda de la siguiente manera: vendor.name : version. Por ejemplo: 
```
  "dependencies": {
     "itgloberspartnercl.whatsapp-button": "0.x"
  }
```

## Contributors ✨

Daniela Ducuara Cañas
