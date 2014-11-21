var patterns = {
	"MineLine" : [
		{
			name : Mine,
			params : {	
				position : {
					x 	: 0,
					y	: 0,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 2,
					y	: 0,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 4,
					y	: 0,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 6,
					y	: 0,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 8,
					y	: 0,
					z	: 0
				}
			}
		}
	],

	"MineV" : [
		{
			name : Mine,
			params : {
				position : {
					x 	: 0,
					y	: 0,
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

    "SpikeTop" : [
        {
            name : Spike,
            params : {
                orientation : "top",
                length : 10,
                position : {x:0,y:0,z:0}
            }
        }
    ],

    "SpikeBottom" : [
        {
            name : Spike,
            params : {
                orientation : "bottom",
                length : 10,
                position : {x:0,y:0,z:0}
            }
        }
    ],

    "MovingWall1" : [
        {
            name : MovingWall,
            params : {
                length : 10,
                position : {x:0,y:0,z:0}
            }
        }
    ],

    "MovingMine" : [
        {
            name : MovingMine,
            params : {
                position : {
                    x 	: 0,
                    y	: 0,
                    z	: 0
                }
            }
        }
    ]
}