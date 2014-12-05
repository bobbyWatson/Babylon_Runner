var patterns = [
	//Pattern 1
	[
		{
			name : Mine,
			params : {	
				position : {
					x 	: 4,
					y	: 2,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 5,
					y	: 4,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 6,
					y	: 6,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 7,
					y	: 8,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 8,
					y	: 10,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 18,
					y	: 14,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 19,
					y	: 12,
					z	: 0
				}
			}
		},
		{
			name : Mine,
			params : {	
				position : {
					x 	: 20,
					y	: 10,
					z	: 0
				}
			}
		},		
		{
			name : Mine,
			params : {	
				position : {
					x 	: 21,
					y	: 8,
					z	: 0
				}
			}
		},		
		{
			name : Mine,
			params : {	
				position : {
					x 	: 22,
					y	: 6,
					z	: 0
				}
			}
		},
		{
			name : Collectible,
			params : {
				position : {
					x 	: 15,
					y	: 7,
					z 	: 0
				}
			}
		},
		{
			name : Collectible,
			params : {
				position : {
					x 	: 15,
					y	: 4,
					z 	: 0
				}
			}
		},
		{
			name : Collectible,
			params : {
				position : {
					x 	: 2,
					y	: 2,
					z 	: 0
				}
			}
		}
	],
	//Patern 3
	[
		{
			name : MovingMine,
			params : {
				position : {
					x 	: 5,
					y	: 7,
					z 	: 0
				}
			}
		},
		{
			name : Collectible,
			params : {
				position : {
					x 	: 8,
					y	: 9,
					z 	: 0
				}
			}
		},
		{
			name : Collectible,
			params : {
				position : {
					x 	: 10,
					y	: 8,
					z 	: 0
				}
			}
		},
		{
			name : Collectible,
			params : {
				position : {
					x 	: 12,
					y	: 7,
					z 	: 0
				}
			}
		},		
		{
			name : Collectible,
			params : {
				position : {
					x 	: 10,
					y	: 6,
					z 	: 0
				}
			}
		},
		{
			name : Collectible,
			params : {
				position : {
					x 	: 8,
					y	: 5,
					z 	: 0
				}
			}
		},
		{
			name : Mine,
			params : {
				position : {
					x 	: 23,
					y	: 14.5,
					z 	: 0
				}
			}
		},
		{
			name : Mine,
			params : {
				position : {
					x 	: 23,
					y	: 1.5,
					z 	: 0
				}
			}
		}
	],
	//Patern 8
	[
		{
			name : MovingWall,
			params : {
				position : {
					x : 2,
					y : 14,
					z : 0
				},
				length : 7
			}
		},
		{
			name : Spike,
			params : {
				position : {
					x : 10,
					y : 0,
					z : 0
				},
				length : 10,
				orientation : "down"
			}
		},
		{
			name : MovingWall,
			params : {
				position : {
					x : 10,
					y : 2,
					z : 0
				},
				length : 7
			}
		},
		{
			name : Spike,
			params : {
				position : {
					x : 10,
					y : 0,
					z : 0
				},
				length : 30,
				orientation : "top"
			}
		},
		{
			name : MovingWall,
			params : {
				position : {
					x : 18,
					y : 14,
					z : 0
				},
				length : 7
			}
		},
		{
			name : Collectible,
			params : {
				position : {
					x : 2,
					y : 12,
					z : 0
				},
			}
		},
		{
			name : Collectible,
			params : {
				position : {
					x : 18,
					y : 12,
					z : 0
				},
			}
		},
		{
			name : Collectible,
			params : {
				position : {
					x : 10,
					y : 4,
					z : 0
				},
			}
		}
	]
    //Patern 10
    [
        {
            name : Mine,
            params : {
                position : {
                    x   : 1,
                    y   : 12,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 3,
                    y   : 2,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x : 2,
                    y : 7,
                    z : 0
                },
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 18,
                    y   : 15,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 18,
                    y   : 4,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x : 18,
                    y : 10,
                    z : 0
                },
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 31,
                    y   : 12,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 33,
                    y   : 2,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x : 32,
                    y : 7,
                    z : 0
                },
            }
        },
        //Patern 11
    [
        {
            name : Mine,
            params : {
                position : {
                    x   : 3.5,
                    y   : 8,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 5,
                    y   : 8,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 6.5,
                    y   : 8,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 8,
                    y   : 8,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 9.5,
                    y   : 8,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 11,
                    y   : 8,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 12.5,
                    y   : 8,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 14,
                    y   : 8,
                    z   : 0
                }
            }
        },
        
        {
            name : Mine,
            params : {
                position : {
                    x : 0,
                    y : 2,
                    z : 0
                },
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x : 0,
                    y : 14,
                    z : 0
                },
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x : 17.5,
                    y : 2,
                    z : 0
                },
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x : 17.5,
                    y : 14,
                    z : 0
                },
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x   : 8.5,
                    y   : 2,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x   : 8.5,
                    y   : 14,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x   : 6.5,
                    y   : 2,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x   : 6.5,
                    y   : 14,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x   : 10.5,
                    y   : 2,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x   : 10.5,
                    y   : 14,
                    z   : 0
                }
            }
        },
    ]
    //pattern 12
    [
        {
            name : MovingWall,
            params : {
                position : {
                    x : 8,
                    y : 8,
                    z : 0
                },
                length : 12
            }
        },
        {
            name : Spike,
            params : {
                position : {
                    x : 8,
                    y : 0,
                    z : 0
                },
                length : 6,
                orientation : "down"
            }
        },
        {
            name : Spike,
            params : {
                position : {
                    x : 8,
                    y : 6,
                    z : 0
                },
                length : 6,
                orientation : "top"
            }
        },
    ]
    //Patern 6
    [
        {
            name : Mine,
            params : {
                position : {
                    x   : 3,
                    y   : 1.5,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 3,
                    y   : 15,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 3,
                    y   : 2.5,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 3,
                    y   : 14,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 23,
                    y   : 1.5,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 23,
                    y   : 15,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 23,
                    y   : 2.5,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 23,
                    y   : 14,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x   : 13,
                    y   : 6,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x   : 11,
                    y   : 8,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x   : 15,
                    y   : 8,
                    z   : 0
                }
            }
        },
        {
            name : MovingWall,
            params : {
                position : {
                    x : 13,
                    y : 4,
                    z : 0
                },
                length : 12
            }
        },
    ]
    //Patern 6
    [
        {
            name : Mine,
            params : {
                position : {
                    x   : 3,
                    y   : 1.5,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 3,
                    y   : 15,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 3,
                    y   : 2.5,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 3,
                    y   : 14,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 23,
                    y   : 1.5,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 23,
                    y   : 15,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 23,
                    y   : 2.5,
                    z   : 0
                }
            }
        },
        {
            name : Mine,
            params : {
                position : {
                    x   : 23,
                    y   : 14,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x   : 13,
                    y   : 6,
                    z   : 0
                }
            }
        },
        {
            name : Collectible,
            params : {
                position : {
                    x   : 11,
                    y   : 8,
                    z   : 0
                }
            }
        },
        {
            name : MovingWall,
            params : {
                position : {
                    x : 13,
                    y : 4,
                    z : 0
                },
                length : 12
            }
        },
    ]
]