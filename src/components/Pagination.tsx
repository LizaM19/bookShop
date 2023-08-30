import Service from "../Service.tsx";

function Pagination() {
    return (
        <>
            <button className="pagination" onClick={next}>
                Следующая страница
            </button>
        </>
    );
}

function next() {
    return (
        <>
           <Service startIndex = "15"/>
        </>
    );
}

export default Pagination;
