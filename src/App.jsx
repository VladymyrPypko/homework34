import { useState } from 'react'
import './App.css'
import UserName from './components/UserName'

const App = () => {
    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(inputValue);
    }

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <UserName name={name} />
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Введите имя'
                    value={inputValue}
                    onChange={handleInputValue}
                />
                <button type="submit">Показать имя</button>
            </form>
        </div>
    );
}

export default App
