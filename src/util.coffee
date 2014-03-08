class GameTimer
	lt : 0
	now : 0
	delta : 0
	ltr : 0
	ticks : 0
	frames : 0
	mspt : 0
	callback : null

	start: ->
		window.requestAnimationFrame(@callback)

	getMillis: ->
		return new Date().getTime()

	constructor: () ->
		@lt = @getMillis()
		@now = @lt
		@ltr = @lt
		@mspt = 10.0 / 1000.0
		@callback = (time) =>
			@update()

	update: () ->
		@now = @getMillis()
		@delta += (@now - @lt) * @mspt
		@lt = @now

		if @delta >= 10 then @delta = 10

		while @delta >= 1
			update()
			@ticks++
			@delta--

		render()
		@frames++

		if @now - @ltr >= 1000
			@ltr += 1000
			# console.log("#{@ticks} tps, #{@frames} fps")
			@ticks = 0
			@frames = 0

		if @game.running
			window.requestAnimationFrame(@callback)
