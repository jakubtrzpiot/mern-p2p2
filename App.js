const express = require('express');

const app = express();

const users = {
  'jaktrz03@gmail.com': {
    username: 'trzpio',
    avatarUrl:
      'https://samequizy.pl/wp-content/uploads/2021/06/30/images_4b81591b9bdce9b.jpg',
  },
  'voozen3@gmail.com': {
    username: 'voozen',
    avatarUrl: 'https://cdn-images-1.medium.com/max/800/0*x8z1XoMpeteRn5E1.png',
  },
  'maks.absalon@gmail.com': {
    username: 'maks',
    avatarUrl: 'https://pbs.twimg.com/media/EBjCJc8WsAAKCRt.jpg:large',
  },
  'test@test.com': {
    username: 'test',
    avatarUrl: null,
  },
  'admin@test.com': {
    username: 'admin',
    avatarUrl: null,
  },
};

app.get('/', (req, res) => {
  res.send('backend');
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));

// require database connection 
const dbConnect = require("./db/dbConnect");

// execute database connection 
dbConnect();
