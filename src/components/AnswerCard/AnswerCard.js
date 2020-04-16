import React, { Component } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import './AnswerCard.scss';

export class AnswerCard extends Component {
  static contextType = LanguageContext;

  handleNextWord = () => {
    this.context.setNextWord(this.context.answerData.nextWord);
    this.context.setAnswered(false);
  };

  render() {
    const {
      nextWord,
      answerData,
      wordCorrectCount,
      wordIncorrectCount,
      totalScore,
    } = this.context;

    return (
      <div className="AnswerCard">
        <p className="total-score">Your total score is: {totalScore}</p>

        <h3 className="answer-status-header">
          You are{' '}
          <span className="answer-status">
            {answerData.isCorrect ? 'correct!' : 'incorrect!'}
          </span>
        </h3>
        <p className="answer-status-subheader">
          Good guess, but you weren't quite right.
        </p>
        <p className="correct-answer">
          The correct translation for {nextWord} was {answerData.answer}.
        </p>
        <p className="user-guess">Your answer was {this.props.guess}.</p>

        <button className="next-word-button" onClick={this.handleNextWord}>
          Try another word
        </button>

        <div className="answer-word-score-count">
          <p className="times-correct">
            Times correct:{' '}
            <span className="correct-number">{wordCorrectCount}</span>{' '}
          </p>
          <p className="times-incorrect">
            Times incorrect:{' '}
            <span className="incorrect-number">{wordIncorrectCount}</span>{' '}
          </p>
        </div>
      </div>
    );
  }
}

export default AnswerCard;