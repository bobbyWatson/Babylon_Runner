var patterns = [
	[
		{
			name : Mine,
			params : {
				position : {
					x 	: 0,
					y	: 4,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 2,
					y	: 2,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 4,
					y	: 4,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: -2,
					y	: 2,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: -4,
					y	: 4,
					z	: 0
				}
			}
		}
	],
    //Another
    [
        {
            name : Spike,
            params : {
                orientation : "top",
                length : 10,
                position : {x:0,y:5,z:0}
            }
        }
    ],
    //SpikeBottom
    [
        {
            name : Spike,
            params : {
                orientation : "bottom",
                length : 10,
                position : {x:0,y:1,z:0}
            }
        }
    ],
    //MovingWall
    [
        {
            name : MovingWall,
            params : {
                length : 10,
                position : {x:0,y:3,z:0}
            }
        }
    ],
    //MovingMine
    [
        {
            name : MovingMine,
            params : {
                position : {
                    x 	: 0,
                    y	: 5,
                    z	: 0
                }
            }
        }
    ]
]