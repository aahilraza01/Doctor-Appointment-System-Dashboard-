declare module 'react-big-calendar' {
  import { ComponentType, ReactNode } from 'react';

  export interface Event {
    id: string;
    title: string;
    start: Date;
    end: Date;
    [key: string]: any;
  }

  export interface View {
    name: string;
  }

  export interface Culture {
    [key: string]: any;
  }

  export interface BigCalendarProps<TEvent extends Event = Event> {
    localizer: any;
    events: TEvent[];
    views?: View[];
    view?: string;
    date?: Date;
    defaultDate?: Date;
    defaultView?: string;
    getNow?: () => Date;
    onNavigate?: (newDate: Date) => void;
    onView?: (view: string) => void;
    length?: number;
    toolbar?: boolean;
    showMultiDayTimes?: boolean;
    step?: number;
    timeslots?: number;
    rtl?: boolean;
    eventPropGetter?: (event: TEvent) => { className?: string; style?: Record<string, any> };
    dayPropGetter?: (date: Date) => { className?: string; style?: Record<string, any> };
    selectable?: boolean;
    longPressThreshold?: number;
    onSelectSlot?: (slotInfo: { start: Date; end: Date; slots: Date[]; action: string }) => void;
    onSelectEvent?: (event: TEvent, e: React.SyntheticEvent) => void;
    onDoubleClickEvent?: (event: TEvent, e: React.SyntheticEvent) => void;
    onKeyPressEvent?: (event: TEvent, e: React.SyntheticEvent) => void;
    startAccessor?: any;
    endAccessor?: any;
    titleAccessor?: any;
    allDayAccessor?: any;
    resourceAccessor?: any;
    resourceIdAccessor?: any;
    resourceTitleAccessor?: any;
    components?: any;
    formats?: any;
    messages?: any;
    culture?: string;
    formats?: any;
    scrollToTime?: Date;
    popup?: boolean;
    [key: string]: any;
  }

  export class Calendar<TEvent extends Event = Event> extends React.Component<BigCalendarProps<TEvent>> {}

  export interface DateLocalizer {
    format: (value: Date, format: string, culture?: Culture) => string;
    startOfWeek: (culture: Culture) => number;
  }

  export interface DateLocalizerSpec {
    format: (value: Date, culture: Culture, formatString: string) => string;
    formats: Record<string, string>;
    firstOfWeek: (culture: Culture) => number;
  }

  export function dateFnsLocalizer(spec: {
    format: (value: Date, format: string) => string;
    parse: (value: string, format: string) => Date;
    startOfWeek: (date: Date) => Date;
    getDay: (date: Date) => number;
    locales: {
      [key: string]: any;
    };
  }): DateLocalizer;

  export default Calendar;
}
