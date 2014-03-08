initDomContent = () ->
	$(".resImg").hover(() ->
		$(@).animate(
			{
				width: "+=15"
				height: "+=15"
				left: "-=7"
				top: "-=7"
			}, 500)
	, () ->
		$(@).animate(
			{
				width: "-=15"
				height: "-=15"
				left: "+=7"
				top: "+=7"
			}, 500)
	)