import Navbar from "../Components/Navbar";
import Form from "../Components/Form";
import Content from "../Components/Content";
import Container from "../Components/Container";
import Theme from "../Components/Theme";
import { useState } from "react";

const App = () => {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState([]);
  const handleTheme = () => {
    setDark(!dark);
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = e.target[1].value.split("-");
    const month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "November",
      "Desember",
    ];
    const newDate = `${date[2]} ${month[date[1][1] - 1]} ${date[0]}`;
    const name = e.target[0].value;
    const items = {
      id: data.length + 1,
      name: name,
      date: newDate,
      status: "uncheked",
    };
    setData([...data, items]);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  const handleCheck = (id) => {
    const oldData = data.filter((e) => e.id == id);
    oldData[0]["status"] = "cheked";
    const newData = data.filter((e) => e.id != id);
    setData([...newData, oldData]);
  };

  const handleDelete = () => {};
  return (
    <div className={dark ? "dark" : ""}>
      <Navbar />
      <Container>
        <Form onSubmit={handleSubmit} />
        <Content data={data} cheked={handleCheck} delete={handleDelete} />
        <Theme onClick={handleTheme} theme={dark.toString()} />
      </Container>
    </div>
  );
};

export default App;
