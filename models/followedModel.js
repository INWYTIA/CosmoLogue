const user = {
  username: "",
  sign: "",
  followed: {
    api1: {
      id: "",
      name: "",
      link: ""
    },
    api2: {
      id: "",
      name: "",
      test: ""
    },
    api3: {
      name: "",
      id: ""
    }
  }
}

const userAndArticles = {
  username: "",
  sign: "",
  followed: [{ type: Schema.Types.ObjectId, ref: 'Articles' }]
}

const Article = {
  _id: "",
  apiRef: "",
  apiID: "",
  title: "",
  data: {}
}