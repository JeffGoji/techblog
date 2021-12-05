const { Post } = require("../models");

const postdata = [
  {
    title: "3 Ways to Deal With the Trojan Source Attack",
    content:
      "The Trojan Source attack method, identified by University of Cambridge researchers, tricks compilers into reading hidden Unicode characters and generating binaries with extra instructions and backdoors that a developer or security analyst doesn't know about. Because the special characters are not visible by default, the malicious code is unlikely to be discovered during code review.",
    user_id: 1,
  },
  {
    title: "Improving Deployment Experience at GitHub",
    content:
      "Utilizing a Canary stage, the code changes were first released to 2% of GitHub.com users and then 100% of users. This meant that before releasing to 100% of the traffic, it was not always possible to catch all issues with the release. Eventually, an incident would get opened, triggering the need to roll back.",
    user_id: 2,
  },
  {
    title: "US challenges Nvidia takeover of chip designer Arm",
    content:
      "The FTC said the proposed acquisition would give Nvidia too much control over computing technology that competitors rely on. Arm licenses its designs and technology to big tech companies, including Apple, Qualcomm, Sony and Samsung.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
