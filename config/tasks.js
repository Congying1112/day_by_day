var tasks_config = {
	view:"treetable",
	columns:[
		{
			header: "Task Name",
			width: 200,
			template: "{common.treetable()} #value#"
		},
		{
			id:"remark",
			header:"Remark",
			width: 350
		},
		{
			id:"hours_needed",
			header:"Planed(h)",
			width:120
		},
		{
			id:"hours_used",
			header:"Done(h)",
			width:100
		},
		{
			id:"hours_left",
			header:"ToDo(h)",
			width:100
		}
	],
	autoheight:true,
	autowidth:true
}