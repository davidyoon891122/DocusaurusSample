/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  posts: [
    {
      dirName: 'Posts',
      type: 'autogenerated'
    }
  ],
  dreamtodo: [
    {
      dirName: 'Posts/DreamTodo',
      type: 'autogenerated'
    }
  ],
  xtrading: [
    {
      dirName: 'Posts/XTrading',
      type: 'autogenerated'
    }
  ],
  easyAverage: [
    {
      dirName: 'Posts/EasyAverage',
      type: 'autogenerated'
    }
  ]
};

module.exports = sidebars;
