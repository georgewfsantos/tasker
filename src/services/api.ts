export const loadLists = () => {
  return [
    {
      title: "Tasks",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Just an example content to fill the card",
          labels: ["#7159c1"],
          user:
            "https://avatars.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4",
        },
        {
          id: 2,
          content: "Just an example content to fill the card",
          labels: ["#7159c1"],
          user:
            "https://avatars.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4",
        },
        {
          id: 3,
          content: "Just an example content to fill the card",
          labels: ["#7159c1"],
          user:
            "https://avatars.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4",
        },
        {
          id: 4,
          content: 'Just an example content to fill the card"',
          labels: ["#54e1f7"],
          user:
            "https://avatars.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4",
        },
        {
          id: 5,
          content: "Just an example content to fill the card",
          labels: ["#54e1f7"],
          user:
            "https://avatars.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4",
        },
      ],
    },
    {
      title: "In Progress",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Just an example content to fill the card",
          labels: [],
          user:
            "https://avatars.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4",
        },
      ],
    },
    {
      title: "Waiting",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "Just an example content to fill the card",
          labels: ["#7159c1"],
          user:
            "https://avatars.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4",
        },
        {
          id: 8,
          content: "Just an example content to fill the card",
          labels: ["#54e1f7"],
          user:
            "https://avatars.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4",
        },
        {
          id: 9,
          content: "Just an example content to fill the card",
          labels: [],
        },
      ],
    },
    {
      title: "Done",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Just an example content to fill the card",
          labels: [],
        },
        {
          id: 12,
          content: "Just an example content to fill the card",
          labels: ["#54e1f7"],
        },
        {
          id: 13,
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ["#7159c1"],
        },
      ],
    },
  ];
};
