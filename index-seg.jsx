import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./App.scss";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.openUrl = this.openUrl.bind(this);
        // this.openMaintainer = this.openMaintainer.bind(this);
        // this.matchCurrentInput = this.matchCurrentInput.bind(this);
    }

    openUrl(event) {
        // event.preventDefault();
        // console.log(event.target.innerText);
        window.open(
            "https://catalog.githubapp.com/scorecards/durable-ownership?tab=all&filter=exec_sponsor.name%3D" +
                event.target.innerText,
            "_blank"
        );
    }

    render() {
        return (
            <div>
                <ProSidebar>
                    <Menu iconShape="square">
                        <SubMenu title="Exec Sponsors">
                            <MenuItem onClick={this.openUrl}>
                                danaiszuul
                            </MenuItem>
                            <MenuItem onClick={this.openUrl}>
                                jakuboleksy
                            </MenuItem>
                            <MenuItem onClick={this.openUrl}>jssjr</MenuItem>
                            <MenuItem onClick={this.openUrl}>lizsal</MenuItem>
                            <MenuItem onClick={this.openUrl}>
                                rachelpotvin
                            </MenuItem>
                            <MenuItem onClick={this.openUrl}>shama0</MenuItem>
                            <MenuItem onClick={this.openUrl}>
                                shawndavenport
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </ProSidebar>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));




