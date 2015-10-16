# HTML5 Careta <img src="http://www.sizmek.es/eb/users/javiegido_/__logos/logo-dark.png" alt="Sizmek" width="57" height="15"  />

Plantilla genérica con todo lo necesario para crear formatos tipo careta utilizando workspaces de Sizmek.

## Descripción

La plantilla para montar una careta consta de tres ficheros html, uno para la zona contraida y otro para cada uno de los paneles. El panel automático, por norma general, debe ser un panel de poco peso y no puede llevar vídeo. Este panel se cerrará de forma automática pasados unos segundos.

Esta plantilla tiene implementada la funcionalidad para lanzar el panel automático con frecuencia, y el panel de usuario en rollover para desktop o click para entornos táctiles. La funcionalidad de expansión con delay también esta implementada y puede ser fácilmente modificada.


## Configuración 

Para editar el tamaño, el tiempo de delay para la expansión del panel de usuario y el de auto cierre del panel automático se configuran en el fichero *config.js* que se encuentra en el directorio raíz.

```
var adConfig = {
    "contraido_width": "980",
    "contraido_height": "90",
    "panel_automatico_width": "1005",
    "panel_automatico_height": "1000",
    "panel_usuario_width": "1005",
    "panel_usuario_height": "1000",
    "delay_expansion": "1000", // milisegundos
    "auto_cierre": "8000" // milisegundos
};
```


![Careta Prisa Setup](https://cloud.githubusercontent.com/assets/15161388/10549741/313276aa-7443-11e5-8c04-3b7df87db5a6.png)

