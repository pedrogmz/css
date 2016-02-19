/* yava */

$(document).ready(function(){

        $('#id_option1351597 .section2 .row-fluid:nth-child(3)').append(
            
    		'<div class="row-fluid center" id="mod20" href="#form_mod20">'+
				'<div class="span12 padding-span">'+
					'<h1 class="title black-font">'+
						'AEDIS es miembro de'+
					'</h1>'+
					'<h2 class="title black-font">'+
						'<a href="http://www.feaps.org/"><img src="http://acceso.siweb.es/content/973245/Logo_Plena_Inclusi_n.jpg" height="80" width="180"></a>'+
						'<a href="http://www.cermi.es/es-ES/Paginas/Portada.aspx"><img src="http://acceso.siweb.es/content/973245/Cermi.jpg" height="80" style="margin-left: 6px; "></a>'+
						'<a href="http://www.msssi.gob.es/"><img src="http://acceso.siweb.es/content/973245/logo_cndis_p.jpg" height="80" style=" margin-left: 6px;"></a>'+
						'<a href="http://www.feacem.es/FEACEM"><img src="http://acceso.siweb.es/content/973245/FEACEM.JPG" height="80" style=" margin-left: 6px;"></a>'+
						'<a href="http://www.cepes.es/"><img src="http://acceso.siweb.es/content/973245/CEPES.JPG" height="80" width="150" style=" margin-left: 6px;"></a>'+
						'<a href="http://www.fundaciononce.es/"><img src="http://acceso.siweb.es/content/973245/F.ONCE_vertical_con_leyenda.jpg" height="80" style="margin-left: 6px;"></a>'+
					'</h2>'+
				'</div>'+
			'</div>'
		); 
        
        if ($('.plantilla-public #bodygym_general14 .thumbnails').length){
            $('.plantilla-public #bodygym_general14 .thumbnails').each(function(){
                $(this).html($(this).html().replace(/w400h600c/ig,'w400h400c')

                );
            });
        }
        
    })
