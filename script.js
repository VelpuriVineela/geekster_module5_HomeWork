function Card({children}){
    return (
        <div style = {{
            border: '2px solid tomato',
            padding: '20px',
            margin: '20px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            height: '80%',
            width: '60%'
        }}>
            {children}
        </div>
    );
}

function Heading(){
    return(
        <h1 style= {{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'darkgreen',
            fontSize: '45px'
        }}>Topics covered</h1>
    );
}

function FirstDiv() {
    return (
        <div>
            <p style={{
            fontSize: '22px',
            lineHeight: '1.5'
            }}>The following is a list of all the topics we cover in the MDN learning area.</p>
        </div>
    );
}

function SecondDiv(){
    return(
        <div>
            <p style= {{
                fontSize: '22px',
                lineHeight: '1.5'
            }}><a href="#">Getting started with the web</a></p>
            <p style= {{
                fontSize: '22px',
                lineHeight: '1.5'
            }}>Provides a pratical Introduction to web development for complete beginners.</p>

        </div>
    )
}

function ThirdDiv(){
    return(
        <div>
            <p style= {{
                fontSize: '22px',
                lineHeight: '1.5'
            }}><a href="#">HTML -- Structuring the web</a></p>
            <p style= {{
                fontSize: '22px',
                lineHeight: '1.5'
            }}>HTML is the language that we use to structure the different parts of our coentent and define what their meaning or purpose is. This topic teaches HTML in detail.</p>

        </div>
    )
}

function FourthDiv(){
    return(
        <div>
            <p style= {{
                fontSize: '22px',
                lineHeight: '1.5'
            }}><a href="#">CSS -- Styling the web</a></p>
            <p style= {{
                fontSize: '22px',
                lineHeight: '1.5'
            }}>CSS is the language that we use to control our web content's style and layout, as well as adding behavious like animation, This topic provides comprehensive coverage of CSS.</p>

        </div>
    );
}

ReactDOM.render(
    <Card>
        <Heading />
        <FirstDiv />
        <SecondDiv />
        <ThirdDiv />
        <FourthDiv />

    </Card>,
    document.getElementById('root')
);