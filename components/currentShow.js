export default function CurrentShow(shows) {
  const allShows = shows?.items.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(a.start) - new Date(b.start);
  });
    this.state = {showLoaded: true, show: ""};


  componentDidMount(shows) {


  if(allShows) {
    const { showLoaded } = this.state;
    console.log(showLoaded);
  }
   this.setState({
     show: "here"
   });

}
  render() {
    return (
      <div>
        {this.state.show}
      </div>
    )
  }
}
