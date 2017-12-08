import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

interface Config extends webpack.Configuration {
  module: {
    rules: webpack.NewUseRule[]
  };
}
interface NewUseRule extends webpack.NewUseRule {
  use: webpack.NewLoader | webpack.NewLoader[];
}

const rules: NewUseRule[] = [
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "ts-loader"
    }
  }
];
const config: Config = {
  entry: path.join(__dirname, "./src/index.ts"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "./src/index.html"),
      inject: "body"
    })
  ],
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, "./dist")
  },
  devtool: "inline-source-map"
};

module.exports = config; 
