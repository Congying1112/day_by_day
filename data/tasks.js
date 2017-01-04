var tasks = [
	{
		"value": "task1",
		"open": true,
		data: [
			{
				"value": "subtask1",
				"open": true,
				"data": [
					{
						"value": "subtask1_of_subtask1",
						"hours_needed": 100,
						"hours_used": 10
					},
					{
						"value": "subtask2_of_subtask1",
						"hours_needed": 200,
						"hours_used": 20
					}
				]
			},
			{
				"value": "subtask2",
				"open": true,
				"data": [
					{
						"value": "subtask1_of_subtask2",
						"hours_needed": 300,
						"hours_used": 30
					},
					{
						"value": "subtask2_of_subtask2",
						"hours_needed": 400,
						"hours_used": 40
					}
				]
			}
		]
	}
];
var tasks1 = [
					{ "value":"The Shawshank", "open":true, "data":[
						{ "name":"1.1", "value":"Part 1", "chapter":"alpha"},
						{ "name":"1.2", "value":"Part 2", "chapter":"beta", "open":true, "data":[
							{ "name":"1.2.1", "value":"Part 1", "chapter":"beta-twin"},
							{ "name":"1.2.2", "value":"Part 1", "chapter":"beta-twin"}
						]},
						{ "name":"1.3", "value":"Part 3", "chapter":"gamma" }
					]},
					{ "name":"2", "value":"The Godfather", "data":[
						{ "name":"2.1", "value":"Part 1", "chapter":"alpha" },
						{ "name":"2.2", "value":"Part 2", "chapter":"beta" }
					]}
				]