import Character from "../models/character";

export const CHARACTERS = [
  //new Rad(0, "Ana", "React Native", "D"),
  //hp, atk, def, em, er, cr, cd, eb, pb
  // id, charcater, image, splash, vision, vision_image
  new Character(
    0,
    "Raiden Shogun",
    "https://paimon.moe/images/characters/raiden_shogun.png",
    "https://paimon.moe/images/characters/full/raiden_shogun.png",
    "Electro",
    "https://paimon.moe/images/elements/electro.png",
    [
      [
        "C1",
        "https://paimon.moe/images/skills/raiden_shogun/constellation_1.png",
      ],
      [
        "C2",
        "https://paimon.moe/images/skills/raiden_shogun/constellation_2.png",
      ],
      [
        "C3",
        "https://paimon.moe/images/skills/raiden_shogun/constellation_3.png",
      ],
      [
        "C4",
        "https://paimon.moe/images/skills/raiden_shogun/constellation_4.png",
      ],
      [
        "C5",
        "https://paimon.moe/images/skills/raiden_shogun/constellation_5.png",
      ],
      [
        "C6",
        "https://paimon.moe/images/skills/raiden_shogun/constellation_6.png",
      ],
    ],
    [0.396, 0.429, 0.461, 0.507, 0.539, 0.576, 0.627, 0.678, 0.728, 0.784],
    [
      1.172, 1.26, 1.348, 1.465, 1.553, 1.641, 1.758, 1.875, 1.992, 2.11, 2.227,
      2.344, 2.49,
    ],
    [
      4.01 + 0.0389 * 60,
      4.31 + 0.0418 * 60,
      4.61 + 0.0447 * 60,
      5.01 + 0.0486 * 60,
      5.31 + 0.0515 * 60,
      5.61 + 0.0544 * 60,
      6.01 + 0.0583 * 60,
      6.41 + 0.0622 * 60,
      6.81 + 0.061 * 60,
      7.21 + 0.07 * 60,
      7.62 + 0.0739 * 60,
      8.02 + 0.078 * 60,
      8.52 + 0.083 * 60,
    ],
    [
      "https://paimon.moe/images/skills/raiden_shogun/talent_1.png",
      "https://paimon.moe/images/skills/raiden_shogun/talent_2.png",
      "https://paimon.moe/images/skills/raiden_shogun/talent_3.png",
    ]
  ),
  new Character(
    1,
    "Eula",
    "https://paimon.moe/images/characters/eula.png",
    "https://paimon.moe/images/characters/full/eula.png",
    "Cryo",
    "https://paimon.moe/images/elements/cryo.png",
    [
      ["C1", "https://paimon.moe/images/skills/eula/constellation_1.png"],
      ["C2", "https://paimon.moe/images/skills/eula/constellation_2.png"],
      ["C3", "https://paimon.moe/images/skills/eula/constellation_3.png"],
      ["C4", "https://paimon.moe/images/skills/eula/constellation_4.png"],
      ["C5", "https://paimon.moe/images/skills/eula/constellation_5.png"],
      ["C6", "https://paimon.moe/images/skills/eula/constellation_6.png"],
    ],
    [0.897, 0.97, 1.043, 1.148, 1.221, 1.304, 1.419, 1.534, 1.649, 1.774],
    [
      1.46, 1.57, 1.68, 1.83, 1.94, 2.05, 2.20, 2.34, 2.49, 2.64, 2.78,
      2.93, 3.11,
    ],
    [
      3.67 + 0.75 * 30,
      3.969 + 0.811 * 30,
      4.268 + 0.872 * 30,
      4.695 + 0.959 * 30,
      4.994 + 1.02 * 30,
      5.335 + 1.09 * 30,
      5.804 + 1.186 * 30,
      6.274 + 1.282 * 30,
      6.743 + 1.378 * 30,
      7.256 + 1.482 * 30,
      7.842 + 1.602 * 30,
      8.533 + 1.743 * 30,
      9.223 + 1.884 * 30,
    ],
    [
      "https://paimon.moe/images/skills/eula/talent_1.png",
      "https://paimon.moe/images/skills/eula/talent_2.png",
      "https://paimon.moe/images/skills/eula/talent_3.png",
    ]
  ),
  new Character(
    2,
    "Hu Tao",
    "https://paimon.moe/images/characters/hu_tao.png",
    "https://paimon.moe/images/characters/full/hu_tao.png",
    "Pyro",
    "https://paimon.moe/images/elements/pyro.png",
    [
      ["C1", "https://paimon.moe/images/skills/hu_tao/constellation_1.png"],
      ["C2", "https://paimon.moe/images/skills/hu_tao/constellation_2.png"],
      ["C3", "https://paimon.moe/images/skills/hu_tao/constellation_3.png"],
      ["C4", "https://paimon.moe/images/skills/hu_tao/constellation_4.png"],
      ["C5", "https://paimon.moe/images/skills/hu_tao/constellation_5.png"],
      ["C6", "https://paimon.moe/images/skills/hu_tao/constellation_6.png"],
    ],
    [0.396, 0.429, 0.461, 0.507, 0.539, 0.576, 0.627, 0.678, 0.728, 0.784],
    [
      1.172, 1.26, 1.348, 1.465, 1.553, 1.641, 1.758, 1.875, 1.992, 2.11, 2.227,
      2.344, 2.49,
    ],
    [
      4.01 + 0.0389 * 60,
      4.31 + 0.0418 * 60,
      4.61 + 0.0447 * 60,
      5.01 + 0.0486 * 60,
      5.31 + 0.0515 * 60,
      5.61 + 0.0544 * 60,
      6.01 + 0.0583 * 60,
      6.41 + 0.0622 * 60,
      6.81 + 0.061 * 60,
      7.21 + 0.07 * 60,
      7.62 + 0.0739 * 60,
      8.02 + 0.078 * 60,
      8.52 + 0.083 * 60,
    ],
    [
      "https://paimon.moe/images/skills/hu_tao/talent_1.png",
      "https://paimon.moe/images/skills/hu_tao/talent_2.png",
      "https://paimon.moe/images/skills/hu_tao/talent_3.png",
    ]
  ),
  new Character(
    3,
    "Keqing",
    "https://paimon.moe/images/characters/keqing.png",
    "https://paimon.moe/images/characters/full/keqing.png",
    "Electro",
    "https://paimon.moe/images/elements/electro.png",
    [
      ["C1", "https://paimon.moe/images/skills/keqing/constellation_1.png"],
      ["C2", "https://paimon.moe/images/skills/keqing/constellation_2.png"],
      ["C3", "https://paimon.moe/images/skills/keqing/constellation_3.png"],
      ["C4", "https://paimon.moe/images/skills/keqing/constellation_4.png"],
      ["C5", "https://paimon.moe/images/skills/keqing/constellation_5.png"],
      ["C6", "https://paimon.moe/images/skills/keqing/constellation_6.png"],
    ],
    [0.396, 0.429, 0.461, 0.507, 0.539, 0.576, 0.627, 0.678, 0.728, 0.784],
    [
      1.172, 1.26, 1.348, 1.465, 1.553, 1.641, 1.758, 1.875, 1.992, 2.11, 2.227,
      2.344, 2.49,
    ],
    [
      4.01 + 0.0389 * 60,
      4.31 + 0.0418 * 60,
      4.61 + 0.0447 * 60,
      5.01 + 0.0486 * 60,
      5.31 + 0.0515 * 60,
      5.61 + 0.0544 * 60,
      6.01 + 0.0583 * 60,
      6.41 + 0.0622 * 60,
      6.81 + 0.061 * 60,
      7.21 + 0.07 * 60,
      7.62 + 0.0739 * 60,
      8.02 + 0.078 * 60,
      8.52 + 0.083 * 60,
    ],
    [
      "https://paimon.moe/images/skills/keqing/talent_1.png",
      "https://paimon.moe/images/skills/keqing/talent_2.png",
      "https://paimon.moe/images/skills/keqing/talent_3.png",
    ]
  ),
  new Character(
    4,
    "Yelan",
    "https://paimon.moe/images/characters/yelan.png",
    "https://paimon.moe/images/characters/full/yelan.png",
    "Hydro",
    "https://paimon.moe/images/elements/hydro.png",
    [
      ["C1", "https://paimon.moe/images/skills/yelan/constellation_1.png"],
      ["C2", "https://paimon.moe/images/skills/yelan/constellation_2.png"],
      ["C3", "https://paimon.moe/images/skills/yelan/constellation_3.png"],
      ["C4", "https://paimon.moe/images/skills/yelan/constellation_4.png"],
      ["C5", "https://paimon.moe/images/skills/yelan/constellation_5.png"],
      ["C6", "https://paimon.moe/images/skills/yelan/constellation_6.png"],
    ],
    [0.1158, 0.1244, 0.1331, 0.1447, 0.1534, 0.1621, 0.1736, 0.1852, 0.1968, 0.2084],
    [
      0.226, 0.243, 0.260, 0.283, 0.3, 0.317, 0.339, 0.362, 0.384, 0.407, 0.43,
      0.452, 0.481,
    ],
    [
      0.0487,
      0.0524,
      0.056,
      0.0609,
      0.0646,
      0.0682,
      0.0731,
      0.078,
      0.0828,
      0.0877,
      0.0926,
      0.0974,
      0.1035,
    ],
    [
      "https://paimon.moe/images/skills/yelan/talent_1.png",
      "https://paimon.moe/images/skills/yelan/talent_2.png",
      "https://paimon.moe/images/skills/yelan/talent_3.png",
    ]
  ),

  new Character(
    5,
    "Kamisato Ayaka",
    "https://paimon.moe/images/characters/kamisato_ayaka.png",
    "https://paimon.moe/images/characters/full/kamisato_ayaka.png",
    "Cryo",
    "https://paimon.moe/images/elements/cryo.png",
    [
      ["C1", "https://paimon.moe/images/skills/kamisato_ayaka/constellation_1.png"],
      ["C2", "https://paimon.moe/images/skills/kamisato_ayaka/constellation_2.png"],
      ["C3", "https://paimon.moe/images/skills/kamisato_ayaka/constellation_3.png"],
      ["C4", "https://paimon.moe/images/skills/kamisato_ayaka/constellation_4.png"],
      ["C5", "https://paimon.moe/images/skills/kamisato_ayaka/constellation_5.png"],
      ["C6", "https://paimon.moe/images/skills/kamisato_ayaka/constellation_6.png"],
    ],
    [0.396, 0.429, 0.461, 0.507, 0.539, 0.576, 0.627, 0.678, 0.728, 0.784],
    [
      1.172, 1.26, 1.348, 1.465, 1.553, 1.641, 1.758, 1.875, 1.992, 2.11, 2.227,
      2.344, 2.49,
    ],
    [
      4.01 + 0.0389 * 60,
      4.31 + 0.0418 * 60,
      4.61 + 0.0447 * 60,
      5.01 + 0.0486 * 60,
      5.31 + 0.0515 * 60,
      5.61 + 0.0544 * 60,
      6.01 + 0.0583 * 60,
      6.41 + 0.0622 * 60,
      6.81 + 0.061 * 60,
      7.21 + 0.07 * 60,
      7.62 + 0.0739 * 60,
      8.02 + 0.078 * 60,
      8.52 + 0.083 * 60,
    ],
    [
      "https://paimon.moe/images/skills/kamisato_ayaka/talent_1.png",
      "https://paimon.moe/images/skills/kamisato_ayaka/talent_2.png",
      "https://paimon.moe/images/skills/kamisato_ayaka/talent_3.png",
    ]
  ),
  new Character(
    6,
    "Mona",
    "https://paimon.moe/images/characters/mona.png",
    "https://paimon.moe/images/characters/full/mona.png",
    "Hydro",
    "https://paimon.moe/images/elements/hydro.png",
    [
      ["C1", "https://paimon.moe/images/skills/mona/constellation_1.png"],
      ["C2", "https://paimon.moe/images/skills/mona/constellation_2.png"],
      ["C3", "https://paimon.moe/images/skills/mona/constellation_3.png"],
      ["C4", "https://paimon.moe/images/skills/mona/constellation_4.png"],
      ["C5", "https://paimon.moe/images/skills/mona/constellation_5.png"],
      ["C6", "https://paimon.moe/images/skills/mona/constellation_6.png"],
    ],
    [0.396, 0.429, 0.461, 0.507, 0.539, 0.576, 0.627, 0.678, 0.728, 0.784],
    [
      1.172, 1.26, 1.348, 1.465, 1.553, 1.641, 1.758, 1.875, 1.992, 2.11, 2.227,
      2.344, 2.49,
    ],
    [
      4.01 + 0.0389 * 60,
      4.31 + 0.0418 * 60,
      4.61 + 0.0447 * 60,
      5.01 + 0.0486 * 60,
      5.31 + 0.0515 * 60,
      5.61 + 0.0544 * 60,
      6.01 + 0.0583 * 60,
      6.41 + 0.0622 * 60,
      6.81 + 0.061 * 60,
      7.21 + 0.07 * 60,
      7.62 + 0.0739 * 60,
      8.02 + 0.078 * 60,
      8.52 + 0.083 * 60,
    ],
    [
      "https://paimon.moe/images/skills/mona/talent_1.png",
      "https://paimon.moe/images/skills/mona/talent_2.png",
      "https://paimon.moe/images/skills/mona/talent_3.png",
    ]
  ),
  new Character(
    7,
    "Yae Miko",
    "https://paimon.moe/images/characters/yae_miko.png",
    "https://paimon.moe/images/characters/full/yae_miko.png",
    "Electro",
    "https://paimon.moe/images/elements/electro.png",
    [
      ["C1", "https://paimon.moe/images/skills/yae_miko/constellation_1.png"],
      ["C2", "https://paimon.moe/images/skills/yae_miko/constellation_2.png"],
      ["C3", "https://paimon.moe/images/skills/yae_miko/constellation_3.png"],
      ["C4", "https://paimon.moe/images/skills/yae_miko/constellation_4.png"],
      ["C5", "https://paimon.moe/images/skills/yae_miko/constellation_5.png"],
      ["C6", "https://paimon.moe/images/skills/yae_miko/constellation_6.png"],
    ],
    [0.396, 0.429, 0.461, 0.507, 0.539, 0.576, 0.627, 0.678, 0.728, 0.784],
    [
      1.172, 1.26, 1.348, 1.465, 1.553, 1.641, 1.758, 1.875, 1.992, 2.11, 2.227,
      2.344, 2.49,
    ],
    [
      4.01 + 0.0389 * 60,
      4.31 + 0.0418 * 60,
      4.61 + 0.0447 * 60,
      5.01 + 0.0486 * 60,
      5.31 + 0.0515 * 60,
      5.61 + 0.0544 * 60,
      6.01 + 0.0583 * 60,
      6.41 + 0.0622 * 60,
      6.81 + 0.061 * 60,
      7.21 + 0.07 * 60,
      7.62 + 0.0739 * 60,
      8.02 + 0.078 * 60,
      8.52 + 0.083 * 60,
    ],
    [
      "https://paimon.moe/images/skills/yae_miko/talent_1.png",
      "https://paimon.moe/images/skills/yae_miko/talent_2.png",
      "https://paimon.moe/images/skills/yae_miko/talent_3.png",
    ]
  ),
];