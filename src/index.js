import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import TopPage from "./topPage/topPage";
import SideBar from "./sideBar/sideBar";
import sideItems from "./sideItems.json"

class FullPage extends React.Component{
    render() {
        return(
            <div className="fullPage">
                <header className="headerPage">
                    <TopPage />
                </header>
                <section className="contentPage">
                    <SideBar sideItems={sideItems}/>
                </section>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FullPage />);

