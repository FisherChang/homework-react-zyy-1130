import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from "./header/header";
import SideBar from "./sideBar/sideBar";
import menuItems from "./menuItems.json"

class FullPage extends React.Component{
    render() {
        return(
            <div className="fullPage">
                <header className="headerPage">
                    <Header />
                </header>
                <section className="contentPage">
                    <SideBar menuItems={menuItems} />
                </section>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FullPage />);

