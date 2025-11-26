export default function homePageRender(req, res) {
  const data = {
    name: "Naman",
    userId: 30,
  };

  res.render("index", data);
}
