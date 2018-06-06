export const pcEntity = {
  name: 'E',
  notes: null,
}
export const pcQuestion = {
  evaluation: {
    entity: pcEntity,
    locs: [
      {
        pos: 0,
        str: 0,
      },
      {
        pos: 0,
        str: 5,
      },
      {
        pos: 2,
        str: 3,
      },
      {
        pos: 5,
        str: 1,
      },
      {
        pos: 7,
        str: 4,
      },
      {
        pos: 9,
        str: 2,
      },
      {
        pos: 12,
        str: 0,
      },
      {
        pos: 12,
        str: 5,
      },
    ],
  },
  panels: {
    answer: {
      choices: [
        {
          name: 'B',
          notes: null,
        },
        {
          name: 'G',
          notes: null,
        },
        {
          name: 'D',
          notes: null,
        },
        {
          name: 'E',
          notes: null,
        },
      ],
      locs: [],
    },
    question: {
      entity: {
        name: 'E',
        notes: null,
      },
      locs: [
        {
          pos: 0,
          str: 0,
        },
      ],
    },
  },
}

export const pitchQuestion = {
  evaluation: {
    entity: {
      name: 'E4',
      notes: [
        'E4',
      ],
    },
    locs: [
      {
        pos: 0,
        str: 0,
      },
      {
        pos: 5,
        str: 1,
      },
      {
        pos: 9,
        str: 2,
      },
    ],
  },
  panels: {
    answer: {
      choices: [
        {
          name: 'B3',
          notes: [
            'B3',
          ],
        },
        {
          name: 'G3',
          notes: [
            'G3',
          ],
        },
        {
          name: 'D3',
          notes: [
            'D3',
          ],
        },
        {
          name: 'E4',
          notes: [
            'E4',
          ],
        },
      ],
      locs: [],
    },
    question: {
      entity: {
        name: 'E4',
        notes: [
          'E4',
        ],
      },
      locs: [
        {
          pos: 0,
          str: 0,
        },
      ],
    },
  },
}
