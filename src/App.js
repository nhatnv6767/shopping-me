const App = () => {

    const categories = [
        {
            id: 1,
            title: "Hats",
        }
    ]

    return (
        <div className="categories-container">
            {categories.map((category) => (
                <div className="category-container">
                    {/*<img src="" alt=""/>*/}
                    <div className="category-body-container">
                        <h2>Hats</h2>
                        <p>Shop Now</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default App;
