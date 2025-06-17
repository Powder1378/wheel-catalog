const data = [
// Sports
  { name: "インフェルノ", image: "./images/SPT_V_1.png",type: "Sports",source: "Vanilla"},
  { name: "ディープファイブ", image: "./images/SPT_V_2.png",type: "Sports",source: "Vanilla"},
  { name: "ロズスピード Mr.V", image: "./images/SPT_V_3.png",type: "Sports",source: "Vanilla"},
  { name: "ダイヤモンドカット", image: "./images/SPT_V_4.png",type: "Sports",source: "Vanilla"},
  { name: "クロノ", image: "./images/SPT_V_5.png",type: "Sports",source: "Vanilla"},
  { name: "フェローチRR", image: "./images/SPT_V_6.png",type: "Sports",source: "Vanilla"},
  { name: "フィフティナイン", image: "./images/SPT_V_7.png",type: "Sports",source: "Vanilla"},
  { name: "マーシー", image: "./images/SPT_V_8.png",type: "Sports",source: "Vanilla"},
  { name: "シンセティックZ", image: "./images/SPT_V_9.png",type: "Sports",source: "Vanilla"},
  { name: "オーガニック・タイプゼロ", image: "./images/SPT_V_10.png",type: "Sports",source: "Vanilla"},
  { name: "エンドーv.1", image: "./images/SPT_V_11.png",type: "Sports",source: "Vanilla"},
  { name: "GTワン", image: "./images/SPT_V_12.png",type: "Sports",source: "Vanilla"},
  { name: "デューバー7", image: "./images/SPT_V_13.png",type: "Sports",source: "Vanilla"},
  { name: "ウザール", image: "./images/SPT_V_14.png",type: "Sports",source: "Vanilla"},
  { name: "グラウンドライド", image: "./images/SPT_V_15.png",type: "Sports",source: "Vanilla"},
  { name: "Sレーサー", image: "./images/SPT_V_16.png",type: "Sports",source: "Vanilla"},
  { name: "ベナム", image: "./images/SPT_V_17.png",type: "Sports",source: "Vanilla"},
  { name: "コスモ", image: "./images/SPT_V_18.png",type: "Sports",source: "Vanilla"},
  { name: "ダッシュVIP", image: "./images/SPT_V_19.png",type: "Sports",source: "Vanilla"},
  { name: "アイスキッド", image: "./images/SPT_V_20.png",type: "Sports",source: "Vanilla"},
  { name: "ラウフェルド", image: "./images/SPT_V_21.png",type: "Sports",source: "Vanilla"},
  { name: "湾岸マスター", image: "./images/SPT_V_22.png",type: "Sports",source: "Vanilla"},
  { name: "スーパーファイブ", image: "./images/SPT_V_23.png",type: "Sports",source: "Vanilla"},
  { name: "エンドーv2", image: "./images/SPT_V_24.png",type: "Sports",source: "Vanilla"},
  { name: "スプリット・シックス", image: "./images/SPT_V_25.png",type: "Sports",source: "Vanilla"},


  // SUV
  { name: "VIP", image: "./images/SUV_V_1.png",type: "SUV",source: "Vanilla"},
  { name: "ベネファクター", image: "./images/SUV_V_2.png",type: "SUV",source: "Vanilla"},
  { name: "コスモ", image: "./images/SUV_V_3.png",type: "SUV",source: "Vanilla"},
  { name: "ビップ", image: "./images/SUV_V_4.png",type: "SUV",source: "Vanilla"},
  { name: "ロイヤル・シックス", image: "./images/SUV_V_5.png",type: "SUV",source: "Vanilla"},
  { name: "ファゴーム", image: "./images/SUV_V_6.png",type: "SUV",source: "Vanilla"},
  { name: "デラックス", image: "./images/SUV_V_7.png",type: "SUV",source: "Vanilla"},
  { name: "アイスド・アウト", image: "./images/SUV_V_8.png",type: "SUV",source: "Vanilla"},
  { name: "コンシェンティ", image: "./images/SUV_V_9.png",type: "SUV",source: "Vanilla"},
  { name: "ロズスピード・テン", image: "./images/SUV_V_10.png",type: "SUV",source: "Vanilla"},
  { name: "スーパーノヴァ", image: "./images/SUV_V_11.png",type: "SUV",source: "Vanilla"},
  { name: "オベイRS", image: "./images/SUV_V_12.png",type: "SUV",source: "Vanilla"},
  { name: "ロズスピード・ボーラー", image: "./images/SUV_V_13.png",type: "SUV",source: "Vanilla"},
  { name: "エクストラバガンゾ", image: "./images/SUV_V_14.png",type: "SUV",source: "Vanilla"},
  { name: "スプリット・シックス", image: "./images/SUV_V_15.png",type: "SUV",source: "Vanilla"},
  { name: "エンパワード", image: "./images/SUV_V_16.png",type: "SUV",source: "Vanilla"},
  { name: "サンライズ", image: "./images/SUV_V_17.png",type: "SUV",source: "Vanilla"},
  { name: "ダッシュVIP", image: "./images/SUV_V_18.png",type: "SUV",source: "Vanilla"},
  { name: "カッター", image: "./images/SUV_V_19.png",type: "SUV",source: "Vanilla"},


  // Muscle
  { name: "クラシック・ファイブ", image: "./images/MUS_V_1.png",type: "Muscle",source: "Vanilla"},
  { name: "デュークス", image: "./images/MUS_V_2.png",type: "Muscle",source: "Vanilla"},
  { name: "マッスル・フリーク", image: "./images/MUS_V_3.png",type: "Muscle",source: "Vanilla"},
  { name: "クラッカ", image: "./images/MUS_V_4.png",type: "Muscle",source: "Vanilla"},
  { name: "アズリアル", image: "./images/MUS_V_5.png",type: "Muscle",source: "Vanilla"},
  { name: "メカ", image: "./images/MUS_V_6.png",type: "Muscle",source: "Vanilla"},
  { name: "ブラック・トップ", image: "./images/MUS_V_7.png",type: "Muscle",source: "Vanilla"},
  { name: "ドラッグSPL", image: "./images/MUS_V_8.png",type: "Muscle",source: "Vanilla"},
  { name: "リボルバー", image: "./images/MUS_V_9.png",type: "Muscle",source: "Vanilla"},
  { name: "クラシック・ロッド", image: "./images/MUS_V_10.png",type: "Muscle",source: "Vanilla"},
  { name: "フェアリー", image: "./images/MUS_V_11.png",type: "Muscle",source: "Vanilla"},
  { name: "スプーナー", image: "./images/MUS_V_12.png",type: "Muscle",source: "Vanilla"},
  { name: "ファイブスター", image: "./images/MUS_V_13.png",type: "Muscle",source: "Vanilla"},
  { name: "オールドスクール", image: "./images/MUS_V_14.png",type: "Muscle",source: "Vanilla"},
  { name: "カエル・ヘフェッター", image: "./images/MUS_V_15.png",type: "Muscle",source: "Vanilla"},
  { name: "ドッドマン", image: "./images/MUS_V_16.png",type: "Muscle",source: "Vanilla"},
  { name: "シックス・ガン", image: "./images/MUS_V_17.png",type: "Muscle",source: "Vanilla"},
  { name: "マーセナリー", image: "./images/MUS_V_18.png",type: "Muscle",source: "Vanilla"},


  // Offroad
  { name: "レイダー", image: "./images/OFF_V_1.png",type: "Offroad",source: "Vanilla"},
  { name: "マッドスリンガー", image: "./images/OFF_V_2.png",type: "Offroad",source: "Vanilla"},
  { name: "ネヴィス", image: "./images/OFF_V_3.png",type: "Offroad",source: "Vanilla"},
  { name: "ケアンゴーム", image: "./images/OFF_V_4.png",type: "Offroad",source: "Vanilla"},
  { name: "アマゾン", image: "./images/OFF_V_5.png",type: "Offroad",source: "Vanilla"},
  { name: "チャレンジャー", image: "./images/OFF_V_6.png",type: "Offroad",source: "Vanilla"},
  { name: "デューン・バッシャー", image: "./images/OFF_V_7.png",type: "Offroad",source: "Vanilla"},
  { name: "ファイブスター", image: "./images/OFF_V_8.png",type: "Offroad",source: "Vanilla"},
  { name: "ロッククロウラー", image: "./images/OFF_V_9.png",type: "Offroad",source: "Vanilla"},
  { name: "ミルスペック・スティーリー", image: "./images/OFF_V_10.png",type: "Offroad",source: "Vanilla"},
  { name: "レトロ・スティーリー", image: "./images/OFF_V_11.png",type: "Offroad",source: "Vanilla"},
  { name: "耐久スティーリー", image: "./images/OFF_V_12.png",type: "Offroad",source: "Vanilla"},
  { name: "凹型スティーリー", image: "./images/OFF_V_13.png",type: "Offroad",source: "Vanilla"},
  { name: "警察仕様スティーリー", image: "./images/OFF_V_14.png",type: "Offroad",source: "Vanilla"},
  { name: "軽量スティーリー", image: "./images/OFF_V_15.png",type: "Offroad",source: "Vanilla"},
  { name: "デュークス", image: "./images/OFF_V_16.png",type: "Offroad",source: "Vanilla"},
  { name: "アバランチ", image: "./images/OFF_V_17.png",type: "Offroad",source: "Vanilla"},
  { name: "マウンテンマン", image: "./images/OFF_V_18.png",type: "Offroad",source: "Vanilla"},
  { name: "リッジクライマー", image: "./images/OFF_V_19.png",type: "Offroad",source: "Vanilla"},
  { name: "凸形5", image: "./images/OFF_V_20.png",type: "Offroad",source: "Vanilla"},
  { name: "フラット6", image: "./images/OFF_V_21.png",type: "Offroad",source: "Vanilla"},
  { name: "全地形モンスター", image: "./images/OFF_V_22.png",type: "Offroad",source: "Vanilla"},
  { name: "ドラッグSPL", image: "./images/OFF_V_23.png",type: "Offroad",source: "Vanilla"},
  { name: "凹型ラリーマスター", image: "./images/OFF_V_24.png",type: "Offroad",source: "Vanilla"},
  { name: "凹凸スノーフレーク", image: "./images/OFF_V_25.png",type: "Offroad",source: "Vanilla"},


  // Lowrider
  { name: "フレア", image: "./images/LOW_V_1.png", type: "Lowrider", source: "Vanilla" },
  { name: "ワイヤード", image: "./images/LOW_V_2.png", type: "Lowrider", source: "Vanilla" },
  { name: "トリプル・ゴールド", image: "./images/LOW_V_3.png", type: "Lowrider", source: "Vanilla" },
  { name: "ビッグ・ワーム", image: "./images/LOW_V_4.png", type: "Lowrider", source: "Vanilla" },
  { name: "セブン・ファイブス", image: "./images/LOW_V_5.png", type: "Lowrider", source: "Vanilla" },
  { name: "スプリットシックス", image: "./images/LOW_V_6.png", type: "Lowrider", source: "Vanilla" },
  { name: "フレッシュ・メッシュ", image: "./images/LOW_V_7.png", type: "Lowrider", source: "Vanilla" },
  { name: "レッド・スレッド", image: "./images/LOW_V_8.png", type: "Lowrider", source: "Vanilla" },
  { name: "ダーバイン", image: "./images/LOW_V_9.png", type: "Lowrider", source: "Vanilla" },
  { name: "スーパー・フィン", image: "./images/LOW_V_10.png", type: "Lowrider", source: "Vanilla" },
  { name: "クラシック・ロッド", image: "./images/LOW_V_11.png", type: "Lowrider", source: "Vanilla" },
  { name: "ダラー", image: "./images/LOW_V_12.png", type: "Lowrider", source: "Vanilla" },
  { name: "デュークス", image: "./images/LOW_V_13.png", type: "Lowrider", source: "Vanilla" },
  { name: "ロウ・ファイブ", image: "./images/LOW_V_14.png", type: "Lowrider", source: "Vanilla" },
  { name: "グーチ", image: "./images/LOW_V_15.png", type: "Lowrider", source: "Vanilla" },

  
  // Benny's
  { name: "OGハンネット", image: "./images/BNS_V_2.png", type: "Benny's", source: "Vanilla" },
  { name: "OGハンネットCL", image: "./images/BNS_V_1.png", type: "Benny's", source: "Vanilla" },
  { name: "ノックオフ", image: "./images/BNS_V_4.png", type: "Benny's", source: "Vanilla" },
  { name: "ノックオフCL", image: "./images/BNS_V_3.png", type: "Benny's", source: "Vanilla" },
  { name: "スポークアウト", image: "./images/BNS_V_6.png", type: "Benny's", source: "Vanilla" },
  { name: "スポークアウトCL", image: "./images/BNS_V_5.png", type: "Benny's", source: "Vanilla" },
  { name: "ビンテージワイヤ", image: "./images/BNS_V_8.png", type: "Benny's", source: "Vanilla" },
  { name: "ビンテージワイヤCL", image: "./images/BNS_V_7.png", type: "Benny's", source: "Vanilla" },
  { name: "スムージー", image: "./images/BNS_V_10.png", type: "Benny's", source: "Vanilla" },
  { name: "スムージーCL", image: "./images/BNS_V_9.png", type: "Benny's", source: "Vanilla" },
  { name: "スムージーSC", image: "./images/BNS_V_11.png", type: "Benny's", source: "Vanilla" },
  { name: "ロッド・ミー・アップ", image: "./images/BNS_V_13.png", type: "Benny's", source: "Vanilla" },
  { name: "ロッド・ミー・アップCL", image: "./images/BNS_V_12.png", type: "Benny's", source: "Vanilla" },
  { name: "ロッド・ミー・アップSC", image: "./images/BNS_V_14.png", type: "Benny's", source: "Vanilla" },
  { name: "クリーン", image: "./images/BNS_V_15.png", type: "Benny's", source: "Vanilla" },
  { name: "ロッタ・クローム", image: "./images/BNS_V_16.png", type: "Benny's", source: "Vanilla" },
  { name: "スピンドル", image: "./images/BNS_V_17.png", type: "Benny's", source: "Vanilla" },
  { name: "バイキング", image: "./images/BNS_V_18.png", type: "Benny's", source: "Vanilla" },
  { name: "トリプル・スポーク", image: "./images/BNS_V_19.png", type: "Benny's", source: "Vanilla" },
  { name: "ファロー", image: "./images/BNS_V_20.png", type: "Benny's", source: "Vanilla" },
  { name: "タイガー・スタイル", image: "./images/BNS_V_21.png", type: "Benny's", source: "Vanilla" },
  { name: "スリー・ウィーリン", image: "./images/BNS_V_22.png", type: "Benny's", source: "Vanilla" },
  { name: "ビッグ・バー", image: "./images/BNS_V_23.png", type: "Benny's", source: "Vanilla" },
  { name: "バイオハザード", image: "./images/BNS_V_24.png", type: "Benny's", source: "Vanilla" },
  { name: "ウェーブ", image: "./images/BNS_V_25.png", type: "Benny's", source: "Vanilla" },
  { name: "リック・リック", image: "./images/BNS_V_26.png", type: "Benny's", source: "Vanilla" },
  { name: "スパイライザー", image: "./images/BNS_V_27.png", type: "Benny's", source: "Vanilla" },
  { name: "ヒプノティック", image: "./images/BNS_V_28.png", type: "Benny's", source: "Vanilla" },
  { name: "サイコデリック", image: "./images/BNS_V_29.png", type: "Benny's", source: "Vanilla" },
  { name: "ハーフカット", image: "./images/BNS_V_30.png", type: "Benny's", source: "Vanilla" },
  { name: "スーパーエレクトリック", image: "./images/BNS_V_31.png", type: "Benny's", source: "Vanilla" },


  // Bespoke
  { name: "クローム OG ハネッツ", image: "./images/BSP_V_1.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド OG ハネッツ", image: "./images/BSP_V_2.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム ワイヤーズ", image: "./images/BSP_V_3.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド ワイヤーズ", image: "./images/BSP_V_4.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム スポークド アウト", image: "./images/BSP_V_5.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド スポークド アウト", image: "./images/BSP_V_6.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム ノックオフス", image: "./images/BSP_V_7.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド ノックオフス", image: "./images/BSP_V_8.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム ビガー ワーム", image: "./images/BSP_V_9.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド ビガー ワーム", image: "./images/BSP_V_10.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム ヴィンテージ ワイヤー", image: "./images/BSP_V_11.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド ヴィンテージ ワイヤー", image: "./images/BSP_V_12.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム クラシック ワイヤー", image: "./images/BSP_V_13.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド クラシック ワイヤー", image: "./images/BSP_V_14.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム スムージー", image: "./images/BSP_V_15.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド スムージー", image: "./images/BSP_V_16.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム クラシック ロッド", image: "./images/BSP_V_17.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド クラシック ロッド", image: "./images/BSP_V_18.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム ダラー", image: "./images/BSP_V_19.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド ダラー", image: "./images/BSP_V_20.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム マイティ スター", image: "./images/BSP_V_21.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド マイティ スター", image: "./images/BSP_V_22.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム デカダント ディッシュ", image: "./images/BSP_V_23.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド デカダント ディッシュ", image: "./images/BSP_V_24.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム レイザー スタイル", image: "./images/BSP_V_25.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド レイザー スタイル", image: "./images/BSP_V_26.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム ケルティック ノット", image: "./images/BSP_V_27.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド ケルティック ノット", image: "./images/BSP_V_28.png", type: "Bespoke", source: "Vanilla" },
  { name: "クローム ウォリアー ディッシュ", image: "./images/BSP_V_29.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド ウォリアー ディッシュ", image: "./images/BSP_V_30.png", type: "Bespoke", source: "Vanilla" },
  { name: "ゴールド ビッグ ドッグ スポークス", image: "./images/BSP_V_31.png", type: "Bespoke", source: "Vanilla" },


  // Rally
  { name: "クラシック ファイブ", image: "./images/RLY_V_1.png", type: "Rally", source: "Vanilla" },
  { name: "クラシック ファイブ（ストライプ）", image: "./images/RLY_V_2.png", type: "Rally", source: "Vanilla" },
  { name: "レトロ スター", image: "./images/RLY_V_3.png", type: "Rally", source: "Vanilla" },
  { name: "レトロ スター（ストライプ）", image: "./images/RLY_V_4.png", type: "Rally", source: "Vanilla" },
  { name: "トリプレックス", image: "./images/RLY_V_5.png", type: "Rally", source: "Vanilla" },
  { name: "トリプレックス（ストライプ）", image: "./images/RLY_V_6.png", type: "Rally", source: "Vanilla" },
  { name: "セブンティーズ スペック", image: "./images/RLY_V_7.png", type: "Rally", source: "Vanilla" },
  { name: "セブンティーズ スペック（ストライプ）", image: "./images/RLY_V_8.png", type: "Rally", source: "Vanilla" },
  { name: "スーパー ファイブ アール", image: "./images/RLY_V_9.png", type: "Rally", source: "Vanilla" },
  { name: "スーパー ファイブ アール（ストライプ）", image: "./images/RLY_V_10.png", type: "Rally", source: "Vanilla" },
  { name: "スピードスター", image: "./images/RLY_V_11.png", type: "Rally", source: "Vanilla" },
  { name: "スピードスター（ストライプ）", image: "./images/RLY_V_12.png", type: "Rally", source: "Vanilla" },
  { name: "ジーピー ナインティ", image: "./images/RLY_V_13.png", type: "Rally", source: "Vanilla" },
  { name: "ジーピー ナインティ（ストライプ）", image: "./images/RLY_V_14.png", type: "Rally", source: "Vanilla" },
  { name: "スーパー スポーク", image: "./images/RLY_V_15.png", type: "Rally", source: "Vanilla" },
  { name: "スーパー スポーク（ストライプ）", image: "./images/RLY_V_16.png", type: "Rally", source: "Vanilla" },
  { name: "グリッドライン", image: "./images/RLY_V_17.png", type: "Rally", source: "Vanilla" },
  { name: "グリッドライン（ストライプ）", image: "./images/RLY_V_18.png", type: "Rally", source: "Vanilla" },
  { name: "スノーフレーク", image: "./images/RLY_V_19.png", type: "Rally", source: "Vanilla" },
  { name: "スノーフレーク（ストライプ）", image: "./images/RLY_V_20.png", type: "Rally", source: "Vanilla" },


  // Street
  { name: "レトロ スティーリー", image: "./images/STR_V_1.png", type: "Street", source: "Vanilla" },
  { name: "ポバティ スペック スティーリー", image: "./images/STR_V_2.png", type: "Street", source: "Vanilla" },
  { name: "コンケイブ スティーリー", image: "./images/STR_V_3.png", type: "Street", source: "Vanilla" },
  { name: "ネビュラ", image: "./images/STR_V_4.png", type: "Street", source: "Vanilla" },
  { name: "ホットリング スティーリー", image: "./images/STR_V_5.png", type: "Street", source: "Vanilla" },
  { name: "カップ チャンピオン", image: "./images/STR_V_6.png", type: "Street", source: "Vanilla" },
  { name: "スタンスト EG カスタム", image: "./images/STR_V_7.png", type: "Street", source: "Vanilla" },
  { name: "クラッカ カスタム", image: "./images/STR_V_8.png", type: "Street", source: "Vanilla" },
  { name: "デュークス カスタム", image: "./images/STR_V_9.png", type: "Street", source: "Vanilla" },
  { name: "エンド v.3 カスタム", image: "./images/STR_V_10.png", type: "Street", source: "Vanilla" },
  { name: "V8 キラー", image: "./images/STR_V_11.png", type: "Street", source: "Vanilla" },
  { name: "フジワラ カスタム", image: "./images/STR_V_12.png", type: "Street", source: "Vanilla" },
  { name: "コスモ MKII", image: "./images/STR_V_13.png", type: "Street", source: "Vanilla" },
  { name: "エアロ スター", image: "./images/STR_V_14.png", type: "Street", source: "Vanilla" },
  { name: "ハイプ ファイブ", image: "./images/STR_V_15.png", type: "Street", source: "Vanilla" },
  { name: "ラフ ウェルド メガ ディープ", image: "./images/STR_V_16.png", type: "Street", source: "Vanilla" },
  { name: "メルシー コンケイブ", image: "./images/STR_V_17.png", type: "Street", source: "Vanilla" },
  { name: "スゴイ コンケイブ", image: "./images/STR_V_18.png", type: "Street", source: "Vanilla" },
  { name: "シンセティック Z コンケイブ", image: "./images/STR_V_19.png", type: "Street", source: "Vanilla" },
  { name: "エンド v.4 ディッシュド", image: "./images/STR_V_20.png", type: "Street", source: "Vanilla" },
  { name: "ハイパーフレッシュ", image: "./images/STR_V_21.png", type: "Street", source: "Vanilla" },
  { name: "トルファデ コンケイブ", image: "./images/STR_V_22.png", type: "Street", source: "Vanilla" },
  { name: "オーガニック タイプ II", image: "./images/STR_V_23.png", type: "Street", source: "Vanilla" },
  { name: "ビッグ マンバ", image: "./images/STR_V_24.png", type: "Street", source: "Vanilla" },
  { name: "ディープ フレーク", image: "./images/STR_V_25.png", type: "Street", source: "Vanilla" },
  { name: "コスモ MKIII", image: "./images/STR_V_26.png", type: "Street", source: "Vanilla" },
  { name: "コンケイブ レーサー", image: "./images/STR_V_27.png", type: "Street", source: "Vanilla" },
  { name: "ディープ フレーク リバース", image: "./images/STR_V_28.png", type: "Street", source: "Vanilla" },
  { name: "ワイルド ワゴン", image: "./images/STR_V_29.png", type: "Street", source: "Vanilla" },
  { name: "コンケイブ メガ メッシュ", image: "./images/STR_V_30.png", type: "Street", source: "Vanilla" },


  // HighEnd
  { name: "シャドウ", image: "./images/HED_V_1.png", type: "HighEnd", source: "Vanilla" },
  { name: "ハイパー", image: "./images/HED_V_2.png", type: "HighEnd", source: "Vanilla" },
  { name: "ブレード", image: "./images/HED_V_3.png", type: "HighEnd", source: "Vanilla" },
  { name: "ダイアモンド", image: "./images/HED_V_4.png", type: "HighEnd", source: "Vanilla" },
  { name: "スパ ジー", image: "./images/HED_V_5.png", type: "HighEnd", source: "Vanilla" },
  { name: "クロマティック ゼット", image: "./images/HED_V_6.png", type: "HighEnd", source: "Vanilla" },
  { name: "マーシー ch.リップ", image: "./images/HED_V_7.png", type: "HighEnd", source: "Vanilla" },
  { name: "オベイ RS", image: "./images/HED_V_8.png", type: "HighEnd", source: "Vanilla" },
  { name: "GT クローム", image: "./images/HED_V_9.png", type: "HighEnd", source: "Vanilla" },
  { name: "チーター R", image: "./images/HED_V_10.png", type: "HighEnd", source: "Vanilla" },
  { name: "ソーラー", image: "./images/HED_V_11.png", type: "HighEnd", source: "Vanilla" },
  { name: "スプリット テン", image: "./images/HED_V_12.png", type: "HighEnd", source: "Vanilla" },
  { name: "ダッシュ VIP", image: "./images/HED_V_13.png", type: "HighEnd", source: "Vanilla" },
  { name: "ロズスピード テン", image: "./images/HED_V_14.png", type: "HighEnd", source: "Vanilla" },
  { name: "カーボン インフェルノ", image: "./images/HED_V_15.png", type: "HighEnd", source: "Vanilla" },
  { name: "カーボン シャドウ", image: "./images/HED_V_16.png", type: "HighEnd", source: "Vanilla" },
  { name: "カーボン ゼット", image: "./images/HED_V_17.png", type: "HighEnd", source: "Vanilla" },
  { name: "カーボン ソーラー", image: "./images/HED_V_18.png", type: "HighEnd", source: "Vanilla" },
  { name: "カーボン チーター R", image: "./images/HED_V_19.png", type: "HighEnd", source: "Vanilla" },
  { name: "カーボン S レーサー", image: "./images/HED_V_20.png", type: "HighEnd", source: "Vanilla" },


  // Tuner
  { name: "コスモ", image: "./images/TNR_V_1.png", type: "Tuner", source: "Vanilla" },
  { name: "スーパー メッシュ", image: "./images/TNR_V_2.png", type: "Tuner", source: "Vanilla" },
  { name: "アウトサイダー", image: "./images/TNR_V_3.png", type: "Tuner", source: "Vanilla" },
  { name: "ローラス", image: "./images/TNR_V_4.png", type: "Tuner", source: "Vanilla" },
  { name: "ドリフマイスター", image: "./images/TNR_V_5.png", type: "Tuner", source: "Vanilla" },
  { name: "スライサー", image: "./images/TNR_V_6.png", type: "Tuner", source: "Vanilla" },
  { name: "エル クアトロ", image: "./images/TNR_V_7.png", type: "Tuner", source: "Vanilla" },
  { name: "ダブド", image: "./images/TNR_V_8.png", type: "Tuner", source: "Vanilla" },
  { name: "ファイブ スター", image: "./images/TNR_V_9.png", type: "Tuner", source: "Vanilla" },
  { name: "スライドウェイズ", image: "./images/TNR_V_10.png", type: "Tuner", source: "Vanilla" },
  { name: "エイペックス", image: "./images/TNR_V_11.png", type: "Tuner", source: "Vanilla" },
  { name: "スタンスド EG", image: "./images/TNR_V_12.png", type: "Tuner", source: "Vanilla" },
  { name: "カウンターステア", image: "./images/TNR_V_13.png", type: "Tuner", source: "Vanilla" },
  { name: "エンド v.1", image: "./images/TNR_V_14.png", type: "Tuner", source: "Vanilla" },
  { name: "エンド v.2", image: "./images/TNR_V_15.png", type: "Tuner", source: "Vanilla" },
  { name: "グルッペ Z", image: "./images/TNR_V_16.png", type: "Tuner", source: "Vanilla" },
  { name: "チョクドリ", image: "./images/TNR_V_17.png", type: "Tuner", source: "Vanilla" },
  { name: "シケイン", image: "./images/TNR_V_18.png", type: "Tuner", source: "Vanilla" },
  { name: "サイソク", image: "./images/TNR_V_19.png", type: "Tuner", source: "Vanilla" },
  { name: "ディッシュド エイト", image: "./images/TNR_V_20.png", type: "Tuner", source: "Vanilla" },
  { name: "フジワラ", image: "./images/TNR_V_21.png", type: "Tuner", source: "Vanilla" },
  { name: "ゾクシャ", image: "./images/TNR_V_22.png", type: "Tuner", source: "Vanilla" },
  { name: "バトル エイト", image: "./images/TNR_V_23.png", type: "Tuner", source: "Vanilla" },
  { name: "ラリー マスター", image: "./images/TNR_V_24.png", type: "Tuner", source: "Vanilla" },


  // Bike
  { name: "スピードウェイ", image: "./images/BKE_V_1.png", type: "Bike", source: "Vanilla" },
  { name: "ストリート スペシャル", image: "./images/BKE_V_2.png", type: "Bike", source: "Vanilla" },
  { name: "レーサー", image: "./images/BKE_V_3.png", type: "Bike", source: "Vanilla" },
  { name: "トラック スター", image: "./images/BKE_V_4.png", type: "Bike", source: "Vanilla" },
  { name: "オーバーロード", image: "./images/BKE_V_5.png", type: "Bike", source: "Vanilla" },
  { name: "トライデント", image: "./images/BKE_V_6.png", type: "Bike", source: "Vanilla" },
  { name: "トリプル スレット", image: "./images/BKE_V_7.png", type: "Bike", source: "Vanilla" },
  { name: "スティレット", image: "./images/BKE_V_8.png", type: "Bike", source: "Vanilla" },
  { name: "ワイヤーズ", image: "./images/BKE_V_9.png", type: "Bike", source: "Vanilla" },
  { name: "ボバー", image: "./images/BKE_V_10.png", type: "Bike", source: "Vanilla" },
  { name: "ソリダス", image: "./images/BKE_V_11.png", type: "Bike", source: "Vanilla" },
  { name: "アイス シールド", image: "./images/BKE_V_12.png", type: "Bike", source: "Vanilla" },
  { name: "ループス", image: "./images/BKE_V_13.png", type: "Bike", source: "Vanilla" },
  { name: "ロンパー レーシング", image: "./images/BKE_V_14.png", type: "Bike", source: "Vanilla" },
  { name: "ワープ ドライブ", image: "./images/BKE_V_15.png", type: "Bike", source: "Vanilla" },
  { name: "スノーフレーク", image: "./images/BKE_V_16.png", type: "Bike", source: "Vanilla" },
  { name: "ホーリー スポーク", image: "./images/BKE_V_17.png", type: "Bike", source: "Vanilla" },
  { name: "オールド スクール トリプル", image: "./images/BKE_V_18.png", type: "Bike", source: "Vanilla" },
  { name: "フューチュラ", image: "./images/BKE_V_19.png", type: "Bike", source: "Vanilla" },
  { name: "クォーター マイル キング", image: "./images/BKE_V_20.png", type: "Bike", source: "Vanilla" },
  { name: "カートホイール", image: "./images/BKE_V_21.png", type: "Bike", source: "Vanilla" },
  { name: "ダブル ファイブ", image: "./images/BKE_V_22.png", type: "Bike", source: "Vanilla" },
  { name: "シュリケン", image: "./images/BKE_V_23.png", type: "Bike", source: "Vanilla" },
  { name: "シンプル シックス", image: "./images/BKE_V_24.png", type: "Bike", source: "Vanilla" },
  { name: "ケルティック", image: "./images/BKE_V_25.png", type: "Bike", source: "Vanilla" },
  { name: "レイザー", image: "./images/BKE_V_26.png", type: "Bike", source: "Vanilla" },
  { name: "ツイステッド", image: "./images/BKE_V_27.png", type: "Bike", source: "Vanilla" },
  { name: "モーニング スター", image: "./images/BKE_V_28.png", type: "Bike", source: "Vanilla" },
  { name: "ジャギッド スポークス", image: "./images/BKE_V_29.png", type: "Bike", source: "Vanilla" },
  { name: "エイドロン", image: "./images/BKE_V_30.png", type: "Bike", source: "Vanilla" },
  { name: "エニグマ", image: "./images/BKE_V_31.png", type: "Bike", source: "Vanilla" },
  { name: "ビッグ スポークス", image: "./images/BKE_V_32.png", type: "Bike", source: "Vanilla" },
  { name: "ウェブズ", image: "./images/BKE_V_33.png", type: "Bike", source: "Vanilla" },
  { name: "ホットプレート", image: "./images/BKE_V_34.png", type: "Bike", source: "Vanilla" },
  { name: "ボブスタ", image: "./images/BKE_V_35.png", type: "Bike", source: "Vanilla" },
  { name: "グラウチ", image: "./images/BKE_V_36.png", type: "Bike", source: "Vanilla" }



];

  // SPT_M_51 ~ SPT_M_113 を追加
for (let i = 51; i <= 113; i++) {
  data.push({
    name: `Sports ${i}`,
    image: `./images/SPT_M_${i}.png`,
    type: "Sports",
    source: "MOD"
  });
}

  // OFF_M_36 ~ OFF_M_50 を追加
for (let i = 36; i <= 50; i++) {
  data.push({
    name: `Offroad ${i}`,
    image: `./images/OFF_M_${i}.png`,
    type: "Offroad",
    source: "MOD"
  });
}
// 要素取得
const container = document.getElementById("wheel-container");
const searchInput = document.getElementById("search");
const typeFilters = document.querySelectorAll(".type-filter");
const sourceFilters = document.querySelectorAll(".source-filter");
const filterSummary = document.getElementById("filter-summary");

// データ表示
function displayData(items) {
  container.innerHTML = "";

  if (items.length === 0) {
    container.innerHTML = `
      <div class="no-result">
        <p>この条件に合うホイールはまだ <strong>作成中</strong> です。</p>
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
    container.appendChild(card);
  });
}

// フィルター適用
function applyFilters() {
  const keyword = searchInput.value.toLowerCase();

  const selectedTypes = Array.from(typeFilters)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const selectedSources = Array.from(sourceFilters)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const filtered = data.filter(item => {
    const matchesName = item.name.toLowerCase().includes(keyword);
    const matchesType = selectedTypes.includes(item.type);
    const matchesSource = selectedSources.includes(item.source);
    return matchesName && matchesType && matchesSource;
  });

  filterSummary.textContent = `絞り込み結果：${filtered.length} 件`;
  displayData(filtered);
}

// イベント登録
searchInput.addEventListener("input", applyFilters);
typeFilters.forEach(cb => cb.addEventListener("change", applyFilters));
sourceFilters.forEach(cb => cb.addEventListener("change", applyFilters));

// 初期表示
applyFilters();
