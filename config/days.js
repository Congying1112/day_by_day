var holidays = [
	{
		"class": "周末 2d",
		"available_by_unit": 6,
		"day_count": 2,
		"start_dates": ["2017-01-07", "2017-01-14", "2017-01-21",
			"2017-02-11", "2017-02-18", "2017-02-25",
			"2017-03-04", "2017-03-11", "2017-03-18", "2017-03-25",
			"2017-04-08", "2017-04-15", "2017-04-22",
			"2017-05-06", "2017-05-13", "2017-05-20", 
			"2017-06-03", "2017-06-10", "2017-06-17", "2017-06-24", 
			"2017-07-01", "2017-07-08", "2017-07-15", "2017-07-22", "2017-07-29", 
			"2017-08-05", "2017-08-12", "2017-08-19", "2017-08-26", 
			"2017-09-02", "2017-09-09", "2017-09-16", "2017-09-23", 
			"2017-10-14", "2017-10-21", "2017-10-28", 
			"2017-11-04", "2017-11-11", "2017-11-18", "2017-11-25", 
			"2017-12-02", "2017-12-09", "2017-12-16", "2017-12-23", "2017-12-30"
		]
	},
	{
		"class": "小长假 3d",
		"available_by_unit": 0,
		"day_count": 3,
		"start_dates": ["2016-12-31", "2017-04-02", "2017-04-29", "2017-05-28"]
	},
	{
		"class": "春节 10d",
		"available_by_unit": 0,
		"day_count": 10,
		"start_dates": ["2017-01-26"]
	},
	{
		"class": "中秋国庆 8d",
		"available_by_unit": 0,
		"day_count": 8,
		"start_dates": ["2017-10-01"]
	}
];

var days_config = {
	view:"treetable",
	columns:[
		{
			id: "class",
			header: "类别",
			width: 100
		},
		{
			id: "preplan",
			header: "安排",
			width: 250
		},
		{
			id:"total_count",
			header:"总数",
			width:100
		},
		{
			id:"used_count",
			header:"已用数量",
			width:100
		},
		{
			id:"left_count",
			header:"剩余数量",
			width:100
		},
		{
			id:"available_by_unit",
			header:"单位可用时长",
			width:100
		},
		{
			id:"total_hours",
			header:"总时长",
			width:100
		},
		{
			id:"used_hours",
			header:"已用时长",
			width:100
		},
		{
			id:"left_hours",
			header:"剩余时长",
			width:100
		}
	],
	autoheight:true,
	autowidth:true
}