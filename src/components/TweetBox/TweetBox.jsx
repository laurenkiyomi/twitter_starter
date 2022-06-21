import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox({userProfile, setTweets, tweets, tweetText, setTweetText}) {
  const handleOnTweetTextChange = (event) => {
    setTweetText(event.target.value)
  }
  
  const handleOnSubmit = () => {
    const newTweet = {
      id: tweets.length, 
      name: userProfile.name,
      handle: userProfile.handle,
      text: tweetText,
      comments: 0,
      retweets: 0,
      likes: 0
    }

    userProfile.numTweets += 1
    setTweets((tweetss) => [...tweetss, newTweet])
    setTweetText("")
  }

  var disable = false
  if (tweetText === "" || tweetText.length > 140) {
    disable = true
  }
  var charsLeft = 140 - tweetText.length

  return (
    <div className="tweet-box">
      <TweetInput value={tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={tweetText} charsLeft = {charsLeft}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} disabled={disable}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount({tweetText, charsLeft}) {
  // ADD CODE HERE
  let isRed = charsLeft < 0 ? "red" : ""
  return <span className={`tweet-length ${isRed}`}>{charsLeft === 140 ? "" : charsLeft}</span>
}

export function TweetSubmitButton({handleOnSubmit, disabled}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit} disabled={disabled}>Tweet</button>
    </div>
  )
}
