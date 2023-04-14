import {
    animate, animateChild, group, query, style, transition,
    trigger, AnimationTriggerMetadata
} from '@angular/animations';

const transitionFrom = (direction: string) => {
    return [
        style({ position: 'relative' }),
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    [direction]: 0,
                    width: '100%'
                })
            ],
            { optional: true }
        ),
        query(
            ':enter',
            [
                style({ [direction]: '-100%' })
            ],
            { optional: true }
        ),
        query(
            ':leave',
            animateChild(),
            { optional: true }
        ),
        group([
            query(
                ':leave',
                [
                    animate('700ms ease-out', style({ [direction]: '100%' }))
                ],
                { optional: true }
            ),
            query(
                ':enter',
                [
                    animate('700ms ease-out', style({ [direction]: '0%' }))
                ],
                { optional: true }
            )
        ]),
        query(':enter', animateChild(), { optional: true }),
    ];
};

export const slideInAnimation: AnimationTriggerMetadata =
    trigger('routeAnimations', [
        transition('0 => 1, 1 => 2, 0 => 2', transitionFrom('right')),
        transition('1 => 0, 2 => 1, 2 => 0', transitionFrom('left')),
    ]);
