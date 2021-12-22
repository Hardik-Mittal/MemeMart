import React from 'react';
import "../../css/memecard.css";
import defaultimage from '../../images/default.png';

const posts = [
    
  { id: 0, 
    content: {
      title: 'Echinacea flower',
      image: defaultimage,
      content: 'Grow some echinacea',
    },
    likeIsClicked: true,
    likes: 5 },
    { id: 1,
    content : {
      title: 'Lake in New York State',
      image: defaultimage,
      content: 'Worth a visit',
    },
    likeIsClicked: true,
    likes: 15},
    { id: 2,
      content : {
        title: 'Street in Jerusalem',
        image: defaultimage,
        content: 'Street in Valley of Refaim',
      },
      likeIsClicked: true,
      likes: 8},
]   

const UiButton = props => {
    const classes = (props.isClicked) ?
      "ui-button clicked" : "ui-button";
    const number = (props.isClicked) ?
          (props.number + 1) : props.number;
    
    return (
      <button className={classes} id={props.text} 
        onClick={() => props.onClick()}>
        <span className="ui-icon">{props.icon} </span> 
        {number}
      </button>
    );
  };

  class ButtonBox extends React.Component {
    constructor(props) {
      super(props);
      console.log(props.likeIsClicked);
      this.state = {
        likeIsClicked: props.likeIsClicked

      };
    }
    
    toggle(index) {
      let state = {};
      state[index] = !this.state[index];
      this.setState(state);
    }
    
    render() {
      return (
        <div>
          <UiButton icon='♥' text='likes'
            number={this.props.likes}
            onClick={() => 
              this.toggle('likeIsClicked')}
            isClicked={this.state.likeIsClicked}/>
        </div>
      );
    }  
  }
  const UiCard = props => {
    let {title, image, content} = props.content;
    return (
      <div class="card-wrapper">
        <div className='card-img'>
          <img src={image} />
        </div>
        <div className='card-content'>
          <h3>{title}</h3>
          <div>{content}</div>
        </div>
        </div>
    );
  }
  
class SocialCard extends React.Component {
    render() {
      return (
        <div className='card-body'>
          <UiCard content={this.props.content}/>
          <div className='line'></div>
           <div style={{textAlign: 'right'}}>
              <ButtonBox 
              likeIsClicked={this.props.likeIsClicked}
              likes={this.props.likes}/>
          </div>
        </div>
       
      );
    }
  };
  
  class SocialCard2 extends React.Component {
    render() {
      return (
      <div className='card-grid-view'>
        {posts.map(e => (
          <SocialCard 
            key={e.id}
            content={e.content}
            likes={e.likes}
            likeIsClicked={e.likeIsClicked}
            />
        ))}
      </div>
     );
    }
  };

  export default SocialCard2;