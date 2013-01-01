/* Banner */
$(document).ready(function () {
	/* Criar a paginacao */
	$("<ul class='pagination'></ul>").appendTo('#banner_plugin');
	$('#banner_plugin .slides_container li').each(function (i) {
		$(this).addClass('banner_' + i);
		$('#banner_plugin .pagination').append("<li><a href='#banner_" + i + "'></a></li>");
	});
	/* Exibir o primeiro banner */
	$('#banner_plugin li:first-child').show().addClass('active');
	/* Fazer a paginacao funcionar */
	$('#banner_plugin .pagination a').click(function(e) {
		$('#banner_plugin .pagination li').each(function () {
			$(this).removeClass('active');
		});
		$('#banner_plugin .slides_container li').each(function () {
			$(this).hide(500);
		});
		$(this).parent().addClass('active');
		bannerNum = $(this).attr('href').replace('#','');
		$('#banner_plugin .slides_container li.' + bannerNum).show(500);
		e.preventDefault();
	});
});

/* Troca automatica dos banners */
function nextBanner() {
	if ($('#banner_plugin').is(':hover')) {
        return false;
    } else {
		if ($('#banner_plugin .pagination li:last').is('.active')) {
			$('#banner_plugin .pagination li:first-child').stop(true,true).find('a').click();
		} else {
			$('#banner_plugin .pagination li.active').stop(true,true).next().find('a').click();
		};
	};
}
setInterval('nextBanner()', 3000);

/* Alterar entre backgrounds aleatorios */
var bgImages = [ 'bg.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg', 'bg8.jpg' ];
var currImage = '';
var loop = 0;
var molde = 1;
var ant = 0;
function trocarBg() {
	ant = loop;
	loop = Math.floor((Math.random()*8));
	if (ant == loop) {
		trocarBg();
		return;
	}
	currImage = bgImages[loop];
	if (molde == 1){
		$('.background.img1').stop(true,true).fadeOut('slow');
		$('.background.img2').stop(true,true).fadeIn('slow').css("background-image", "url('img/"+currImage+"')");
		molde = 2;
	} else {
		$('.background.img2').stop(true,true).fadeOut('slow');
		$('.background.img1').stop(true,true).fadeIn('slow').css("background-image", "url('img/"+currImage+"')");
		molde = 1;
	}
	console.log('Imagem: ' + currImage);
	setTimeout('trocarBg()', 7000);
}
setTimeout('trocarBg()', 7000);