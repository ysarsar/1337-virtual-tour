var APP_DATA = {
  "scenes": [
    {
      "id": "0-school-outdoor",
      "name": "school outdoor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.052201555683238254,
          "pitch": 0.09873967808915296,
          "rotation": 6.283185307179586,
          "target": "1-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-main-door",
      "name": "Main Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.1144916770842954,
        "pitch": 0.02152912695171416,
        "fov": 1.7366350364188659
      },
      "linkHotspots": [
        {
          "yaw": -0.025402149312188982,
          "pitch": 0.23288991649642377,
          "rotation": 0,
          "target": "0-school-outdoor"
        },
        {
          "yaw": 1.3368442570529186,
          "pitch": 0.3642507295216113,
          "rotation": 6.283185307179586,
          "target": "3-second-view"
        },
        {
          "yaw": 3.130985806240454,
          "pitch": 0.19419047296842784,
          "rotation": 0,
          "target": "2-passe"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7261378031000802,
          "pitch": 0.37236268720189614,
          "title": "Home",
          "text": "Here u will find all information about the school."
        }
      ]
    },
    {
      "id": "2-passe",
      "name": "passe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0338929420520397,
          "pitch": 0.4360805950171667,
          "rotation": 0,
          "target": "1-main-door"
        },
        {
          "yaw": -0.14230610003665767,
          "pitch": 0.4241245947268304,
          "rotation": 0,
          "target": "5-next-step"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-second-view",
      "name": "second view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 1.5325824630862694,
        "pitch": -0.029690788492539255,
        "fov": 1.7366350364188659
      },
      "linkHotspots": [
        {
          "yaw": -1.4934539964038418,
          "pitch": 0.34186154163099225,
          "rotation": 0,
          "target": "1-main-door"
        },
        {
          "yaw": 1.4361761191835347,
          "pitch": 0.296414757896283,
          "rotation": 0,
          "target": "4-resto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-resto",
      "name": "Resto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -1.431188764260952,
        "pitch": -0.1182129606051312,
        "fov": 1.7366350364188659
      },
      "linkHotspots": [
        {
          "yaw": 1.6261274671203854,
          "pitch": 0.3294132976854378,
          "rotation": 0,
          "target": "3-second-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-next-step",
      "name": "next step",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 0.17649906949187866,
        "pitch": 0.06700171372916053,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -2.9456376052636966,
          "pitch": 0.32823623383770517,
          "rotation": 0,
          "target": "2-passe"
        },
        {
          "yaw": -0.8202945469210263,
          "pitch": 0.6051764395624986,
          "rotation": 0.7853981633974483,
          "target": "6-tags"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-tags",
      "name": "tags",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -1.9056259313272221,
        "pitch": 0.26469709020613763,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -2.294776715904284,
          "pitch": 0.22934164835311677,
          "rotation": 7.853981633974483,
          "target": "7-just-one-more-step"
        },
        {
          "yaw": -0.6685529557910979,
          "pitch": 0.43791974003827505,
          "rotation": 4.71238898038469,
          "target": "5-next-step"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-just-one-more-step",
      "name": "just one more step",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 2.8329814240083717,
        "pitch": 0.21764783094233664,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 2.2739576275320212,
          "pitch": -0.003911376582406589,
          "rotation": 1.5707963267948966,
          "target": "8-first-floor"
        },
        {
          "yaw": -2.3306672957042984,
          "pitch": 0.2373010539095084,
          "rotation": 4.71238898038469,
          "target": "6-tags"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-first-floor",
      "name": "First floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.077684165264561,
        "pitch": 0.2590163673603971,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 3.0449378190186103,
          "pitch": 0.33623382864761453,
          "rotation": 0,
          "target": "9-other-view"
        },
        {
          "yaw": -1.4068622054378253,
          "pitch": 0.7006669861540544,
          "rotation": 1.5707963267948966,
          "target": "31-stears1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-other-view",
      "name": "other view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 2.9416741298810045,
        "pitch": 0.02752013339826931,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -0.17291046004106292,
          "pitch": 0.19826029594107197,
          "rotation": 0,
          "target": "8-first-floor"
        },
        {
          "yaw": -1.8051568233652304,
          "pitch": 0.2552167865048105,
          "rotation": 0,
          "target": "10-cluster"
        },
        {
          "yaw": 1.3770545372619019,
          "pitch": 0.14933385996306114,
          "rotation": 0,
          "target": "23-game-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-cluster",
      "name": "Cluster",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 2.978531262041475,
        "pitch": 0.13518701229214614,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -1.978777459499499,
          "pitch": 0.5215105042565522,
          "rotation": 5.497787143782138,
          "target": "11-view1"
        },
        {
          "yaw": -0.10478110583599332,
          "pitch": 0.3226924056438367,
          "rotation": 0,
          "target": "9-other-view"
        },
        {
          "yaw": 1.8255674556393444,
          "pitch": 0.5410677729482742,
          "rotation": 0.7853981633974483,
          "target": "21-view11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-view1",
      "name": "view1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -3.0599511416144516,
        "pitch": 0.1390324108708878,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 0.5740912167825734,
          "pitch": 0.1755698980010365,
          "rotation": 0,
          "target": "9-other-view"
        },
        {
          "yaw": 3.130221006203514,
          "pitch": 0.27161091774585344,
          "rotation": 0,
          "target": "12-view2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-view2",
      "name": "view2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.100169990629581,
        "pitch": -0.014212963610638951,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 0.02813303569591774,
          "pitch": 0.3910947026868108,
          "rotation": 0,
          "target": "11-view1"
        },
        {
          "yaw": 3.109192242366971,
          "pitch": 0.40806377908554836,
          "rotation": 0,
          "target": "13-view3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-view3",
      "name": "view3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -3.114797507514311,
        "pitch": 0.21394751045554727,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 0.27125341775303724,
          "pitch": 0.4361494544198603,
          "rotation": 0,
          "target": "12-view2"
        },
        {
          "yaw": -3.096754611058927,
          "pitch": 0.23729762849232294,
          "rotation": 0,
          "target": "14-view4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-view4",
      "name": "view4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 2.8395766565622687,
        "pitch": 0.23350352519686268,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -0.21291612309847707,
          "pitch": 0.29499703506492736,
          "rotation": 0,
          "target": "13-view3"
        },
        {
          "yaw": 2.9339870072684455,
          "pitch": 0.2593299195869214,
          "rotation": 0,
          "target": "15-view5"
        },
        {
          "yaw": 1.2457904676804645,
          "pitch": 0.5192757671573176,
          "rotation": 0,
          "target": "16-view6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-view5",
      "name": "view5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 2.978715724128959,
        "pitch": 0.1376199972334895,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 0.40064773710242463,
          "pitch": 0.22793172637696557,
          "rotation": 0,
          "target": "14-view4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-view6",
      "name": "view6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 1.594458739786262,
        "pitch": 0.06924235275556256,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -1.5619573821219657,
          "pitch": 0.5338285740719861,
          "rotation": 0,
          "target": "15-view5"
        },
        {
          "yaw": 1.7880067223459069,
          "pitch": 0.43099173003864877,
          "rotation": 0,
          "target": "17-view7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-view7",
      "name": "view7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 2.1431578412403915,
        "pitch": 0.44407669923334225,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -0.819460448949787,
          "pitch": 0.46661414577715377,
          "rotation": 0,
          "target": "16-view6"
        },
        {
          "yaw": 0.3215934460923844,
          "pitch": 0.3006064899318428,
          "rotation": 0,
          "target": "18-view8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-view8",
      "name": "view8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -0.2779111717641882,
        "pitch": 0.28570901223715595,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 3.015941412679105,
          "pitch": 0.33496074521720764,
          "rotation": 0,
          "target": "17-view7"
        },
        {
          "yaw": -0.07583869977935187,
          "pitch": 0.291356206384922,
          "rotation": 0,
          "target": "19-view9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-view9",
      "name": "view9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -0.002923697209315179,
        "pitch": 0.2619543744392452,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 3.032413511895344,
          "pitch": 0.4603397884189864,
          "rotation": 0,
          "target": "18-view8"
        },
        {
          "yaw": -0.04346340933497217,
          "pitch": 0.2639820187992168,
          "rotation": 0,
          "target": "20-view10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-view10",
      "name": "view10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 0.002345690500003883,
        "pitch": 0,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 3.0470188722131226,
          "pitch": 0.4075682729400132,
          "rotation": 0,
          "target": "19-view9"
        },
        {
          "yaw": -0.08918954292551362,
          "pitch": 0.48051545856696265,
          "rotation": 0,
          "target": "21-view11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-view11",
      "name": "view11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -0.22426069573629803,
        "pitch": 0.40880795505778167,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -0.41343699027484604,
          "pitch": 0.1521892916710481,
          "rotation": 0,
          "target": "9-other-view"
        },
        {
          "yaw": -2.972988152972899,
          "pitch": 0.28800304152222544,
          "rotation": 0,
          "target": "20-view10"
        },
        {
          "yaw": 1.4828849405820321,
          "pitch": 0.5216892926622876,
          "rotation": 0,
          "target": "22-view12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-view12",
      "name": "view12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 1.548392140827774,
        "pitch": 0.17035688092851586,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -1.7325953935766467,
          "pitch": 0.40815639093361256,
          "rotation": 0,
          "target": "21-view11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-game-room",
      "name": "game ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9574521730748238,
          "pitch": 0.4070419652571644,
          "rotation": 0,
          "target": "9-other-view"
        },
        {
          "yaw": 0.06689714889666831,
          "pitch": 0.37255726615153506,
          "rotation": 0,
          "target": "24-vgame1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-vgame1",
      "name": "Vgame1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 3.086434476066813,
          "pitch": 0.15667751181853973,
          "rotation": 0,
          "target": "9-other-view"
        },
        {
          "yaw": 1.315418280541106,
          "pitch": 0.22833955364934333,
          "rotation": 0,
          "target": "25-vgame2"
        },
        {
          "yaw": -0.04264080898418321,
          "pitch": 0.1749199642721706,
          "rotation": 0,
          "target": "26-vgame11"
        },
        {
          "yaw": -1.0962322836975371,
          "pitch": 0.2481127032611905,
          "rotation": 0,
          "target": "29-vgame5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-vgame2",
      "name": "Vgame2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 1.8636438377527664,
        "pitch": 0.2154536546191217,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -1.5119929160781957,
          "pitch": 0.26375856050072244,
          "rotation": 0,
          "target": "24-vgame1"
        },
        {
          "yaw": 0.08806278107535093,
          "pitch": 0.4159850309519051,
          "rotation": 0,
          "target": "27-vgame3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-vgame11",
      "name": "Vgame1.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -3.0882103797156155,
        "pitch": 0.15075780267402017,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 0.03193423328989553,
          "pitch": 0.18023136936508877,
          "rotation": 0,
          "target": "24-vgame1"
        },
        {
          "yaw": -1.0052057888006765,
          "pitch": 0.22361417569103992,
          "rotation": 4.71238898038469,
          "target": "25-vgame2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-vgame3",
      "name": "Vgame3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 0.23526472818599586,
        "pitch": 0.3862735662062615,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -2.9947563108145747,
          "pitch": 0.5732578600480096,
          "rotation": 12.566370614359176,
          "target": "25-vgame2"
        },
        {
          "yaw": -2.0434155408031387,
          "pitch": 0.22399222635601213,
          "rotation": 0,
          "target": "24-vgame1"
        },
        {
          "yaw": 0.3107948442997692,
          "pitch": 0.28063573693302857,
          "rotation": 0,
          "target": "28-vgame4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-vgame4",
      "name": "Vgame4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 0.20918157664648618,
        "pitch": 0.19023337385081973,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -3.0222966444536503,
          "pitch": 0.20467345846264706,
          "rotation": 0,
          "target": "25-vgame2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-vgame5",
      "name": "Vgame5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9901609415074049,
          "pitch": 0.28938306295724914,
          "rotation": 0,
          "target": "24-vgame1"
        },
        {
          "yaw": -0.09181561665532989,
          "pitch": 0.22709593069140865,
          "rotation": 0,
          "target": "30-vgame6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-vgame6",
      "name": "Vgame6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -0.002222831946838255,
        "pitch": 0.031485938601228725,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 2.9286056111221725,
          "pitch": 0.20769830910883513,
          "rotation": 0,
          "target": "29-vgame5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-stears1",
      "name": "stears1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 2.0470389306082915,
        "pitch": 0.22881000786892258,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 3.0915288650657047,
          "pitch": 0.7052460844431323,
          "rotation": 4.71238898038469,
          "target": "8-first-floor"
        },
        {
          "yaw": 1.4277509576959035,
          "pitch": -0.09071275536476264,
          "rotation": 1.5707963267948966,
          "target": "32-2nd-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-2nd-floor",
      "name": "2nd FLOOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.0992125625754667,
        "pitch": 0.2873039187188944,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 1.3520388402033259,
          "pitch": 0.22213160228292317,
          "rotation": 4.71238898038469,
          "target": "31-stears1"
        },
        {
          "yaw": 3.0213965331457224,
          "pitch": 0.37657357531152513,
          "rotation": 0,
          "target": "33-other-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-other-view-2",
      "name": "other view 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.111529951207304,
        "pitch": 0.28162673766629354,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 1.5909066021679328,
          "pitch": 0.1800856997114746,
          "rotation": 0,
          "target": "34-game-room-2"
        },
        {
          "yaw": -0.06699509384473679,
          "pitch": 0.15941148141129524,
          "rotation": 0,
          "target": "32-2nd-floor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.660533425741489,
          "pitch": 0.03457913311410721,
          "title": "Coffe",
          "text": "Coffe machine"
        }
      ]
    },
    {
      "id": "34-game-room-2",
      "name": "Game ROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -0.029370615213714757,
        "pitch": 0.16666330196104795,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 3.068178552293407,
          "pitch": 0.27771596843284385,
          "rotation": 0,
          "target": "33-other-view-2"
        },
        {
          "yaw": -0.08678220689282767,
          "pitch": 0.3668515254764202,
          "rotation": 0,
          "target": "35-game1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-game1",
      "name": "game1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 0.0061831262999998415,
        "pitch": 0,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 3.047068909112223,
          "pitch": 0.13522497108997023,
          "rotation": 0,
          "target": "33-other-view-2"
        },
        {
          "yaw": 0.07333341306444474,
          "pitch": 0.29457983081198336,
          "rotation": 0,
          "target": "36-game2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-game2",
      "name": "game2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0205949963827763,
          "pitch": 0.353865336564013,
          "rotation": 0,
          "target": "35-game1"
        },
        {
          "yaw": 2.048957165790254,
          "pitch": 0.24821528924554492,
          "rotation": 0,
          "target": "37-game3"
        },
        {
          "yaw": -2.3912887963941003,
          "pitch": 0.288623909727324,
          "rotation": 0,
          "target": "41-game7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-game3",
      "name": "game3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6503568154930033,
          "pitch": 0.29301225774818995,
          "rotation": 0,
          "target": "35-game1"
        },
        {
          "yaw": 0.10933798558728824,
          "pitch": 0.4442098172060227,
          "rotation": 0,
          "target": "38-game4"
        },
        {
          "yaw": 3.1011798885342055,
          "pitch": 0.25146377057052227,
          "rotation": 0,
          "target": "45-reunion2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-game4",
      "name": "game4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 0.002077773430261942,
        "pitch": 0.7044652643193068,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -2.1549825368915467,
          "pitch": 0.25155037873009434,
          "rotation": 0,
          "target": "35-game1"
        },
        {
          "yaw": 3.1339278326969175,
          "pitch": 0.44268323513183816,
          "rotation": 0,
          "target": "37-game3"
        },
        {
          "yaw": 0.39009833868552235,
          "pitch": 0.22744105961725758,
          "rotation": 0,
          "target": "39-game5"
        },
        {
          "yaw": -0.5087148364974858,
          "pitch": 0.35584493121301186,
          "rotation": 4.71238898038469,
          "target": "40-game6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-game5",
      "name": "game5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -1.3488203903691698,
        "pitch": 0.1311711285985453,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 1.5709443668728476,
          "pitch": 0.2938755441753642,
          "rotation": 0,
          "target": "38-game4"
        },
        {
          "yaw": 2.8734411386959575,
          "pitch": 0.4434626138893236,
          "rotation": 5.497787143782138,
          "target": "40-game6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-game6",
      "name": "game6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 1.8998556084347822,
        "pitch": 0.2837362983398428,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 0.4980610597357664,
          "pitch": 0.2753579240374613,
          "rotation": 0,
          "target": "38-game4"
        },
        {
          "yaw": -0.9614826569852042,
          "pitch": 0.45726429239322997,
          "rotation": 0,
          "target": "39-game5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-game7",
      "name": "game7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -1.5326513988189525,
        "pitch": 0.31705580925876475,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 1.3416614092700385,
          "pitch": 0.30545298045050195,
          "rotation": 0,
          "target": "35-game1"
        },
        {
          "yaw": -0.024001975030872202,
          "pitch": 0.18396916459875,
          "rotation": 0,
          "target": "42-game8"
        },
        {
          "yaw": -3.038715372143212,
          "pitch": 0.2258905774715103,
          "rotation": 0,
          "target": "44-reunion1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-game8",
      "name": "game8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -3.0391707749045285,
        "pitch": 0.08165833860741856,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": -0.2491215212168676,
          "pitch": 0.19244364795953928,
          "rotation": 0,
          "target": "41-game7"
        },
        {
          "yaw": -2.611917654805369,
          "pitch": 0.30034513052034306,
          "rotation": 0,
          "target": "43-game9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-game9",
      "name": "game9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.921455050889864,
          "pitch": 0.33251967951843575,
          "rotation": 0,
          "target": "42-game8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-reunion1",
      "name": "reunion1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9262539404642762,
          "pitch": 0.4941809087392919,
          "rotation": 0,
          "target": "41-game7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-reunion2",
      "name": "reunion2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -0.43144216986899053,
        "pitch": 0.0314070533105415,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 2.864459685311571,
          "pitch": 0.6181390133604125,
          "rotation": 0,
          "target": "37-game3"
        },
        {
          "yaw": -0.6155930529771876,
          "pitch": 0.409400466955951,
          "rotation": 0.7853981633974483,
          "target": "46-reunion21"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-reunion21",
      "name": "reunion2.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -2.697574756908228,
        "pitch": 0.2050695833806273,
        "fov": 1.7943896458092066
      },
      "linkHotspots": [
        {
          "yaw": 0.64744530466551,
          "pitch": 0.5463082001574531,
          "rotation": 0,
          "target": "45-reunion2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
