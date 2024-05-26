(function (window) {
  const playlist = new Array(94).fill(0).map((item, index) => {
    return {
      title: getTitle(index),
      tempo: getTempo(index),
      index: index
    };
  });

  const context = [
    {
      title: "Первый класс",
      children: [
        {
          title: "Тональность До мажор. Размер 2/4",
          indexes: [1, 10],
        },
        {
          title: "Восьмые",
          indexes: [11, 26],
        },
        {
          title: "Паузы",
          indexes: [27, 35],
        },
        {
          title: "Затакт",
          indexes: [36, 47],
        },
        {
          title: "Размер 3/4",
          indexes: [48, 57],
        },
        {
          title: "Тональность Соль мажор",
          indexes: [58, 65],
        },
        {
          title: "Тональность Фа мажор",
          indexes: [66, 73],
        },
        {
          title: "Размер 4/4",
          indexes: [74, 86],
        },
        {
          title: "Тональность Ре мажор",
          indexes: [87, 94],
        },
      ],
    },
  ];

  window.playlist = playlist;
  window.context = context;

  function getTitle(index) {
    let title = (index + 1).toString();
    if (title.length < 2) {
      return `0${title}`;
    }
    return title;
  }

  function getTempo(index) {
    let tempo = 90;
    if (index >= 0 && index <= 14) {
      tempo = 80;
    }
    if (index >= 15 && index <= 16) {
      tempo = 70;
    }
    if (index >= 17 && index <= 18) {
      tempo = 60;
    }
    return tempo;
  }
})(window);
