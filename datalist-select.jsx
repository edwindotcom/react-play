import React from "react";
import ReactDOM from "react-dom";
import DataListInput from "react-datalist-input";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.onSelect = this.onSelect.bind(this);
        this.matchCurrentInput = this.matchCurrentInput.bind(this);
    }

    matchCurrentInput = (currentInput, item) => {
        const yourLogic = item.someAdditionalValue;
        return (
            yourLogic.substr(0, currentInput.length).toUpperCase() ===
            currentInput.toUpperCase()
        );
    };

    onSelect = (selectedItem) => {
        console.log('onSelect')
    };

    render(){
        let myValues = ["abc", "def"];
        let items = myValues.map((item, i) => {
        return {
            // what to show to the user
            label: item.id + ": " + item.name,
            // key to identify the item within the array
            key: item.id,
            // feel free to add your own app logic to access those properties in the onSelect function
            someAdditionalValue: item.someAdditionalValue,
            // or just keep everything
            ...item,
        };
    });
        return (
            <div>
                <DataListInput
                    placeholder={"Select an option from the drop down menu..."}
                    items={items}
                    onSelect={this.onSelect}
                    match={this.matchCurrentInput}
                />
            </div>
        );
    }

}
ReactDOM.render(<App />, document.getElementById("root"));
