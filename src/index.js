import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from "./header/header";
import Menu from "./menu/menu";
import menuItems from "./menuItems.json"

class FullPage extends React.Component{
    render() {
        return(
            <main>
                <Header />
                <Menu menuItems={menuItems} />
            </main>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FullPage />);

