import React from 'react'

export const SessionJson = {
    data: [{
        id:0,
        name: 'Sesion 1',
        type: '',
        date: '',
        sessionBlock: [{
            type: 'WARN_UP',
            desc: '',
            img: '',
            timer: {
                type: 'EMOM',
                time: 5,
                ud: 'min',
                rest: 0,
                cda: 0,
            },
            block: [{
                reps: [],
                exercise: [
                    'DEEP_SQT_OH_ROT',
                    'FLOOR_SHOULDER_SLIDES',
                    'WALL_SHOULDER_SLIDES',
                    'LUNGE',
                    'SINGLE_LEG_DEADLIFT',
                    'Y_BALANCE',
                    'MOUNTAIN_CLIMBERS'
                ]
            }]
        },
        {
            type: 'WHEIGHTLIFTING',
            desc: '',
            img: '',
            timer: {
                type: 'TIME',
                time: 4,
                ud: 'min',
                rest: 0,
                cda: 0,
            },
            block: [{
                reps: [3],
                exercise: ['OVERHEAD_SQUAT'],
                desc : ['Behind The Neck Push Press'],
            }, {
                reps: [3],
                exercise: ['OVERHEAD_SQUAT'],
                desc : ['Tempo (MAX WHEIGHT 30%)'],
            }
            ]
        },
        {
            type: 'WHEIGHTLIFTING',
            desc: '',
            img: '',
            timer: {
                type: 'EVERY',
                time: 0,
                rest: 0,
                cda: '1:30',
                rounds:7,
                
            },
            block: [{
                reps: [3],
                exercise: ['OVERHEAD_SQUAT'],
                desc : ['Increment (MAX WHEIGHT 70%)'],
            }, {
                reps: [5],
                exercise: ['PVC_SQUAT_THERAPY_FACE_WALL'],
                desc : ['Therapy face wall'],
            }
            ]
        },
        {
            type: 'MET_CON',
            desc: '',
            img: '',
            timer: {
                type: 'FOR_TIME',
                time: '20:00',
                rest: '1:00',
                cda: '',
                rounds: 6,
                
            },
            block: [{
                reps: [16,16],
                exercise: ['DB_BOX_STEP_OVER','DB_POWER_CLEAN_ALT'],
            }]
        },
        ]
    }]
}
