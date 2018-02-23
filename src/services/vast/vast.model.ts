export enum VastPosition {
    TOP_LEFT = 'top_left',
    TOP_MIDDLE = 'top_middle',
    TOP_RIGHT = 'top_right',
    MIDDLE_LEFT = 'middle_left',
    MIDDLE_RIGHT = 'middle_right',
    BOTTOM_LEFT = 'bottom_left',
    BOTTOM_MIDDLE = 'bottom_middle',
    BOTTOM_RIGHT = 'bottom_right'
}

export class CreateVastDTO {
    readonly vast_url: string;
    readonly position: VastPosition;
    readonly hide_ui: boolean;
}