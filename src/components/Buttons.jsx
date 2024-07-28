
const Buttons = ({modalId}) => {
    return (
        <button type="button" className="btn btn-outline-danger rounded-pill ps-4 pe-4 text-light" data-bs-toggle="modal" data-bs-target={modalId}>
                Read More
        </button>
    )
}

export default Buttons