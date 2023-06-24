## Getting Started

### Package Install

```zsh
nvm use
npm ci
```

### Development

```zsh
npm run dev
```

[http://localhost:3000](http://localhost:3000)でローカルサーバーが起動する。

### Storybook

```zsh
npm run storybook
```

[http://localhost:6006](http://localhost:6006)でローカルサーバーが起動する。

### Create Function Component

```zsh
npm run new:fc
```

対話形式で関数コンポーネントファイルを作成できる。

## Package Dependencies

### Emotion

ReactのスタイリングにはEmotionを使用する。

- @emotion/react

### ress

リセットCSSにはressを使用する。

- ress

### Storybook

StorybookでViteビルダーを使うために、@vitejs/plugin-reactとviteをインストールする。

- @storybook/addon-actions
- @storybook/addon-essentials
- @storybook/addon-interactions
- @storybook/addon-links
- @storybook/builder-vite
- @storybook/react
- @storybook/testing-library
- @vitejs/plugin-react
- vite

### ESLint/Prettier

ts/tsxファイルはESLintで静的解析を行い、Prettierでフォーマットする。

- @typescript-eslint/eslint-plugin
- eslint
- eslint-config-next
- eslint-config-prettier
- eslint-plugin-jsx-a11y
- prettier

### commitlint

コミットメッセージはcommitlintで体裁を整える。

- @commitlint/cli
- @commitlint/config-conventional

### Husky/lint-staged

pre-commitフックで各種リンターとフォーマッターを実行する。

- husky
- lint-staged