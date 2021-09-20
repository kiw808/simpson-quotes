import React, {useState} from 'react';
import axios from 'axios';
import QuoteCard from './components/Quotecard'
import './App.css';

const sampleQuote = {
    quote: 'Bla bla bla',
    character: 'Test Name',
    image: 'https://via.placeholder.com/150'
}

function App() {
    const [quote, setQuote] = useState(sampleQuote);

    function handleClick() {
        axios
            .get('https://simpsons-quotes-api.herokuapp.com/quotes')
            .then((res) => res.data)
            .then((data) => {
                setQuote(data[0])
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="App">
            <QuoteCard quote={quote}/>
            <button type="button" onClick={handleClick}>Get a new quote</button>
        </div>
    );
}

export default App;
