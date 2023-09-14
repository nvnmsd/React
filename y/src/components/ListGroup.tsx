import { MouseEvent, useState } from 'react';
import Alert from './Alert';
import MyButton from './Button';
import DismissingAlert from './DismissingAlert';

export interface ListGroupProps {
    items: string[]; // this is similar to @Input() items: string[]; in Angular
    heading: string;
    // This below is similar to @Output() itemClicked: EventEmitter<string> = new EventEmitter<string>(); in Angular
    onItemSelected: (item: string) => void;
}

function ListGroup({ items: extraItems, heading, onItemSelected }: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    let [showAlert, setShowAlert] = useState(false);
    const messagefromListGroup = 'List Group Component';
    const helloWorld = 'Hello World';
    // we are setting the selectedIndex variable to default value of -1
    // setSelectedIndex is a function that will be used to update the selectedIndex variable
    let items = ['item1', 'item2', 'item3', 'item4', 'item5'];
    items = [...items, ...extraItems]; // adding the extra items form Parent component
    items = items.map((item) => item.toUpperCase());
    // items = [] -> this is for just testing
    const handleClick = (event: MouseEvent, item: string, index: number) => {
        console.log('MouseEvent', event, item, index);
        setSelectedIndex(index);
    }

    const handleButtonClick = () => {
        console.log('Button Clicked');
        setShowAlert(true);
    }

    const handleDismissClick = () => {
        console.log('Dismiss Clicked');
        setShowAlert(false);
    }

    return (
        <>
            <div className="container">
                {/* Below Alert is a child component to which we can send the  */}
                <Alert parentName={messagefromListGroup}>
                    <h1>List Group Message {helloWorld}</h1>
                </Alert>

                {showAlert && <DismissingAlert onDismiss={handleDismissClick}>
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                </DismissingAlert>}

                <MyButton customClass='' onClick={handleButtonClick}> My Button </MyButton>
                <h1>{heading}</h1>
                {/* Below line of code acts like a guard if case that stops rendering the following code, if the condition is met */}
                {items.length === 0 && <h2>There are no items!</h2>}
                <ul className="list-group">
                    {items.map((item, index) =>
                        // In React, you don't need to write the method as handleClick(event) -> you can just provide reference to handleClick by writing handleClick
                        // And when you want to pass multiple arguments to the method, you can use arrow function like below
                        <li
                            className={`list-group-item ${selectedIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={(event) => {
                                event.preventDefault();
                                handleClick(event, item, index);
                                onItemSelected(item); // this is similar to this.itemClicked.emit(item); in Angular
                            }
                            }>
                            {item}
                        </li>)}
                </ul>
            </div>
        </>
    );
}

export default ListGroup;