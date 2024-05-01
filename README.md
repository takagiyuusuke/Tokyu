# Overview

情報数学で有名な最短経路アルゴリズム、Dijkstraのアルゴリズムを実際に使って可視化してみましょう。  
路線図をグラフとみなすことが可能なので、各辺に正の重み(所要時間)を与えました。  
  ※乗り換えや列車種別の違いによる所要時間の変化には対応していません。  
  ※あくまで仮想の所要時間を表しています。

## How to use
  
これは実際の画面です。
![screenshot1](https://github.com/takagiyuusuke/Tokyu/assets/142160956/f205901f-f46b-43ed-85ad-002c1bbb6fb4)
使い方は簡単！  画面上部の出発駅と到着駅を入力するだけ！  
両方の入力を終えると自動で経路と所要時間が計算されて表示されます。  
[こちら](https://tokyu.vercel.app/) から遊んでみてください。(https://tokyu.vercel.app/)

## 補助機能のいくつか
1.駅名入力時に候補駅が一定数以下になればボタンが表示されますので押してください。(日本語入力してください)  
2.候補駅のボタンにマウスをホバーすると、当該駅が強調表示されます。  
3.それぞれの駅の丸印や駅名にマウスをホバーするとその駅に振られた駅ナンバーが表示されます。  
4.検索結果表示しているときには各駅間の辺に与えられた重みが表示されます。

## Dijkstraのアルゴリズムのこと
Dijkstraのアルゴリズムはグラフの頂点数が $n$ である際に $O(n)$ で探索を終えることができるアルゴリズムです。  
当ページでは頂点数が100程度なので、遠い駅間を指定したときでも高速に最短経路の探索が行われることが確認できるはずです。

## 使用技術
このプロジェクトは、以下を使用して開発しました。　　

- React  
- TypeScript  
- Material-UI  


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
