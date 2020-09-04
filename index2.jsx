import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BaseStyles, Box, SideNav, StyledOcticon, PersonIcon, OctofaceIcon, MailIcon, Text } from "@primer/components";

class App extends React.Component {
    constructor(props) {
        super(props);

        // this.onSelect = this.onSelect.bind(this);
        // this.matchCurrentInput = this.matchCurrentInput.bind(this);
    }

    render(){


        return (
            <BaseStyles>
                <SideNav bordered maxWidth={360}>
                    <SideNav.Link href="#url" selected>
                        <Text>Idea To Code</Text>
                    </SideNav.Link>

                    <SideNav
                        bordered
                        variant="lightweight"
                        py={3}
                        pl={6}
                        backgroundColor="white"
                    >
                        <SideNav.Link href="#url" selected>
                            <Text>dana</Text>
                        </SideNav.Link>
                        <SideNav.Link href="#url">
                            <Text>sha</Text>
                        </SideNav.Link>
                        <SideNav.Link href="#url">
                            <Text>glortho</Text>
                        </SideNav.Link>
                    </SideNav>

                    <SideNav.Link href="#url">
                        <Text>Code To Cloud</Text>
                    </SideNav.Link>
                </SideNav>
            </BaseStyles>
        );
    }

}
ReactDOM.render(<App />, document.getElementById("root"));
