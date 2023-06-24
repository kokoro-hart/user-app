module.exports = {
  prompt: ({ inquirer, _args }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "Which component type?",
        choices: ["components", "features"],
      },
      {
        type: "input",
        name: "dir",
        message: "Where is the directory? Can be empty.",
      },
      {
        type: "input",
        name: "component_name",
        message: "What is the name of component?",
      },
      {
        type: "confirm",
        name: "have_style",
        message: "Is it have style?",
      },
      {
        type: "confirm",
        name: "have_props",
        message: "Is it have props?",
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { category, dir, component_name, have_props } = answers;
      const path = `src/${category}/${dir ? `${dir}/` : ``}${component_name}`;
      const type_annotate = have_props ? `FC<${component_name}Props>` : "FC";
      const props = have_props ? "(props)" : "()";
      return { ...answers, path, type_annotate, props };
    });
  },
};
