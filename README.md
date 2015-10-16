# HTML5 Careta <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/logo-dark.png" alt="Sizmek" width="57" height="15" /></a>

Plantilla genérica con todo lo necesario para crear formatos tipo careta utilizando workspaces de Sizmek.

## Descripción

La plantilla para montar una careta consta de tres ficheros html, uno para la zona contraida y otro para cada uno de los paneles. El panel automático, por norma general, debe ser un panel de poco peso y no puede llevar vídeo. Este panel se cerrará de forma automática pasados unos segundos.

Esta plantilla tiene implementada la funcionalidad para lanzar el panel automático con frecuencia, y el panel de usuario en rollover para desktop o click para entornos táctiles. La funcionalidad de expansión con delay también esta implementada y puede ser fácilmente modificada.


## Configuración 

Para cambiar el tamaño de los elementos del formato, el tiempo de delay para la expansión del panel de usuario o el de auto cierre del panel automático, modifica los valores del fichero *config.js* que se encuentra en el directorio raíz de la plantilla.

```javascript
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

Una vez configurado esto ya puedes trabajar tu creatividad sobre la plantilla.

La expansión del formato no se puede probar en local, es necesario subir la pieza a la [Plataforma de Sizmek](https://platform.mediamind.com) para poder revisar que todo funciona correctamente.

Cuando tengas terminada la creatividad, sube la pieza a la plataforma. En este caso, el formato que debes seleccionar en la plataforma es ** HTML5 EXPANDABLE BANNER **. ¿No tienes claro cómo? Puedes seguir esta pequeña guia [Subir Creatividades Sizmek](http://sizmek.es/wiki/doku.php?id=subir_creatividades_html5).

Tambien tendras que añadir los paneles y darles el tamaño correspondiente. Si tienes que realizar algun cambio despúes de configurar la creatividad y reemplazar alguno de los html de los paneles tendrás que volver a configurar el tamaño de los paneles.

Cuando hayas hecho esto deberias tener algo como en este ejemplo de PRISA:

![Careta Prisa Setup](https://cloud.githubusercontent.com/assets/15161388/10549741/313276aa-7443-11e5-8c04-3b7df87db5a6.png)

Recuerda que si tienes cualquier duda puedes ponerte en contacto con el equipo de <a href="mailto:creativesupport-spain@sizmek.com">Soporte Creativo de Sizmek</a>
