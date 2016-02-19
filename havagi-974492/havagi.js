/* yava */

$(document).ready(function(){

        if ($('.jheader-logo').length){
            $('.jheader-logo').each(function(){
                $(this).html($(this).html().replace(/h73/ig,'h170')
                );
            });
        }

        $('.container.top').prepend(
            '<div class="buhos">'+
            '<img height="100%" src="http://www.mimbreregalos.es/content/974492/buhos.png" />'+
            '</div>'
        );
        
        $('#id_option1389299 #mod2, #id_option1389299 #mod4').prepend(
            '<div class="pluma center">'+
            '<img src="http://www.mimbreregalos.es/content/974492/pluma.png" />'+
            '</div>'
        );
        
        $('#id_option1389299 #bodygym_general1 > section.section3.grey-bg').prepend(

        '<section class=" section4 white-bg">'+
        '<div class="container-interior">'+
	
		'<div class="row-fluid modulo center"  id="mod6" href="#form_mod6">'+
			'<div class="span12 padding-span">'+
				'<h1 class="title black-font center">'+
					'Catalogo de Productos</h1>'+
			'</div>'+
		'</div>'+
		
		'<div class="row-fluid" >'+
			'<ul class="thumbnails">'+

				'<li class="span2" style="width: 17.94%;">'+
					'<div id="mod20" href="#form_mod20" class="thumbnail modulo thumb-none">'+
						'<a href="#">'+
							'<div class="img0"><img src="http://thmbcache.com/thumbs/974492/w600h400/30079.jpg" /></div>'+
							'<div class="name-box">'+
								'<h3 class="title"><a href="http://mimbreregalos.es/invitaciones-originales">Invitaciones de Boda</a></h3>'+
							'</div>'+
						'</a>'+
					'</div>'+
				'</li>'+
				
				'<li class="span2" style="width: 17.94%;">'+
					'<div id="mod21" href="#form_mod21" class="thumbnail modulo thumb-none">'+
						'<a href="#">'+
							'<div class="img0"><img src="http://thmbcache.com/thumbs/974492/w600h400/1012.jpg" /></div>'+
							'<div class="name-box">'+
								'<h3 class="title"><a href="http://mimbreregalos.es/detalles-mujer">Detalles para Invitados</a></h3>'+
							'</div>'+
						'</a>'+
					'</div>'+
				'</li>'+
				
				'<li class="span2" style="width: 17.94%;">'+
					'<div id="mod22" href="#form_mod22" class="thumbnail modulo thumb-none">'+
						'<a href="#">'+
							'<div class="img0"><img src="http://thmbcache.com/thumbs/974492/w600h400/001.jpg" /></div>'+
							'<div class="name-box">'+
								'<h3 class="title"><a href="http://mimbreregalos.es/bautizo">Bautizo</a></h3>'+
							'</div>'+
						'</a>'+
					'</div>'+
				'</li>'+
				
				'<li class="span2" style="width: 17.94%;">'+
					'<div id="mod23" href="#form_mod23" class="thumbnail modulo thumb-none">'+
						'<a href="#">'+
							'<div class="img0"><img src="http://yoloimprimo.com/uploads/catalogo/categorias/20140310225742-icono-comunion.jpg" /></div>'+
							'<div class="name-box">'+
								'<h3 class="title"><a href="http://mimbreregalos.es/comunion-1">Comunión</a></h3>'+
							'</div>'+
						'</a>'+
					'</div>'+
				'</li>'+
				
				'<li class="span2" style="width: 17.94%;">'+
					'<div id="mod24" href="#form_mod24" class="thumbnail modulo thumb-none">'+
						'<a href="#">'+
							'<div class="img0"><img src="http://thmbcache.com/thumbs/974492/w600h400/Y80.jpg" /></div>'+
							'<div class="name-box">'+
								'<h3 class="title"><a href="http://mimbreregalos.es/figuras-tarta-1">Complementos</a></h3>'+
							'</div>'+
						'</a>'+
					'</div>'+
				'</li>'+
				
			'</ul>'+
		'</div>'+
		
		'</div>'+
		'</section>'

		); 
        
        
    })
