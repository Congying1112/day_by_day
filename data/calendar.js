var calendar_config = {
	header: {
		left: 'prev,next today',
		center: 'title',
		right: 'month,agendaWeek,agendaDay,listWeek'
	},
	firstDay: 1,
	// defaultDate: '2016-12-12',
	navLinks: true, // can click day/week names to navigate views
	editable: true,
	eventLimit: true, // allow "more" link when too many events
	eventOrder: [],
	businessHours: {
		// days of week. an array of zero-based day of week integers (0=Sunday)
		dow: [ 1, 2, 3, 4, 5], // Monday - Thursday
		start: '10:00', // a start time (10am in this example)
		end: '18:00', // an end time (6pm in this example)
	}
}