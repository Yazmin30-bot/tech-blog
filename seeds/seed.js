const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');
const posts = [];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    let = postn= await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    posts.push(postn );
  }
 console.log(posts);

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      
      post_id: posts[Math.floor(Math.random() * posts.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();