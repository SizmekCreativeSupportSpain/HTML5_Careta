var adConfig = {
    contraido_width: 980,
    contraido_height: 90,
    panel_automatico_width: 1005,
    panel_automatico_height: 1000,
    panel_usuario_width: 1005,
    panel_usuario_height: 1000,
    delay_expansion: 1000,// milisegundos
    auto_cierre: 8000,    // milisegundos
    autoExpand: true,
    autoExpandFrequency: 1
};



////////Funciones comunes, NO ELIMINAR!!!!!!!!////////////////////

function checkIfAdKitReady(event)
{
  adkit.onReady(startAd);
}

function is_touch_device()
{
	return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

window.addEventListener("load", checkIfAdKitReady);

///////////////////////////////////////////////////////////////////