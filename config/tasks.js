var tasks_config = {
	view:"treetable",
	columns:[
		{
			header: "Task Name",
			width: 350,
			template: "{common.treetable()} #value#"
		},
		{
			id:"hours_needed",
			header:"Hours Needed",
			width:100
		},
		{
			id:"hours_used",
			header:"Hours Used",
			width:100
		},
		{
			id:"hours_left",
			header:"Hours Left",
			width:100
		}
	],
	autoheight:true,
	autowidth:true
}