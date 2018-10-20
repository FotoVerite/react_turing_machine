
import React, { PureComponent } from 'react';

class chapterThree extends PureComponent {

  componentWillMount() {
    document.title = 'The Human Connection'
  }

  render() {
    return (
      <div className="container">
        <h1 className={'gothic block-quote center'}>{document.title}</h1>

        <p>
          So if a Turing Machine is so simple, why do we care. Why is it a thing. You don't need to know about it to live your life. You don't even need to know 
          what it is to be a good computer engineer. I spent 10 years writing websites before reading this paper. And I wrote emmaculate well constructed websites. 
          So why. Why spend the time. We have so many words to describe concepts. And at the end of all of this, that's what we're trying to do. Constrain a concept. 
        </p>

        <p>
          I have watched a lot of videos about Turing Machines. 
          <br/>
          Some funny
          <div className="center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/uNjxe8ShM-8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>

          Some Inciteful
          <div className="center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-ZS_zFg4w5k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>


          <br/>
          Some simply well done.
          <div className="center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dNRDvLACg5Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>

          <br/>
         And some even just awe inspiring.
          <div className="center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vo8izCKHiF0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>

          Each gives some weight and realness to the concept of a turing machine. But they aren't what a turing machine actually is. Just as ∞ isn't actual infinity. 
        </p>

        <p>
          Alan Turing Published 'On Computable Numbers with an Application to the Entscheidungsproblem' in 1937. This was nine years before EDVAC report was published in
          1945. This report was one of the first attempts to formalize how a computer was supposed to work. It was the work of near pure imagination. And imagination is hard to hold, 
          hard to conceptualize, hard to contain. 
        </p>

        <p>
        When you pull away from a concept it easy to assume you see all of it. You get rid of the detail and see the outline. And isn't that good enough. 
        Earth is a blue marble in space.
        Justice is blind.
         Why talk about turing machine's universalness. That's not what's important for you to know. It's a simple state machine, It calculate a number and halts. Ends of story. 
        Why actually explain what turing complete means when we can just use it as a catch all. We can know all the things and be masters of all the universes.
        We can be our own Universal Turing Machine, calculate all that is calculatable. Know all that is knowable.  
        </p>

        <p>
        Learning a concept is hard. It isn't usually a five minute youtube video or a pithy saying. SohCahToa Doesn't tell you the why of trig simply the how. I still don't know Trig.
        I still don't know a lot of things. Or how of things. It easy for us to pretend. I'm pretending writing this site. There is still so much I don't understand about this paper. About Maths,
        about what this paper actually proves. But I do know it's more then just universal state machine. 
        </p>

        <p>
          Human beings don't stop at the end of a single problem. They do not halt. We simply continue on, we error correct. We catch try. Alan Turing was trying to 
          show the limitations of thought. Even given infinite time under infinite logic, there are simply things we cannot know. And yet we fight against these facts, we believe it's tragic. 
          We set up schools of thought to comprehend Math, Philosophy, Life. To rail against the dark and hope against hope that this time or system is complete. This time, there will be no edge cases. 
          That we haven't built a Principia Mathematica. And maybe here all I am really doing is proving yet again 2+2 equals 4.
        </p>
        
      
      </div>
    );
  }
}



export default chapterThree

