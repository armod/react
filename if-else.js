class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState((state) => ({
        display: !state.display
      }));
    }
    render() {
      // _____________________________
      if (this.state.display == true)
      {
        console.log(this.state.display)
        return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
         )
      }
      else (this.state.display == false)
      {
        console.log(this.state.display)
        return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         </div>
      );
      }    
    }
  }; 