export type SelectOptionType =
  | "Otindag"
  | "Horqin"
  | "Hulunbuir"
  | "Mu Us"
  | "Badain"
  | "Tengger"
  | "Kubuqi"
  | "Alxa"
  | "Gobi"
  | "Bayankhongor";

export type ValueType = { yearsAhead: number; precipitationChange: number };
export type DataType = Record<SelectOptionType, ValueType[]>;

export const FUTURE_PRECIPITATION = {
  Otindag: [
    { yearsAhead: 1, precipitationChange: -1.8512 },
    { yearsAhead: 2, precipitationChange: -1.9224 },
    { yearsAhead: 3, precipitationChange: -1.9936 },
    { yearsAhead: 4, precipitationChange: -2.0648 },
    { yearsAhead: 5, precipitationChange: -2.136 },
    { yearsAhead: 10, precipitationChange: -2.492 },
  ],
  Horqin: [
    { yearsAhead: 1, precipitationChange: -2.6 },
    { yearsAhead: 2, precipitationChange: -2.7 },
    { yearsAhead: 3, precipitationChange: -2.8 },
    { yearsAhead: 4, precipitationChange: -2.9 },
    { yearsAhead: 5, precipitationChange: -3.0 },
    { yearsAhead: 10, precipitationChange: -3.5 },
  ],
  Hulunbuir: [
    { yearsAhead: 1, precipitationChange: -1.248 },
    { yearsAhead: 2, precipitationChange: -1.296 },
    { yearsAhead: 3, precipitationChange: -1.344 },
    { yearsAhead: 4, precipitationChange: -1.392 },
    { yearsAhead: 5, precipitationChange: -1.44 },
    { yearsAhead: 10, precipitationChange: -1.68 },
  ],
  "Mu Us": [
    { yearsAhead: 1, precipitationChange: -3.12 },
    { yearsAhead: 2, precipitationChange: -3.24 },
    { yearsAhead: 3, precipitationChange: -3.36 },
    { yearsAhead: 4, precipitationChange: -3.48 },
    { yearsAhead: 5, precipitationChange: -3.6 },
    { yearsAhead: 10, precipitationChange: -4.2 },
  ],
  Badain: [
    { yearsAhead: 1, precipitationChange: 0.0 },
    { yearsAhead: 2, precipitationChange: 0.0 },
    { yearsAhead: 3, precipitationChange: 0.0 },
    { yearsAhead: 4, precipitationChange: 0.0 },
    { yearsAhead: 5, precipitationChange: 0.0 },
    { yearsAhead: 10, precipitationChange: 0.0 },
  ],
  Tengger: [
    { yearsAhead: 1, precipitationChange: -1.976 },
    { yearsAhead: 2, precipitationChange: -2.052 },
    { yearsAhead: 3, precipitationChange: -2.128 },
    { yearsAhead: 4, precipitationChange: -2.204 },
    { yearsAhead: 5, precipitationChange: -2.28 },
    { yearsAhead: 10, precipitationChange: -2.66 },
  ],
  Kubuqi: [
    { yearsAhead: 1, precipitationChange: -2.184 },
    { yearsAhead: 2, precipitationChange: -2.268 },
    { yearsAhead: 3, precipitationChange: -2.352 },
    { yearsAhead: 4, precipitationChange: -2.436 },
    { yearsAhead: 5, precipitationChange: -2.52 },
    { yearsAhead: 10, precipitationChange: -2.94 },
  ],
  Alxa: [
    { yearsAhead: 1, precipitationChange: -1.768 },
    { yearsAhead: 2, precipitationChange: -1.836 },
    { yearsAhead: 3, precipitationChange: -1.904 },
    { yearsAhead: 4, precipitationChange: -1.972 },
    { yearsAhead: 5, precipitationChange: -2.04 },
    { yearsAhead: 10, precipitationChange: -2.38 },
  ],
  Gobi: [
    { yearsAhead: 1, precipitationChange: -2.6 },
    { yearsAhead: 2, precipitationChange: -2.7 },
    { yearsAhead: 3, precipitationChange: -2.8 },
    { yearsAhead: 4, precipitationChange: -2.9 },
    { yearsAhead: 5, precipitationChange: -3.0 },
    { yearsAhead: 10, precipitationChange: -3.5 },
  ],
  Bayankhongor: [
    { yearsAhead: 1, precipitationChange: -3.224 },
    { yearsAhead: 2, precipitationChange: -3.348 },
    { yearsAhead: 3, precipitationChange: -3.472 },
    { yearsAhead: 4, precipitationChange: -3.596 },
    { yearsAhead: 5, precipitationChange: -3.72 },
    { yearsAhead: 10, precipitationChange: -4.34 },
  ],
} as DataType;

export type ValueByYearType = Record<
  SelectOptionType,
  {
    precipitationChange: number;
    dustStormFrequencyIncrease: number;
    desertificationSpeed: number;
  }
>;
export type DataByYearType = Record<
  "1" | "2" | "3" | "4" | "5" | "10",
  ValueByYearType
>;
export const FUTURE_DESERTIFICATION_PREDICTIONS_BY_YEAR = {
  1: {
    Otindag: {
      precipitationChange: -1.8512,
      dustStormFrequencyIncrease: 3.12,
      desertificationSpeed: 416.0,
    },
    Horqin: {
      precipitationChange: -2.6,
      dustStormFrequencyIncrease: 2.08,
      desertificationSpeed: 364.0,
    },
    Hulunbuir: {
      precipitationChange: -1.248,
      dustStormFrequencyIncrease: 4.16,
      desertificationSpeed: 312.0,
    },
    "Mu Us": {
      precipitationChange: -3.12,
      dustStormFrequencyIncrease: 3.12,
      desertificationSpeed: 260.0,
    },
    Badain: {
      precipitationChange: 0.0,
      dustStormFrequencyIncrease: 1.04,
      desertificationSpeed: 156.0,
    },
    Tengger: {
      precipitationChange: -1.976,
      dustStormFrequencyIncrease: 2.08,
      desertificationSpeed: 228.8,
    },
    Kubuqi: {
      precipitationChange: -2.184,
      dustStormFrequencyIncrease: 3.12,
      desertificationSpeed: 364.0,
    },
    Alxa: {
      precipitationChange: -1.768,
      dustStormFrequencyIncrease: 2.08,
      desertificationSpeed: 312.0,
    },
    Gobi: {
      precipitationChange: -2.6,
      dustStormFrequencyIncrease: 5.2,
      desertificationSpeed: 520.0,
    },
    Bayankhongor: {
      precipitationChange: -3.224,
      dustStormFrequencyIncrease: 4.16,
      desertificationSpeed: 468.0,
    },
  },
  2: {
    Otindag: {
      precipitationChange: -1.9224,
      dustStormFrequencyIncrease: 3.24,
      desertificationSpeed: 432.0,
    },
    Horqin: {
      precipitationChange: -2.7,
      dustStormFrequencyIncrease: 2.16,
      desertificationSpeed: 378.0,
    },
    Hulunbuir: {
      precipitationChange: -1.296,
      dustStormFrequencyIncrease: 4.32,
      desertificationSpeed: 324.0,
    },
    "Mu Us": {
      precipitationChange: -3.24,
      dustStormFrequencyIncrease: 3.24,
      desertificationSpeed: 270.0,
    },
    Badain: {
      precipitationChange: 0.0,
      dustStormFrequencyIncrease: 1.08,
      desertificationSpeed: 162.0,
    },
    Tengger: {
      precipitationChange: -2.052,
      dustStormFrequencyIncrease: 2.16,
      desertificationSpeed: 237.6,
    },
    Kubuqi: {
      precipitationChange: -2.268,
      dustStormFrequencyIncrease: 3.24,
      desertificationSpeed: 378.0,
    },
    Alxa: {
      precipitationChange: -1.836,
      dustStormFrequencyIncrease: 2.16,
      desertificationSpeed: 324.0,
    },
    Gobi: {
      precipitationChange: -2.7,
      dustStormFrequencyIncrease: 5.4,
      desertificationSpeed: 540.0,
    },
    Bayankhongor: {
      precipitationChange: -3.348,
      dustStormFrequencyIncrease: 4.32,
      desertificationSpeed: 486.0,
    },
  },
  3: {
    Otindag: {
      precipitationChange: -1.9936,
      dustStormFrequencyIncrease: 3.36,
      desertificationSpeed: 448.0,
    },
    Horqin: {
      precipitationChange: -2.8,
      dustStormFrequencyIncrease: 2.24,
      desertificationSpeed: 392.0,
    },
    Hulunbuir: {
      precipitationChange: -1.344,
      dustStormFrequencyIncrease: 4.48,
      desertificationSpeed: 336.0,
    },
    "Mu Us": {
      precipitationChange: -3.36,
      dustStormFrequencyIncrease: 3.36,
      desertificationSpeed: 280.0,
    },
    Badain: {
      precipitationChange: 0.0,
      dustStormFrequencyIncrease: 1.12,
      desertificationSpeed: 168.0,
    },
    Tengger: {
      precipitationChange: -2.128,
      dustStormFrequencyIncrease: 2.24,
      desertificationSpeed: 246.4,
    },
    Kubuqi: {
      precipitationChange: -2.352,
      dustStormFrequencyIncrease: 3.36,
      desertificationSpeed: 392.0,
    },
    Alxa: {
      precipitationChange: -1.904,
      dustStormFrequencyIncrease: 2.24,
      desertificationSpeed: 336.0,
    },
    Gobi: {
      precipitationChange: -2.8,
      dustStormFrequencyIncrease: 5.6,
      desertificationSpeed: 560.0,
    },
    Bayankhongor: {
      precipitationChange: -3.472,
      dustStormFrequencyIncrease: 4.48,
      desertificationSpeed: 504.0,
    },
  },
  4: {
    Otindag: {
      precipitationChange: -2.0648,
      dustStormFrequencyIncrease: 3.48,
      desertificationSpeed: 464.0,
    },
    Horqin: {
      precipitationChange: -2.9,
      dustStormFrequencyIncrease: 2.32,
      desertificationSpeed: 406.0,
    },
    Hulunbuir: {
      precipitationChange: -1.392,
      dustStormFrequencyIncrease: 4.64,
      desertificationSpeed: 348.0,
    },
    "Mu Us": {
      precipitationChange: -3.48,
      dustStormFrequencyIncrease: 3.48,
      desertificationSpeed: 290.0,
    },
    Badain: {
      precipitationChange: 0.0,
      dustStormFrequencyIncrease: 1.16,
      desertificationSpeed: 174.0,
    },
    Tengger: {
      precipitationChange: -2.204,
      dustStormFrequencyIncrease: 2.32,
      desertificationSpeed: 255.2,
    },
    Kubuqi: {
      precipitationChange: -2.436,
      dustStormFrequencyIncrease: 3.48,
      desertificationSpeed: 406.0,
    },
    Alxa: {
      precipitationChange: -1.972,
      dustStormFrequencyIncrease: 2.32,
      desertificationSpeed: 348.0,
    },
    Gobi: {
      precipitationChange: -2.9,
      dustStormFrequencyIncrease: 5.8,
      desertificationSpeed: 580.0,
    },
    Bayankhongor: {
      precipitationChange: -3.596,
      dustStormFrequencyIncrease: 4.64,
      desertificationSpeed: 522.0,
    },
  },
  5: {
    Otindag: {
      precipitationChange: -2.136,
      dustStormFrequencyIncrease: 3.6,
      desertificationSpeed: 480.0,
    },
    Horqin: {
      precipitationChange: -3.0,
      dustStormFrequencyIncrease: 2.4,
      desertificationSpeed: 420.0,
    },
    Hulunbuir: {
      precipitationChange: -1.44,
      dustStormFrequencyIncrease: 4.8,
      desertificationSpeed: 360.0,
    },
    "Mu Us": {
      precipitationChange: -3.6,
      dustStormFrequencyIncrease: 3.6,
      desertificationSpeed: 300.0,
    },
    Badain: {
      precipitationChange: 0.0,
      dustStormFrequencyIncrease: 1.2,
      desertificationSpeed: 180.0,
    },
    Tengger: {
      precipitationChange: -2.28,
      dustStormFrequencyIncrease: 2.4,
      desertificationSpeed: 264.0,
    },
    Kubuqi: {
      precipitationChange: -2.52,
      dustStormFrequencyIncrease: 3.6,
      desertificationSpeed: 420.0,
    },
    Alxa: {
      precipitationChange: -2.04,
      dustStormFrequencyIncrease: 2.4,
      desertificationSpeed: 360.0,
    },
    Gobi: {
      precipitationChange: -3.0,
      dustStormFrequencyIncrease: 6.0,
      desertificationSpeed: 600.0,
    },
    Bayankhongor: {
      precipitationChange: -3.72,
      dustStormFrequencyIncrease: 4.8,
      desertificationSpeed: 540.0,
    },
  },
  10: {
    Otindag: {
      precipitationChange: -2.492,
      dustStormFrequencyIncrease: 4.2,
      desertificationSpeed: 560.0,
    },
    Horqin: {
      precipitationChange: -3.5,
      dustStormFrequencyIncrease: 2.8,
      desertificationSpeed: 490.0,
    },
    Hulunbuir: {
      precipitationChange: -1.68,
      dustStormFrequencyIncrease: 5.6,
      desertificationSpeed: 420.0,
    },
    "Mu Us": {
      precipitationChange: -4.2,
      dustStormFrequencyIncrease: 4.2,
      desertificationSpeed: 350.0,
    },
    Badain: {
      precipitationChange: 0.0,
      dustStormFrequencyIncrease: 1.4,
      desertificationSpeed: 210.0,
    },
    Tengger: {
      precipitationChange: -2.66,
      dustStormFrequencyIncrease: 2.8,
      desertificationSpeed: 308.0,
    },
    Kubuqi: {
      precipitationChange: -2.94,
      dustStormFrequencyIncrease: 4.2,
      desertificationSpeed: 490.0,
    },
    Alxa: {
      precipitationChange: -2.38,
      dustStormFrequencyIncrease: 2.8,
      desertificationSpeed: 420.0,
    },
    Gobi: {
      precipitationChange: -3.5,
      dustStormFrequencyIncrease: 7.0,
      desertificationSpeed: 700.0,
    },
    Bayankhongor: {
      precipitationChange: -4.34,
      dustStormFrequencyIncrease: 5.6,
      desertificationSpeed: 630.0,
    },
  },
} as DataByYearType;
