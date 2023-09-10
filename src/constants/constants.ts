export const VALUE_AREA_KEY = 'value_area';
export const VALUE_BAR_KEY = 'value_bar';

export const X_AXIS_KEY = 'x';
export const Y_AXIS_KEY = 'y';

export const COLORS = {
  green: { base: 'rgba(49, 184, 105, 1)', dimmed: 'rgba(49, 184, 105, 0.2)' },
  blue: { base: 'rgba(40, 121, 255, 1)', dimmed: 'rgba(40, 121, 255, 0.4)' },
} as const;

export const AREA_CHART_SCALE_MAX = 200; //bar 차트와 겹치지 않도록 하기 위함
