import './components.css';

export function TaskInput({ title, description, onTitleChange, onDescriptionChange }) {
    return (
        <div className="input-container">
            <div>
                <label htmlFor="title-input">Title of Task:</label>
                <input
                    id="title-input"
                    type="text"
                    value={title}
                    onChange={onTitleChange}
                />
            </div>
            <div>
                <label htmlFor="description-input">Description:</label>
                <input
                    id="description-input"
                    type="text"
                    value={description}
                    onChange={onDescriptionChange}
                />
            </div>
        </div>
    );
}
