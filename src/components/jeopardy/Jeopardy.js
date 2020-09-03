import React, { Component } from "react";
//import our service
import JeopardyService from "../jeopardyservice/JeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        id: null,
        answer: "",
        question: "",
        value: null,
        airdate: "",
        created_at: "",
        updated_at: "",
        category_id: null,
        game_id: null,
        invalid_count: null,
        category: {
          id: null,
          title: "",
          created_at: "",
          updated_at: "",
          clues_count: null,
        },

        score: 0,
        userAnswer: "",
      },
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  //{JSON.stringify(this.state.data)}--turns this.state.data rom object string for react to display
  // keepScore() {
  //   if (this.state.userAnswer === this.state.data.answer) {
  //     this.setState.value += this.setState.score;
  //   }
  // }

  render() {
    return (
      <div>
        <strong>Category: </strong>
        {this.state.data.category.title}
        <br />
        <strong>Question: </strong>
        {this.state.data.question}
        <br />
        <strong>Value: </strong>
        {this.state.data.value}
        <br />
        <input></input>
        <button>Submit</button>
        <strong>Score: </strong>
        {this.state.score}
      </div>
    );
  }
}
export default Jeopardy;
