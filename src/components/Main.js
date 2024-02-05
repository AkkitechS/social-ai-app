import "./main.css";

function Main({ children }) {
    return (<main className="main">
        <div className="main-container">
            {children}
        </div>
    </main>);
}

export default Main;