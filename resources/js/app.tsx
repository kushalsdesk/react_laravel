import React from 'react';
import ReactDOM from 'react-dom/client';
import "../css/app.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Button from '@/components/Button';


const App = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4">
                <h2 className="text-xl font-semibold mb-4">Welcome to My App!</h2>
                <Button label="Click Me" onClick={handleClick} />
            </main>
            <Footer />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
