import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Select from "react-select";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

// const MyComponent = () => <Select options={options} />;

class App extends React.Component {
    constructor(props) {
        super(props);

        // this.onSelect = this.onSelect.bind(this);
        // this.matchCurrentInput = this.matchCurrentInput.bind(this);
    }

    render(){
        return (
            <div>
                {/* <Select options={options} /> */}
                <form action="" method="get">
                    <input name= 'foo' placeholder="myplaceholder" list="opts" />
                    <datalist id="opts">
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                    </datalist>
                        <input type="submit" value="go"></input>
                </form>
            </div>
        );
    }

}
ReactDOM.render(<App />, document.getElementById("root"));
