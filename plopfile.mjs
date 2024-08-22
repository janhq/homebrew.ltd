import { exec } from "child_process";
import isPortReachable from "is-port-reachable";
import chalk from "chalk";

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelCase = (str) => {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

async function checkIfProjectIsRunning() {
  try {
    return await isPortReachable([3000, 3001, 3002], { host: "localhost" });
  } catch (error) {
    console.error("Error checking if project is running:", error);
    return false;
  }
}

const authors = [
  "Daniel Onggunhao",
  "Nam Nguyen",
  "Ashley Tran",
  "Hien To",
  "Van Pham",
  "Louis Le",
  "Rex Ha",
  "Alan Dao",
  "Emre",
  "Henry Ho",
  "Nicole Zhu",
  "Bach Vu",
];

/**
 * @param {import("plop").NodePlopAPI} plop
 */
export default async function (plop) {
  plop.setHelper("capitalize", (text) => {
    return capitalize(camelCase(text));
  });

  plop.load("plop-helper-date");

  plop.setGenerator("create-blog", {
    description: "Generates a blog post",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Enter the title of the blog post:",
        validate: (input) => (input ? true : "Title is required."),
      },
      {
        type: "input",
        name: "slug",
        message: (answers) =>
          `Enter the slug for the blog post (suggested: ${generateSlug(
            answers.title
          )})`,
        default: (answers) => generateSlug(answers.title),
        validate: (input) =>
          input && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(input)
            ? true
            : "Please enter a valid slug (lowercase letters, numbers, and hyphens only).",
      },
      {
        type: "input",
        name: "description",
        message: "Enter the description of the blog post:",
        validate: (input) => (input ? true : "Description is required."),
      },
      {
        type: "checkbox",
        name: "authors",
        message: "Select the author(s) of the blog post:",
        choices: authors,
        validate: (input) =>
          input.length ? true : "Please select at least one author.",
      },
      {
        type: "input",
        name: "tags",
        message: "Enter tags for the blog post (separate tags with commas):",
        filter: (input) =>
          input
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
            .join(", "),
        validate: (input) =>
          input.length ? true : "Please enter at least one tag.",
      },
    ],

    actions(answers) {
      const actions = [];
      if (!answers) return actions;
      const { authors, title, description, tags, slug } = answers;

      actions.push({
        type: "addMany",
        templateFiles: "templates/**",
        destination: `./src/pages/blog`,
        globOptions: { dot: true },
        data: { title, description, authors, tags },
        abortOnFail: true,
      });

      console.log(chalk.green(`Your blog post is created!`));
      console.log(
        chalk.cyan(`You can view it at: http://localhost:3000/blog/${slug}`)
      );

      return actions;
    },
  });

  function generateSlug(title) {
    return title
      ? title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
      : "";
  }
}
