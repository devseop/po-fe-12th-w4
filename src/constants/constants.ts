export const VALUE_AREA_KEY = 'value_area';
export const VALUE_BAR_KEY = 'value_bar';

export const X_AXIS_KEY = 'x';
export const Y_AXIS_KEY = 'y';

export const COLORS = {
  red: { base: 'rgba(251, 93, 93, 1)', dimmed: 'rgba(251, 93, 93, 0.2)' },
  blue: { base: 'rgba(46, 106, 254, 1)', dimmed: 'rgba(46, 106, 254, 0.4)' },
} as const;

export const AREA_CHART_SCALE_MAX = 200; //bar 차트와 겹치지 않도록 하기 위함
