import path from "path";

export default class Controller {
  getView(req, res) {
    return res.sendFile(
      path.join(path.resolve(), "src", "views", "index.html")
    );
  }
}
