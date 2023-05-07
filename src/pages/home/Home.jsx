import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Header from "../../components/header/Header";
import Location from "../../components/charts/Location";
import Sales from "../../components/charts/Sales";
import Funnel from "../../components/charts/Funnel";
import Growth from "../../components/charts/Gender";
import { useState } from "react";


const Home = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(true)
const collapseSidebar = ()=>{
  setIsSidebarOpen(()=>!isSidebarOpen);
}
  return (
    <div className="home">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="homeContainer">
        <Navbar closeSidebar={collapseSidebar} />
        <Header/>
        <div className="widgets">
          <Widget dataContainer={<Sales/>} title="YTD Sales" />
          <Widget  dataContainer={<Location/>} title="Sales by Location" />
          <Widget  dataContainer={<Funnel/>} title="Sales Funnel"/>
         
        </div>
        <div className="charts">
       
        <Widget  dataContainer={<Growth/>} title="Annual Sales by Gender"/>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
