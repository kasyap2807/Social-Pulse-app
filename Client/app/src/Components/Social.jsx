import React, { useState } from 'react';
import '../Asserts/Social.css';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import Sentiment from 'sentiment';
import Error from './Error';

const postData =[
  {
    "username": "user123",
    "total_posts": 3,
    "posts": [
      {
        "post_content": "This is the first post.",
        "comments": [
          {"username": "commenter1", "comment": "Great post!"},
          {"username": "commenter2", "comment": "I disagree."},
          {"username": "commenter3", "comment": "Nice one!"},
          {"username": "commenter4", "comment": "Well said!"},
          {"username": "commenter5", "comment": "I like it!"},
          {"username": "commenter6", "comment": "Interesting perspective."},
          {"username": "commenter7", "comment": "Not my favorite."},
          {"username": "commenter8", "comment": "Could be better."},
          {"username": "commenter9", "comment": "Impressive!"},
          {"username": "commenter10", "comment": "Meh."}
        ],
        "likes": 15,
        "shares": 8,
        "views": 100,
        "timestamp": "2024-02-16T12:00:00Z"
      },
      {
        "post_content": "fully negative words",
        "comments": [
          {"username": "commenter41", "comment": "waste of time!"},
          {"username": "commenter42", "comment": "fully wrong"},
          {"username": "commenter43", "comment": "waste of life!"},
          {"username": "commenter44", "comment": "waste of money"},
          {"username": "commenter45", "comment": "bad one!"},
          {"username": "commenter46", "comment": "you are wrong!"},
          {"username": "commenter47", "comment": "I didnt like it!"},
          {"username": "commenter48", "comment": "wate perspective."},
          {"username": "commenter49", "comment": "Not my favorite."},
          {"username": "commenter50", "comment": "Could be worest."}
        ],
        "likes": 25,
        "shares": 15,
        "views": 150,
        "timestamp": "2024-02-16T18:20:00Z"
      },
      {
        "post_content": "Second post here.",
        "comments": [
          {"username": "commenter11", "comment": "Love it!"},
          {"username": "commenter12", "comment": "Meh."},
          {"username": "commenter13", "comment": "Not bad."},
          {"username": "commenter14", "comment": "Amazing!"},
          {"username": "commenter15", "comment": "Could be improved."},
          {"username": "commenter16", "comment": "I disagree."},
          {"username": "commenter17", "comment": "Fascinating!"},
          {"username": "commenter18", "comment": "So-so."},
          {"username": "commenter19", "comment": "Brilliant!"},
          {"username": "commenter20", "comment": "Could use some work."}
        ],
        "likes": 20,
        "shares": 12,
        "views": 120,
        "timestamp": "2024-02-16T13:30:00Z"
      },
      {
        "post_content": "Third post for today.",
        "comments": [
          {"username": "commenter21", "comment": "Outstanding!"},
          {"username": "commenter22", "comment": "Eh."},
          {"username": "commenter23", "comment": "Not my cup of tea."},
          {"username": "commenter24", "comment": "Intriguing!"},
          {"username": "commenter25", "comment": "Could be better."},
          {"username": "commenter26", "comment": "I like it!"},
          {"username": "commenter27", "comment": "Could use some improvement."},
          {"username": "commenter28", "comment": "Fantastic!"},
          {"username": "commenter29", "comment": "Interesting perspective."},
          {"username": "commenter30", "comment": "Room for improvement."}
        ],
        "likes": 10,
        "shares": 5,
        "views": 80,
        "timestamp": "2024-02-16T15:45:00Z"
      },
      {
        "post_content": " I AM THE positive person",
        "comments": [
          {"username": "commenter21", "comment": "who said!"},
          {"username": "commenter22", "comment": "nnt at all."},
          {"username": "commenter23", "comment": "nope yaar"},
          {"username": "commenter24", "comment": "waste of tie!"},
          {"username": "commenter25", "comment": "worest post ever"},
          {"username": "commenter26", "comment": "why the heck"},
          {"username": "commenter27", "comment": "Could use some improvement."},
          {"username": "commenter28", "comment": "wrong!"},
          {"username": "commenter29", "comment": "not intrested."},
          {"username": "commenter30", "comment": "Room for not improvement."}
        ],
        "likes": 10,
        "shares": 5,
        "views": 80,
        "timestamp": "2024-02-16T15:45:00Z"
      },
      {
        "post_content": "Another post here.",
        "comments": [
          {"username": "commenter31", "comment": "Awesome!"},
          {"username": "commenter32", "comment": "So-so."},
          {"username": "commenter33", "comment": "Interesting."},
          {"username": "commenter34", "comment": "Love it!"},
          {"username": "commenter35", "comment": "Meh."},
          {"username": "commenter36", "comment": "Not bad."},
          {"username": "commenter37", "comment": "Outstanding!"},
          {"username": "commenter38", "comment": "Eh."},
          {"username": "commenter39", "comment": "Not my cup of tea."},
          {"username": "commenter40", "comment": "Intriguing!"}
        ],
        "likes": 18,
        "shares": 10,
        "views": 90,
        "timestamp": "2024-02-16T17:00:00Z"
      },
      {
        "post_content": "Final post for now.",
        "comments": [
          {"username": "commenter41", "comment": "Brilliant!"},
          {"username": "commenter42", "comment": "Could use some work."},
          {"username": "commenter43", "comment": "Great post!"},
          {"username": "commenter44", "comment": "I disagree."},
          {"username": "commenter45", "comment": "Nice one!"},
          {"username": "commenter46", "comment": "Well said!"},
          {"username": "commenter47", "comment": "I like it!"},
          {"username": "commenter48", "comment": "Interesting perspective."},
          {"username": "commenter49", "comment": "Not my favorite."},
          {"username": "commenter50", "comment": "Could be better."}
        ],
        "likes": 25,
        "shares": 15,
        "views": 150,
        "timestamp": "2024-02-16T18:20:00Z"
      }
    ]
  }
]
;



function Post({ post,index }) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const sentiment = new Sentiment();
  let data = [0,0,0];
  const [result,setresult] = useState([]);
  const [postresult,setpostresult] = useState(0);

  const handleAnalysisClick = () => {
    if(isAnalyzing){
      setIsAnalyzing(false);
    }
    else{
      setIsAnalyzing(true);
      setpostresult(sentiment.analyze(post.post_content));
      for(let i = 0 ; i < post.comments.length ; i++){
        let tempResult = sentiment.analyze(post.comments[i].comment);
        console.log(tempResult)
        if(tempResult.score == 0){
          data[0] = data[0]+1;
        }
        else if(tempResult.score < 0){
          data[1] = data[1]+1;
        }
        else if(tempResult.score > 0){
          data[2] = data[2]+1;
        }
      }
      setresult(data);
      console.log(result)
    }

    // document.body.style.backgroundColor = 'black';
  };

  return (
    // <div className='contss'>
    <div className="col-md-6 ">
      <div
        className={`card post-card`}
      >
        <div className="card-body">
          <h5 className="card-title">{post.username}</h5>
          <p className="card-text">{post.post_content}</p>
          <p className="card-text">
            <i className="bi bi-hand-thumbs-up"></i> {post.likes} Likes
            <span className="badge bg-secondary">{post.comments.length} Comments</span>
            <i className="bi bi-eye"></i> {post.views} Views
            <button className="btn btn-primary text-center" onClick={handleAnalysisClick}>Analyse</button>
          </p>
          <p className="card-text">
            <small className={`text-muted ${isAnalyzing ? 'white-text' : ''}`}>
              Posted on {post.timestamp}
            </small>
          </p>
          <div>
          </div>
      <div className={`${isAnalyzing ? 'analyzing' : 'null'}`}>
    <p className='icon text-center'>Anlysis By Comments {(result[0] > result[1]) ? ((result[0] > result[2]) ? '😐 neutral' : '🙂 positive') : ((result[1] > result[2]) ?  '😞 negative': '🙂 positive')}</p>
    <p className='icon text-center'>Anlysis By your post {postresult?.score === 0 ? '😐 neutral' : postresult?.score < 0 ? '😞 negative' :'🙂 positive'} </p>
    </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

function Social() {
  const location = useLocation();
  const token = location.state && location.state.token;
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result,setresult] = useState([]);
  if(token!=undefined){
  return (
    <div className='contss'>
      <Navbar token={token}/>
    <div className="container">
      <div className="row">
        {postData[0].posts.map((post, index) => (
          <Post key={index} post={post} index={index} setIsAnalyzing={setIsAnalyzing} setresult={setresult} />
        ))}
      </div>
    </div>
    </div>
  );
  }
  else{
    return(
        <div>
            <Error/>
        </div>
    )
}

}

export default Social;
