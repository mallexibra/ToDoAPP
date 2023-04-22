import Navbar from "../Components/Navbar";
import Form from "../Components/Form";
import Content from "../Components/Content";
import Container from "../Components/Container";
import Theme from "../Components/Theme";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";

const App = () => {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("data"));
    if (item) {
      setData(item);
    }
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme) {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark);
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  const handleTheme = (e) => {
    setDark(!dark);
  };
  console.log(dark);
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
      id: Math.floor(Math.random() * 111),
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
    setData([...newData, ...oldData]);
  };

  const handleDelete = (id) => {
    const newData = data.filter((e) => e.id != id);
    setData(newData);
  };
  return (
    <div className={dark ? "dark" : ""}>
      <div className={` w-full dark:bg-slate-950`}>
        <Navbar />
        <Container>
          <Form onSubmit={handleSubmit} />
          <Content data={data} cheked={handleCheck} delete={handleDelete} />
          <Theme onClick={handleTheme} theme={dark.toString()} />
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default App;
