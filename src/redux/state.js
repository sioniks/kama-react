let state = {
  profilePage: {
    postsData: [
      {
        id: 1,
        name: "Hi? popel",
        likesCount: 22
      },
      {
        id: 2,
        name: "Go to hell",
        likesCount: 0
      },
      {
        id: 3,
        name: "Insadrill das unterriht",
        likesCount: 1
      },
      {
        id: 4,
        name: "Gelder smkin ungolden",
        likesCount: 2223232
      },
      {
        id: 5,
        name: "Der himmel und der bandershtadt",
        likesCount: 223
      }
    ]
  },
  messagesPage: {
    dialogsData: [
      {
        id: 1,
        name: "Andrey"
      },
      {
        id: 2,
        name: "DIma"
      },
      {
        id: 3,
        name: "Tron"
      },
      {
        id: 4,
        name: "Smel"
      },
      {
        id: 5,
        name: "Folover"
      }
    ],
    messagesData: [
      {
        id: 1,
        message: "loresdfgdfgdfgd fdf gdfgfd gdfgd fgdm2"
      },
      {
        id: 2,
        message: "lorem2"
      },
      {
        id: 3,
        message: "lodfgdfg dfgdf gdfgd fgdf gdfgd frem2"
      },
      {
        id: 4,
        message: "lorem2"
      },
      {
        id: 5,
        message: "lorem2"
      }
    ]
  }
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    name: postMessage,
    likesCount: 0
  };
  state.profilePage.postsData.push(newPost);
}

export default state;
