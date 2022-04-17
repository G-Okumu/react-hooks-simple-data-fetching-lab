// create your App component here
import React, {useState, useEffect} from "react";

function App(){
    const [dogImage, setDogImage] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDogImage(data.message);
            // setIsLoaded(true);

        })
    }, [])


    if (!dogImage) return <p>Loading...</p>;

    return (
        <>
        <img src={dogImage} alt="Dog image"/>
        </>
    )
}
export default App;