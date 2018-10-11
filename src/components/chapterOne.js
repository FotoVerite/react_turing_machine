
import React, { PureComponent } from 'react';
import DisplayTape from './displayTape';
import Machine from './machine'

class chapterOne extends PureComponent {

  componentWillMount() {
    document.title = 'Why this site'
  }

  render() {
    return (
      <div className="container">
        <h1 className={'gothic block-quote center'}>Why this Site.</h1>

        <p>During my research on another talk about Turing. This being on his "Computing Machinery and Intelligence" paper
          I noticed an interesting trend of people misrepresenting what a turing machine in.
          </p>
        <p className={"emphasized"}>Turing really liked long title names</p>
        <p>This is mostly in simplifying the concept, but also sometimes down right mangling them to the point of nonsense. Looking at you google doodle.</p>
        <p> These simplifications though, while well meaning I do believe cause so major cogniatives issues when you are grappling with the paper and the issues
        Turing illustrated vai this machine. Of course one can add on to the concept of what Turing machine is or can do. We improve and rethink things constantly.
        But to represent these as 'Turing Machines and not instead 'Turing Equivilant Machine'
        creates additional headaches that can be avoided by stating what Turing described vs how we use the term today.'
        But to really examine these issues I first need to describe what I feel a Turing Machine is.
        </p>

        <p>Note: I will be showing exerpts from the paper in this format.</p>

        <div className={'block-quote'}>
          <p>Exerpt</p>
          <hr />
          <small> Section 1: Paragraph 2 </small>
        </div>

        <hr />

        <h2>What did Turing actually described?</h2>

        <p> Turing begins by describing a Computational Machine.</p>


        <div className={'block-quote'}>
          <p>
          We may compare a man in the process of computing a real number to a
          machine which is only capable of a finite number of conditions
          <span className={'gothic'}>q</span>1:
          <span className={'gothic'}>q</span>2. ....
          <span className={'gothic'}>q</span>N;
          which will be called "<span className={'gothic'}>m-configurations</span>".
          The machine is supplied with a
          "tape" (the analogue of paper) running through it, and divided into
          sections (called "squares") each capable of bearing a "symbol".
          At any moment there is just one square, say the <span className={'gothic'}>r</span>-th,
          bearing the symbol <span className={'gothic'}>S</span>(<span className={'gothic'}>r</span>)
          which is "in the machine". We may call this square the "scanned
          square". The symbol on the scanned square may be called the "scanned
          symbol". The "scanned symbol" is the only one of which the machine
          is, so to speak, "directly aware". However, by altering its m-configuration
          the machine can effectively remember some of the symbols which
          it has "seen" (scanned) previously. The possible behaviour of the
          machine at any moment is determined by the
          <span className={'gothic'}> m-configuration</span>
          <span className={'gothic'}>qn</span> and the
          scanned symbol
           <span className={'gothic'}>S</span>(<span className={'gothic'}>r</span>).
          This pair <span className={'gothic'}>qn, S(r)</span> will be called the 'configuration':
          thus the configuration determines the possible behaviour of the machine.
          In some of the configurations in which the scanned square is blank (i.e.
          bears no symbol) the machine writes down a new symbol on the scanned
          square: in other configurations it erases the scanned symbol. The
          machine may also change the square which is being scanned, but only by
          shifting it one place to right or left. In addition to any of these operations
          the <span className={'gothic'}>m-configuration</span> may be changed. Some of the symbols written down
          will form the sequence of figures which is the decimal of the real number
          which is being computed. The others are just rough notes to "assist the
          memory ". It will only be these rough notes which will be liable to erasure.
          </p>
          <hr />
          <small> Section 1: Paragraph 2 </small>
        </div>
        <p>
        The first thing to note is that Turing wrote increadibly densly.
        The entire paper is not entirely easily understood mostly from his poor word choices
        so take your time in reading excerpts and don't feel like it is your fault for not following.
        </p>
        <p>
        The Second is that Alan Turing loved him some German font. They are increadibly hard to read and make following the paper even more tedious.
        I will try to represent them accurately in exerpts but I will also rename them for easier discussion.
        Mostly to upper or lower case normal font family of the site but also at times in EMOJI. It will make sense in context.
        </p>
        <p>
        So lets take this very slowly.
        </p>

        <div className={'block-quote'}>
          <p>
            We may compare a man in the process of computing a real number to a
            machine which is only capable of a finite number of conditions &nbsp;
            <span className={'gothic'}>q</span>1:
            <span className={'gothic'}>q</span>2. ....
            <span className={'gothic'}>q</span>n;
            which will be called "<span className={'gothic'}>m-configurations</span>".
          </p>
        <hr />
        <small> Section 1: Paragraph 2 line 1 </small>
        </div>
        <p>
        Turing is asking us to imagine a machine that will compute real numbers. He calls this a computational machine.
        This is the base of what we know as a turing machine but is not the full description.
        This machine has a finite number of states.
        Hence they are countable and knowable.
        This is not to say they are few. A computational machine could have google of states. But they are able to be counted given enough time.
        These states are labeled by turing as list of <span className={'gothic'}>qn</span> starting and 1 and incrementing upward.
        We will refer to these as q<sub>n</sub> from now on. And these make up what he calls the m-configurations of the machine.
        </p>

        <div className={'block-quote'}>
          <p>The machine is supplied with a
          "tape" (the analogue of paper) running through it, and divided into
          sections (called "squares") each capable of bearing a "symbol".
          </p>
        <hr />
        <small> Section 1: Paragraph 2 line 2 </small>
        </div>
        <p>
        So as described you have a machine supplied with an amount of tape.
        <em>Turing will later say that the tape can be infinite</em>
        This tape is divided into sections. Like so </p>
          <DisplayTape squares={
            [
              1,
              "",
              1,
              (<span className={'gothic'}>r</span>),
              0,
              '🎟',
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " " ]}
          />
        <p>
          Where each square is either empty or contains a symbol.
          While we mostly talk of Turing machine output in terms of binary 0 and 1's A Turing Machine can output any symbol.
        </p>

        <div className={'block-quote'}>
            <p>
              At any moment there is just one square, say the <span className={'gothic'}>r</span>-th,
              bearing the symbol <span className={'gothic'}>S</span>(<span className={'gothic'}>r</span>)
              which is "in the machine". We may call this square the "scanned
              square". The symbol on the scanned square may be called the "scanned
              symbol". The "scanned symbol" is the only one of which the machine
              is, so to speak, "directly aware".
            </p>
          <hr />
          <small> Section 1: Paragraph 2 line 3-5 </small>
        </div>
        <p>
          The Machine cannot know the entire state of the tape. In fact it can only know what is directly below it.
          That means it has no idea where it is on the tape either.
        </p>

        <DisplayTape squares={
            [
              1,
              "",
              1,
              (<span className={'gothic'}>r</span>),
              0,
              '🎟',
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " " ]}
              scanned={3}
          />

          <p> Here we are indicating that the square in the machine is <span className={'gothic'}>r</span>. </p>

        <div className={'block-quote'}>
          <p>
          However, by altering its m-configuration
          the machine can effectively remember some of the symbols which
          it has "seen" (scanned) previously.
          The possible behaviour of the
          machine at any moment is determined by the
          <span className={'gothic'}> m-configuration</span>&nbsp;
          <span className={'gothic'}>qn</span> and the
          scanned symbol &nbsp;
          <span className={'gothic'}>S</span>(<span className={'gothic'}>r</span>).
          </p>
          <hr />
          <small> Section 1: Paragraph 2 line 6-7 </small>
        </div>

        <p>
          There is no storage for the machine it only knows what m-configuration it is in
          and what symbol it scans at the beginning of a configuration. This is not all made clear yet in this description.
          There are clever ways of storing more information by use of differing m-configurations based on scanned symbols but we will get to this later.
        </p>

        <div className={'block-quote'}>
          <p>
            Some of the symbols written down
            will form the sequence of figures which is the decimal of the real number
            which is being computed. The others are just rough notes to "assist the
            memory ". It will only be these rough notes which will be liable to erasure.
          </p>
          <hr />
          <small> Section 1: Paragraph 2 line 8 </small>
        </div>

        <p> Notice that Turing says, 'decimal of the real number'. Turing in this paper is calculating fractional decimal numbers.
        #TODO why? For most purposes it's easy enough to consider whole numbers written in binary
        we can consider this to be equivilant to a whole real number.
        But it is good to keep in mind that these machines in the paper are calculating fractions between 0 and 1. Also note that 0 and 1's cannot be erased.
        Only the other symbols that are used to keep track of state.
        </p>
        <p>
        And we are not even close to done yet. :D. I would suggest taking a break and stretching your legs then coming back.
        </p>

        <p>Turing now defines two seperate types of Machines in his paper. </p>

        <div className={'block-quote'}>
          <p>
            Automatic machines.
            If at each stage the motion of a machine (in the sense of § 1) is completely
            determined by the configuration, we shall call the machine an "automatic
            machine" (or a-machine).
            .For some purposes we might use machines (choice machines or
            c-manhines) whose motion is onty partially determined by the configuration
            (hence the use of the word "possible" in §1). When such a machine
            reaches one of these ambiguous configurations, it cannot go on until some
            arbitrary choice has been made by an external operator. This would be the
            case if we were using machines to deal with axiomatic systems. In this
            paper I deal only with automatic machines, and will therefore often omit
            the prefix a-.
          </p>
          <hr />
          <small> Section 2: Paragraph 1-2  </small>
        </div>
        <p>
          Turing lays out that there are two types of machines one can imagine. One that has <em>ambiguous configurations</em>&nbsp;
          what these really are or how they would work he doesn't care about.
          What he does care about our machines that states are totally unabigious and will run with no human intervention.
          The machine knows what to do based on it's configuration.
          It's mostly reiteration and I understand if it makes you confused why he brings it up. </p>

        <div className={'block-quote'}>
          <p>
            If an a-machine prints two kinds of symbols, of which the first kind
            (called figures) consists entirely of 0 and 1 (the others being called symbols of
            the second kind), then the machine will be called a computing machine.
            If the machine is supplied with a blank tape and set in motion, starting
            from the correct initial ra-configuration, the subsequence of the symbols
            printed by it which are of the first kind will be called the sequence computed
            by the machine. The real number whose expression as a binary decimal is
            obtained by prefacing this sequence by a decimal point is called the
            number computed by the machine.
            At any stage of the motion of the machine, the number of the scanned
            square, the complete sequence of all symbols on the tape, and the
            ra-configuration will be said to describe the complete configuration at that
            stage. The changes of the machine and tape between successive complete
            configurations will be called the moves of the machine.
          </p>
          <hr />
          <small> Section 2: Paragraph 3-4  </small>
        </div>
        <p>This is also most reiteration of what he has already said. What you should take note of is that he defines  that 0,1 are figures
        and that all other symbols are symbols and that the movement of a configuration is called 'moves of the machine.'</p>
        <div className={'block-quote'}>
          <p>
            If a computing machine never writes down more than a finite number
of symbols of the first kind, it will be called circular. Otherwise it is said to
be circle-free. <br /> <br />
A machine will be circular if it reaches a configuration from which there
is no possible move, or if it goes on moving, and possibly printing symbols
of the second kind, but cannot print any more symbols of the first kind.
          </p>
          <hr />
          <small> Section 2: Paragraph 5-6  </small>
        </div>

        <p>
        Here we have one of turing most nortorious naming conventions. Circular and Circle-Free. Which mean the opposite of what common sense would dictate.
        </p>
        <p>
          To Turing computational machines are supposed to print forever. This is somewhat because numbers go on forever. 3 isn't 3 it's 3.000....
        </p>
        <p>
            Circular machines here are in some fundamental way broken. Their m-configurations are made in some way that a q<subscript>n</subscript>'s callback plus scanned symbol doesn't have an entry or their m-configuration leads to a loop where no more 0 or 1's or ever printed onto the tape. Notice that there he is very clear that there is no possible move. Not that there is a halt state. Turing does not consider that there can be configuration that ends the machine. The machine is supposed to go on forever. In fact the word is not even mentioned in the paper. I emphasize this point because so many examples of turing machines include the ability for the machine to halt. But that is later addition added onto the concept seperate from this paper and the how Turing thought about the concept of computational machines. This is why he is using circular to describe these machines. They are stuck in a broken loop and not continuing on a valid path. The naming convention still sucks though.
        </p>
        <p>
          So lets reiterate what we have so for. Turing has described the concept of a computational machine. 
          It's input and output exists on a piece of tape. 
          The machine configuration movements are automatic and should print out figures for an infinite amount of time.
          This tape must be considered infinite since the machine writes down an infinite amount of figures. 
          It does this by a finite configurations of movements which he labels m-configurations.
          Finally the machine has no understanding sense of state but can scan a symbol that is in the machine itself.
          Only a human looking at the machine can fully gage what it has done.
        </p>

        <p className={"emphasized"}>All this monotnous detail I think is why so many people simplify what a Turing machine is.
        The paper is torture but groking the intricacies helps with understanding why it is important</p>

        <p>
         But how does this actually all fit together. While Turing is very throughough is explaining the details of the machine. 
         How it actually works might still be kinda confusing. Lets look at a simulation of a Turing machine to see how all these pieces fit together. 
        </p>

        <p>
        <a href="/chapter-2/">The very most simple 'Turing Machine'</a>
        </p>
      </div>
    );
  }
}



export default chapterOne

