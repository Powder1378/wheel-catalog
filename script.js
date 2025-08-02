const data = [
// Sports  
  { name: "インフェルノ", image: "./images/SPT_V_1.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "ディープファイブ", image: "./images/SPT_V_2.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "ロズスピード Mr.V", image: "./images/SPT_V_3.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "ダイヤモンドカット", image: "./images/SPT_V_4.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "クロノ", image: "./images/SPT_V_5.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "フェローチRR", image: "./images/SPT_V_6.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "フィフティナイン", image: "./images/SPT_V_7.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "マーシー", image: "./images/SPT_V_8.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "シンセティックZ", image: "./images/SPT_V_9.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "オーガニック・タイプゼロ", image: "./images/SPT_V_10.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "エンドーv.1", image: "./images/SPT_V_11.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "GTワン", image: "./images/SPT_V_12.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "デューバー7", image: "./images/SPT_V_13.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "ウザール", image: "./images/SPT_V_14.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "グラウンドライド", image: "./images/SPT_V_15.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "Sレーサー", image: "./images/SPT_V_16.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "ベナム", image: "./images/SPT_V_17.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "コスモ", image: "./images/SPT_V_18.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "ダッシュVIP", image: "./images/SPT_V_19.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "アイスキッド", image: "./images/SPT_V_20.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "ラウフェルド", image: "./images/SPT_V_21.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "湾岸マスター", image: "./images/SPT_V_22.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "スーパーファイブ", image: "./images/SPT_V_23.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "エンドーv2", image: "./images/SPT_V_24.png",type: "Sports",source: "Vanilla",chrome: "True"},
  { name: "スプリット・シックス", image: "./images/SPT_V_25.png",type: "Sports",source: "Vanilla",chrome: "True"},
  /*------------------------------------------- SportsMOD-------------------------------------------*/
  { name: "Sports51", image: "./images/SPT_M_51.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports52", image: "./images/SPT_M_52.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports53", image: "./images/SPT_M_53.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports54", image: "./images/SPT_M_54.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports55", image: "./images/SPT_M_55.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports56", image: "./images/SPT_M_56.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports57", image: "./images/SPT_M_57.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports58", image: "./images/SPT_M_58.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports59", image: "./images/SPT_M_59.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports60", image: "./images/SPT_M_60.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports61", image: "./images/SPT_M_61.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports62", image: "./images/SPT_M_62.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports63", image: "./images/SPT_M_63.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports64", image: "./images/SPT_M_64.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports65", image: "./images/SPT_M_65.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports66", image: "./images/SPT_M_66.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports67", image: "./images/SPT_M_67.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports68", image: "./images/SPT_M_68.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports69", image: "./images/SPT_M_69.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports70", image: "./images/SPT_M_70.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports71", image: "./images/SPT_M_71.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports72", image: "./images/SPT_M_72.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports73", image: "./images/SPT_M_73.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports74", image: "./images/SPT_M_74.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports75", image: "./images/SPT_M_75.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports76", image: "./images/SPT_M_76.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports77", image: "./images/SPT_M_77.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports78", image: "./images/SPT_M_78.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports79", image: "./images/SPT_M_79.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports80", image: "./images/SPT_M_80.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports81", image: "./images/SPT_M_81.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports82", image: "./images/SPT_M_82.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports83", image: "./images/SPT_M_83.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports84", image: "./images/SPT_M_84.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports85", image: "./images/SPT_M_85.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports86", image: "./images/SPT_M_86.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports87", image: "./images/SPT_M_87.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports88", image: "./images/SPT_M_88.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports89", image: "./images/SPT_M_89.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports90", image: "./images/SPT_M_90.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports91", image: "./images/SPT_M_91.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports92", image: "./images/SPT_M_92.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports93", image: "./images/SPT_M_93.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports94", image: "./images/SPT_M_94.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports95", image: "./images/SPT_M_95.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports96", image: "./images/SPT_M_96.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports97", image: "./images/SPT_M_97.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports98", image: "./images/SPT_M_98.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports99", image: "./images/SPT_M_99.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports100", image: "./images/SPT_M_100.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports101", image: "./images/SPT_M_101.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports102", image: "./images/SPT_M_102.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports103", image: "./images/SPT_M_103.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports104", image: "./images/SPT_M_104.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports105", image: "./images/SPT_M_105.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports106", image: "./images/SPT_M_106.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports107", image: "./images/SPT_M_107.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports108", image: "./images/SPT_M_108.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports109", image: "./images/SPT_M_109.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports110", image: "./images/SPT_M_110.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports111", image: "./images/SPT_M_111.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},
  { name: "Sports112", image: "./images/SPT_M_112.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "False"},
  { name: "Sports113", image: "./images/SPT_M_113.png", type: "Sports", source: "MOD",chrome: "True", chrome: "False", color: "True"},

  

  // SUV
  { name: "VIP", image: "./images/SUV_V_1.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "ベネファクター", image: "./images/SUV_V_2.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "コスモ", image: "./images/SUV_V_3.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "ビップ", image: "./images/SUV_V_4.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "ロイヤル・シックス", image: "./images/SUV_V_5.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "ファゴーム", image: "./images/SUV_V_6.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "デラックス", image: "./images/SUV_V_7.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "アイスド・アウト", image: "./images/SUV_V_8.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "コンシェンティ", image: "./images/SUV_V_9.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "ロズスピード・テン", image: "./images/SUV_V_10.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "スーパーノヴァ", image: "./images/SUV_V_11.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "オベイRS", image: "./images/SUV_V_12.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "ロズスピード・ボーラー", image: "./images/SUV_V_13.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "エクストラバガンゾ", image: "./images/SUV_V_14.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "スプリット・シックス", image: "./images/SUV_V_15.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "エンパワード", image: "./images/SUV_V_16.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "サンライズ", image: "./images/SUV_V_17.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "ダッシュVIP", image: "./images/SUV_V_18.png",type: "SUV",source: "Vanilla",chrome: "True"},
  { name: "カッター", image: "./images/SUV_V_19.png",type: "SUV",source: "Vanilla",chrome: "True"},


  // Muscle
  { name: "クラシック・ファイブ", image: "./images/MUS_V_1.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "デュークス", image: "./images/MUS_V_2.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "マッスル・フリーク", image: "./images/MUS_V_3.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "クラッカ", image: "./images/MUS_V_4.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "アズリアル", image: "./images/MUS_V_5.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "メカ", image: "./images/MUS_V_6.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "ブラック・トップ", image: "./images/MUS_V_7.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "ドラッグSPL", image: "./images/MUS_V_8.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "リボルバー", image: "./images/MUS_V_9.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "クラシック・ロッド", image: "./images/MUS_V_10.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "フェアリー", image: "./images/MUS_V_11.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "スプーナー", image: "./images/MUS_V_12.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "ファイブスター", image: "./images/MUS_V_13.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "オールドスクール", image: "./images/MUS_V_14.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "カエル・ヘフェッター", image: "./images/MUS_V_15.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "ドッドマン", image: "./images/MUS_V_16.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "シックス・ガン", image: "./images/MUS_V_17.png",type: "Muscle",source: "Vanilla",chrome: "True"},
  { name: "マーセナリー", image: "./images/MUS_V_18.png",type: "Muscle",source: "Vanilla",chrome: "True"},


  // Offroad
  { name: "レイダー", image: "./images/OFF_V_1.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "マッドスリンガー", image: "./images/OFF_V_2.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "ネヴィス", image: "./images/OFF_V_3.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "ケアンゴーム", image: "./images/OFF_V_4.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "アマゾン", image: "./images/OFF_V_5.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "チャレンジャー", image: "./images/OFF_V_6.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "デューン・バッシャー", image: "./images/OFF_V_7.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "ファイブスター", image: "./images/OFF_V_8.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "ロッククロウラー", image: "./images/OFF_V_9.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "ミルスペック・スティーリー", image: "./images/OFF_V_10.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "レトロ・スティーリー", image: "./images/OFF_V_11.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "耐久スティーリー", image: "./images/OFF_V_12.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "凹型スティーリー", image: "./images/OFF_V_13.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "警察仕様スティーリー", image: "./images/OFF_V_14.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "軽量スティーリー", image: "./images/OFF_V_15.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "デュークス", image: "./images/OFF_V_16.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "アバランチ", image: "./images/OFF_V_17.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "マウンテンマン", image: "./images/OFF_V_18.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "リッジクライマー", image: "./images/OFF_V_19.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "凸形5", image: "./images/OFF_V_20.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "フラット6", image: "./images/OFF_V_21.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "全地形モンスター", image: "./images/OFF_V_22.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "ドラッグSPL", image: "./images/OFF_V_23.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "凹型ラリーマスター", image: "./images/OFF_V_24.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  { name: "凹凸スノーフレーク", image: "./images/OFF_V_25.png",type: "Offroad",source: "Vanilla",chrome: "True"},
  /*------------------------------------------- OffroadMOD-------------------------------------------*/
  { name: "Offroad 36", image: "./images/OFF_M_36.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 37", image: "./images/OFF_M_37.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 38", image: "./images/OFF_M_38.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 39", image: "./images/OFF_M_39.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 40", image: "./images/OFF_M_40.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 41", image: "./images/OFF_M_41.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 42", image: "./images/OFF_M_42.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 43", image: "./images/OFF_M_43.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 44", image: "./images/OFF_M_44.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 45", image: "./images/OFF_M_45.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 46", image: "./images/OFF_M_46.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 47", image: "./images/OFF_M_47.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 48", image: "./images/OFF_M_48.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 49", image: "./images/OFF_M_49.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},
  { name: "Offroad 50", image: "./images/OFF_M_50.png",type: "Offroad",source: "MOD",chrome: "True",chrome: "True"},


  // Lowrider
  { name: "フレア", image: "./images/LOW_V_1.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "ワイヤード", image: "./images/LOW_V_2.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "トリプル・ゴールド", image: "./images/LOW_V_3.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "ビッグ・ワーム", image: "./images/LOW_V_4.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "セブン・ファイブス", image: "./images/LOW_V_5.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "スプリットシックス", image: "./images/LOW_V_6.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "フレッシュ・メッシュ", image: "./images/LOW_V_7.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "レッド・スレッド", image: "./images/LOW_V_8.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "ダーバイン", image: "./images/LOW_V_9.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "スーパー・フィン", image: "./images/LOW_V_10.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "クラシック・ロッド", image: "./images/LOW_V_11.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "ダラー", image: "./images/LOW_V_12.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "デュークス", image: "./images/LOW_V_13.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "ロウ・ファイブ", image: "./images/LOW_V_14.png", type: "Lowrider", source: "Vanilla",chrome: "True" },
  { name: "グーチ", image: "./images/LOW_V_15.png", type: "Lowrider", source: "Vanilla",chrome: "True" },

  
  // Benny's
  { name: "OGハンネット", image: "./images/BNS_V_1.png", type: "Benny's", source: "Vanilla", chrome: "True" },
  { name: "ノックオフ", image: "./images/BNS_V_2.png", type: "Benny's", source: "Vanilla", chrome: "True" },
  { name: "スポークアウト", image: "./images/BNS_V_3.png", type: "Benny's", source: "Vanilla", chrome: "True" },
  { name: "ビンテージワイヤ", image: "./images/BNS_V_4.png", type: "Benny's", source: "Vanilla", chrome: "True" },
  { name: "スムージー", image: "./images/BNS_V_5.png", type: "Benny's", source: "Vanilla", chrome: "True" },
  { name: "ロッド・ミー・アップ", image: "./images/BNS_V_6.png", type: "Benny's", source: "Vanilla", chrome: "True" },
  { name: "クリーン", image: "./images/BNS_V_7.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "ロッタ・クローム", image: "./images/BNS_V_8.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "スピンドル", image: "./images/BNS_V_9.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "バイキング", image: "./images/BNS_V_10.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "トリプル・スポーク", image: "./images/BNS_V_11.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "ファロー", image: "./images/BNS_V_12.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "タイガー・スタイル", image: "./images/BNS_V_13.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "スリー・ウィーリン", image: "./images/BNS_V_14.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "ビッグ・バー", image: "./images/BNS_V_15.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "バイオハザード", image: "./images/BNS_V_16.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "ウェーブ", image: "./images/BNS_V_17.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "リック・リック", image: "./images/BNS_V_18.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "スパイライザー", image: "./images/BNS_V_19.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "ヒプノティック", image: "./images/BNS_V_20.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "サイコデリック", image: "./images/BNS_V_21.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "ハーフカット", image: "./images/BNS_V_22.png", type: "Benny's", source: "Vanilla", chrome: "False" },
  { name: "スーパーエレクトリック", image: "./images/BNS_V_23.png", type: "Benny's", source: "Vanilla", chrome: "False" },



  // Bespoke
  { name: "クローム OG ハネッツ", image: "./images/BSP_V_1.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド OG ハネッツ", image: "./images/BSP_V_2.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム ワイヤーズ", image: "./images/BSP_V_3.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド ワイヤーズ", image: "./images/BSP_V_4.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム スポークド アウト", image: "./images/BSP_V_5.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド スポークド アウト", image: "./images/BSP_V_6.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム ノックオフス", image: "./images/BSP_V_7.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド ノックオフス", image: "./images/BSP_V_8.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム ビガー ワーム", image: "./images/BSP_V_9.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド ビガー ワーム", image: "./images/BSP_V_10.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム ヴィンテージ ワイヤー", image: "./images/BSP_V_11.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド ヴィンテージ ワイヤー", image: "./images/BSP_V_12.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム クラシック ワイヤー", image: "./images/BSP_V_13.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド クラシック ワイヤー", image: "./images/BSP_V_14.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム スムージー", image: "./images/BSP_V_15.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド スムージー", image: "./images/BSP_V_16.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム クラシック ロッド", image: "./images/BSP_V_17.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド クラシック ロッド", image: "./images/BSP_V_18.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム ダラー", image: "./images/BSP_V_19.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド ダラー", image: "./images/BSP_V_20.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム マイティ スター", image: "./images/BSP_V_21.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド マイティ スター", image: "./images/BSP_V_22.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム デカダント ディッシュ", image: "./images/BSP_V_23.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド デカダント ディッシュ", image: "./images/BSP_V_24.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム レイザー スタイル", image: "./images/BSP_V_25.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド レイザー スタイル", image: "./images/BSP_V_26.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム ケルティック ノット", image: "./images/BSP_V_27.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド ケルティック ノット", image: "./images/BSP_V_28.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "クローム ウォリアー ディッシュ", image: "./images/BSP_V_29.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド ウォリアー ディッシュ", image: "./images/BSP_V_30.png", type: "Bespoke", source: "Vanilla",chrome: "False" },
  { name: "ゴールド ビッグ ドッグ スポークス", image: "./images/BSP_V_31.png", type: "Bespoke", source: "Vanilla",chrome: "False" },


  // Rally
  { name: "ラリー スローバック", image: "./images/RLY_V_1.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "グラベル トラップ", image: "./images/RLY_V_2.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "ストーブ トップ", image: "./images/RLY_V_3.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "ストーブ トップ メッシュ", image: "./images/RLY_V_4.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "レトロ スリー ピース", image: "./images/RLY_V_5.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "ラリー モノブロック", image: "./images/RLY_V_6.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "フォージド ファイブ", image: "./images/RLY_V_7.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "スプリット スター", image: "./images/RLY_V_8.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "スピード ボーイ", image: "./images/RLY_V_9.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "ナインティーズ ランニング", image: "./images/RLY_V_10.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "トロポス", image: "./images/RLY_V_11.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "エクソス", image: "./images/RLY_V_12.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "ハイ ファイブ", image: "./images/RLY_V_13.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "スーパー ラックス", image: "./images/RLY_V_14.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "ピュア ビジネス", image: "./images/RLY_V_15.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "ペッパー ポット", image: "./images/RLY_V_16.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "ブラックトップ ブレンダー", image: "./images/RLY_V_17.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "スローバック", image: "./images/RLY_V_18.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "エクスプレスウェイ", image: "./images/RLY_V_19.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "ヒドゥン シックス", image: "./images/RLY_V_20.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "ディンカ SPL", image: "./images/RLY_V_21.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "レトロ ターボファン", image: "./images/RLY_V_22.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "コニカル ターボファン", image: "./images/RLY_V_23.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "アイス ストーム", image: "./images/RLY_V_24.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "スーパー タービン", image: "./images/RLY_V_25.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "モダン メッシュ", image: "./images/RLY_V_26.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "フォージド スター", image: "./images/RLY_V_27.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "スノーフレーク", image: "./images/RLY_V_28.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "ギガ メッシュ", image: "./images/RLY_V_29.png", type: "Rally", source: "Vanilla", chrome: "False" },
  { name: "メッシュ マイスター", image: "./images/RLY_V_30.png", type: "Rally", source: "Vanilla", chrome: "False" },


  // Street
  { name: "レトロ スティーリー", image: "./images/STR_V_1.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "ポバティ スペック スティーリー", image: "./images/STR_V_2.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "コンケイブ スティーリー", image: "./images/STR_V_3.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "ネビュラ", image: "./images/STR_V_4.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "ホットリング スティーリー", image: "./images/STR_V_5.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "カップ チャンピオン", image: "./images/STR_V_6.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "スタンスト EG カスタム", image: "./images/STR_V_7.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "クラッカ カスタム", image: "./images/STR_V_8.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "デュークス カスタム", image: "./images/STR_V_9.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "エンド v.3 カスタム", image: "./images/STR_V_10.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "V8 キラー", image: "./images/STR_V_11.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "フジワラ カスタム", image: "./images/STR_V_12.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "コスモ MKII", image: "./images/STR_V_13.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "エアロ スター", image: "./images/STR_V_14.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "ハイプ ファイブ", image: "./images/STR_V_15.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "ラフ ウェルド メガ ディープ", image: "./images/STR_V_16.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "メルシー コンケイブ", image: "./images/STR_V_17.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "スゴイ コンケイブ", image: "./images/STR_V_18.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "シンセティック Z コンケイブ", image: "./images/STR_V_19.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "エンド v.4 ディッシュド", image: "./images/STR_V_20.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "ハイパーフレッシュ", image: "./images/STR_V_21.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "トルファデ コンケイブ", image: "./images/STR_V_22.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "オーガニック タイプ II", image: "./images/STR_V_23.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "ビッグ マンバ", image: "./images/STR_V_24.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "ディープ フレーク", image: "./images/STR_V_25.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "コスモ MKIII", image: "./images/STR_V_26.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "コンケイブ レーサー", image: "./images/STR_V_27.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "ディープ フレーク リバース", image: "./images/STR_V_28.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "ワイルド ワゴン", image: "./images/STR_V_29.png", type: "Street", source: "Vanilla",chrome: "False" },
  { name: "コンケイブ メガ メッシュ", image: "./images/STR_V_30.png", type: "Street", source: "Vanilla",chrome: "False" },


  // HighEnd
  { name: "シャドウ", image: "./images/HED_V_1.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "ハイパー", image: "./images/HED_V_2.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "ブレード", image: "./images/HED_V_3.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "ダイアモンド", image: "./images/HED_V_4.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "スパ ジー", image: "./images/HED_V_5.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "クロマティック ゼット", image: "./images/HED_V_6.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "マーシー ch.リップ", image: "./images/HED_V_7.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "オベイ RS", image: "./images/HED_V_8.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "GT クローム", image: "./images/HED_V_9.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "チーター R", image: "./images/HED_V_10.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "ソーラー", image: "./images/HED_V_11.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "スプリット テン", image: "./images/HED_V_12.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "ダッシュ VIP", image: "./images/HED_V_13.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "ロズスピード テン", image: "./images/HED_V_14.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "カーボン インフェルノ", image: "./images/HED_V_15.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "カーボン シャドウ", image: "./images/HED_V_16.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "カーボン ゼット", image: "./images/HED_V_17.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "カーボン ソーラー", image: "./images/HED_V_18.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "カーボン チーター R", image: "./images/HED_V_19.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
  { name: "カーボン S レーサー", image: "./images/HED_V_20.png", type: "HighEnd", source: "Vanilla",chrome: "True" },
/*------------------------------------------- HighEndMOD-------------------------------------------*/
  { name: "HighEnd 41", image: "./images/HED_M_41.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 42", image: "./images/HED_M_42.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 43", image: "./images/HED_M_43.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 44", image: "./images/HED_M_44.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 45", image: "./images/HED_M_45.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 46", image: "./images/HED_M_46.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 47", image: "./images/HED_M_47.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 48", image: "./images/HED_M_48.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 49", image: "./images/HED_M_49.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 50", image: "./images/HED_M_50.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 51", image: "./images/HED_M_51.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 52", image: "./images/HED_M_52.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 53", image: "./images/HED_M_53.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 54", image: "./images/HED_M_54.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 55", image: "./images/HED_M_55.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 56", image: "./images/HED_M_56.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 67", image: "./images/HED_M_57.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 68", image: "./images/HED_M_58.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 59", image: "./images/HED_M_59.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 60", image: "./images/HED_M_60.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 61", image: "./images/HED_M_61.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 62", image: "./images/HED_M_62.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 63", image: "./images/HED_M_63.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 64", image: "./images/HED_M_64.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 65", image: "./images/HED_M_65.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 66", image: "./images/HED_M_66.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 67", image: "./images/HED_M_67.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 68", image: "./images/HED_M_68.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 69", image: "./images/HED_M_69.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 70", image: "./images/HED_M_70.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 71", image: "./images/HED_M_71.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 72", image: "./images/HED_M_72.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 73", image: "./images/HED_M_73.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 74", image: "./images/HED_M_74.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 75", image: "./images/HED_M_75.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 76", image: "./images/HED_M_76.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 77", image: "./images/HED_M_77.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 78", image: "./images/HED_M_78.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 79", image: "./images/HED_M_79.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 80", image: "./images/HED_M_80.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 81", image: "./images/HED_M_81.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 82", image: "./images/HED_M_82.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 83", image: "./images/HED_M_83.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 84", image: "./images/HED_M_84.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 85", image: "./images/HED_M_85.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 86", image: "./images/HED_M_86.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 87", image: "./images/HED_M_87.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 88", image: "./images/HED_M_88.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 89", image: "./images/HED_M_89.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 90", image: "./images/HED_M_90.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 91", image: "./images/HED_M_91.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 92", image: "./images/HED_M_92.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 93", image: "./images/HED_M_93.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 94", image: "./images/HED_M_94.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 95", image: "./images/HED_M_95.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 96", image: "./images/HED_M_96.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 97", image: "./images/HED_M_97.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 98", image: "./images/HED_M_98.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 99", image: "./images/HED_M_99.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 100", image: "./images/HED_M_100.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 101", image: "./images/HED_M_101.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 102", image: "./images/HED_M_102.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 103", image: "./images/HED_M_103.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 104", image: "./images/HED_M_104.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 105", image: "./images/HED_M_105.png", type: "HighEnd", source: "MOD",chrome: "True" },
  { name: "HighEnd 106", image: "./images/HED_M_106.png", type: "HighEnd", source: "MOD",chrome: "True" },
  
  

  // Tuner
  { name: "コスモ", image: "./images/TNR_V_1.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "スーパー メッシュ", image: "./images/TNR_V_2.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "アウトサイダー", image: "./images/TNR_V_3.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "ローラス", image: "./images/TNR_V_4.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "ドリフマイスター", image: "./images/TNR_V_5.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "スライサー", image: "./images/TNR_V_6.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "エル クアトロ", image: "./images/TNR_V_7.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "ダブド", image: "./images/TNR_V_8.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "ファイブ スター", image: "./images/TNR_V_9.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "スライドウェイズ", image: "./images/TNR_V_10.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "エイペックス", image: "./images/TNR_V_11.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "スタンスド EG", image: "./images/TNR_V_12.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "カウンターステア", image: "./images/TNR_V_13.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "エンド v.1", image: "./images/TNR_V_14.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "エンド v.2", image: "./images/TNR_V_15.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "グルッペ Z", image: "./images/TNR_V_16.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "チョクドリ", image: "./images/TNR_V_17.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "シケイン", image: "./images/TNR_V_18.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "サイソク", image: "./images/TNR_V_19.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "ディッシュド エイト", image: "./images/TNR_V_20.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "フジワラ", image: "./images/TNR_V_21.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "ゾクシャ", image: "./images/TNR_V_22.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "バトル エイト", image: "./images/TNR_V_23.png", type: "Tuner", source: "Vanilla",chrome: "False" },
  { name: "ラリー マスター", image: "./images/TNR_V_24.png", type: "Tuner", source: "Vanilla",chrome: "False" },


  // Bike
  { name: "スピードウェイ", image: "./images/BKE_V_1.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ストリート スペシャル", image: "./images/BKE_V_2.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "レーサー", image: "./images/BKE_V_3.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "トラック スター", image: "./images/BKE_V_4.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "オーバーロード", image: "./images/BKE_V_5.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "トライデント", image: "./images/BKE_V_6.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "トリプル スレット", image: "./images/BKE_V_7.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "スティレット", image: "./images/BKE_V_8.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ワイヤーズ", image: "./images/BKE_V_9.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ボバー", image: "./images/BKE_V_10.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ソリダス", image: "./images/BKE_V_11.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "アイス シールド", image: "./images/BKE_V_12.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ループス", image: "./images/BKE_V_13.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ロンパー レーシング", image: "./images/BKE_V_14.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ワープ ドライブ", image: "./images/BKE_V_15.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "スノーフレーク", image: "./images/BKE_V_16.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ホーリー スポーク", image: "./images/BKE_V_17.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "オールド スクール トリプル", image: "./images/BKE_V_18.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "フューチュラ", image: "./images/BKE_V_19.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "クォーター マイル キング", image: "./images/BKE_V_20.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "カートホイール", image: "./images/BKE_V_21.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ダブル ファイブ", image: "./images/BKE_V_22.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "シュリケン", image: "./images/BKE_V_23.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "シンプル シックス", image: "./images/BKE_V_24.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ケルティック", image: "./images/BKE_V_25.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "レイザー", image: "./images/BKE_V_26.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ツイステッド", image: "./images/BKE_V_27.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "モーニング スター", image: "./images/BKE_V_28.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ジャギッド スポークス", image: "./images/BKE_V_29.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "エイドロン", image: "./images/BKE_V_30.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "エニグマ", image: "./images/BKE_V_31.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ビッグ スポークス", image: "./images/BKE_V_32.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ウェブズ", image: "./images/BKE_V_33.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ホットプレート", image: "./images/BKE_V_34.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "ボブスタ", image: "./images/BKE_V_35.png", type: "Bike", source: "Vanilla",chrome: "True" },
  { name: "グラウチ", image: "./images/BKE_V_36.png", type: "Bike", source: "Vanilla",chrome: "True" },


  // Dragster
  { name: "レトロファイブ", image: "./images/DRS_V_1.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "レトロファイブ（ストライプ）", image: "./images/DRS_V_2.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "レトロ スター", image: "./images/DRS_V_3.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "レトロ スター（ストライプ）", image: "./images/DRS_V_4.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "トリプレックス", image: "./images/DRS_V_5.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "トリプレックス（ストライプ）", image: "./images/DRS_V_6.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "70年代スペック", image: "./images/DRS_V_7.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "70年代 スペック（ストライプ）", image: "./images/DRS_V_8.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "スーパー ファイブ アール", image: "./images/DRS_V_9.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "スーパー ファイブ アール（ストライプ）", image: "./images/DRS_V_10.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "スピードスター", image: "./images/DRS_V_11.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "スピードスター（ストライプ）", image: "./images/DRS_V_12.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "GP-90", image: "./images/DRS_V_13.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "GP-90（ストライプ）", image: "./images/DRS_V_14.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "スーパー スポーク", image: "./images/DRS_V_15.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "スーパー スポーク（ストライプ）", image: "./images/DRS_V_16.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "グリッドライン", image: "./images/DRS_V_17.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "グリッドライン（ストライプ）", image: "./images/DRS_V_18.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "スノーフレーク", image: "./images/DRS_V_19.png", type: "Dragster", source: "Vanilla", chrome: "False"},
  { name: "スノーフレーク（ストライプ）", image: "./images/DRS_V_20.png", type: "Dragster", source: "Vanilla", chrome: "False"}




];

// この下はいじらないようにしてください

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const typeFilters = document.querySelectorAll(".type-filter");
  const sourceFilters = document.querySelectorAll(".source-filter");
  const chromeFilters = document.querySelectorAll(".chrome-filter");
  const filterSummary = document.getElementById("filter-summary");
  const container = document.getElementById("wheel-container");
  const chatToggleBtn = document.getElementById("chat-toggle");
  const chatWindow = document.getElementById("chat-window");
  const chatContent = document.getElementById("chat-content");

  const devMessages = [
    "ぱうだぁ: よく見つけたね！",
    "ぱうだぁ: いつかこのカタログにたくさんの隠し要素を入れてみたいな",
    "ぱうだぁ: 君は暇なの？",
    "ぱうだぁ: コナミコマンドって知ってる？",
    "ぱうだぁ: みんな使ってくれてると嬉しいなぁ",
    "ぱうだぁ: 実はチャットを開くたびにメッセージが変わるよ！",
    "ぱうだぁ: だいぶネタ切れだよ",
    "ぱうだぁ: ぬるぽ",
    "ぱうだぁ: ここに私の名前を入れるってことは、よっぽど私のことが好きなんだね",
    "ぱうだぁ: おすすめのお酒ある？ビールと焼酎とウイスキー以外で！！",
    "ぱうだぁ: 私がこの街に来たのは2023年の7月20日だよ！......あれ、ちがったかも",
    "ぱうだぁ: ヒドゥンシックスっていうホイールが......",
    "ぱうだぁ: 暇つぶしで来てくれても歓迎するよ",
    "ぱうだぁ: お問い合わせフォームのその他に、ロスカスでやってほしいイベントとか募集中！！",
    "ぱうだぁ: ここだけの話、ぱうだぁーでも、ぱうだーでもなくて、ぱうだぁなんだ。細かいね",
    "???????: ﾎｹﾞﾎｹﾞﾎｹﾞﾎｹﾞwwwww",
    "ぱうだぁ: かため濃いめ多めでニンニクマシマシ！！！着丼したらすぐに海苔にアブラを吸わせて......おなかすいたな",
    "ぱうだぁ: たくさん歩いた後のキンキンに冷えた酒がうまいや！！",
  ];

  // チャットボタンの表示判定
  function checkSecretWord() {
    if (searchInput.value.trim() === "粉末ぱうだぁ") {
      chatToggleBtn.style.display = "block";
    } else {
      chatToggleBtn.style.display = "none";
    }
  }

  // チャットボタンの開閉イベント
  chatToggleBtn.addEventListener("click", () => {
    const randomMessage = devMessages[Math.floor(Math.random() * devMessages.length)];
    chatContent.innerHTML = `<p>${randomMessage}</p>`;
    chatWindow.style.display = chatWindow.style.display === "none" ? "block" : "none";
  });

function displayData(items) {
  container.innerHTML = "";

  if (items.length === 0) {
    container.innerHTML = `
      <div class="no-result">
        <p>この条件のホイールは<strong>存在しません</strong></p>
      </div>
    `;
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "wheel-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
    `;

    // Sports + MOD のときだけ「色変更〇/✖」表示
    if (item.type === "Sports" && item.source === "MOD") {
      const p = document.createElement("p");
      p.textContent = item.color === "True" ? "色変更〇" : "色変更✖";
      card.appendChild(p);
    }

    container.appendChild(card);
  });
}

  // 上に戻るボタン
  const scrollBtn = document.getElementById("scroll-to-top");

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // フィルター適用
  function applyFilters() {
    const keyword = searchInput.value.toLowerCase();

    const selectedTypes = Array.from(typeFilters)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    const selectedSources = Array.from(sourceFilters)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    const selectedChrome = document.querySelector('input[name="chrome"]:checked')?.value || "All";

    const filtered = data.filter(item => {
      const matchesName = item.name.toLowerCase().includes(keyword);
      const matchesType = selectedTypes.includes(item.type);
      const matchesSource = selectedSources.includes(item.source);
      const matchesChrome = selectedChrome === "All" || item.chrome === selectedChrome;

      return matchesName && matchesType && matchesSource && matchesChrome;
    });

    filterSummary.textContent = `絞り込み結果：${filtered.length} 件`;
    displayData(filtered);
    checkSecretWord(); // ←ここで検索語をチェック
  }

  // イベント登録
  searchInput.addEventListener("input", () => {
  applyFilters();
  checkSecretWord();
});

  typeFilters.forEach(cb => cb.addEventListener("change", applyFilters));
  sourceFilters.forEach(cb => cb.addEventListener("change", applyFilters));
  chromeFilters.forEach(cb => cb.addEventListener("change", applyFilters));
  
// すべて選択／解除ボタン
document.getElementById("type-all-on").addEventListener("click", () => {
  typeFilters.forEach(cb => cb.checked = true);
  applyFilters();
});
document.getElementById("type-all-off").addEventListener("click", () => {
  typeFilters.forEach(cb => cb.checked = false);
  applyFilters();
});

  // 初期実行
  applyFilters();
});

