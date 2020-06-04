import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/1bij.jpg",
      allMemeImages: [],
      error: null,
      isLoaded: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.generator = this.generator.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then(
        (result) => {
          const { memes } = result.data;
          console.log(memes);
          this.setState({
            allMemeImages: memes,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  generator(e) {
    e.preventDefault();
    let randomNum = Math.floor(Math.random() * 100);
    let randomUrl = this.state.allMemeImages[randomNum]["url"];
    this.setState({
      randomImg: randomUrl,
    });
  }

  render() {
    return (
      <main>
        <div className="form-wrapper">
          <form className="meme-form">
            <input
              type="text"
              placeholder="Enter top text.."
              value={this.state.topText}
              name="topText"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Enter bottom text.."
              value={this.state.bottomText}
              name="bottomText"
              onChange={this.handleChange}
            />
            <button onClick={this.generator}>Gen</button>
          </form>
        </div>
        <div className="meme-wrapper">
          <img src={this.state.randomImg} />
          <h2 className="top-text"> {this.state.topText} </h2>
          <h2 className="bottom-text"> {this.state.bottomText} </h2>
        </div>
      </main>
    );
  }
}

export default MemeGenerator;
