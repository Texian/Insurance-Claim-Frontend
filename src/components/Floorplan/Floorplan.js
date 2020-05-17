import React from 'react';
import './Floorplan.scss';

class Floorplan extends React.Component {
    state = {
        isEditing: false,
        fpName: this.props.floorplan.name,
        rooms: [this.props.floorplan.room],
    }

    handleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitEdit = (e) => {
        e.preventDefault();
        let floorplanToUpdate = {
            _id: this.props.floorplan.id,
            fpName: this.props.floorplan.name,
            rooms: this.props.floorplan.room
        }
        this.props.handleEdit(floorplanToUpdate);
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render() {
        return(
            <div className="floorplan">
                {
                    this.state.isEditing &&
                    <>
                    <form onSubmit={this.submitEdit}>
                        <label>Name:
                            <input 
                            type="text"
                            name="fpName"
                            value={this.state.fpName}
                            onChange={this.state.handleChange}
                            />
                        </label>
                        <br/>
                        <label>Room:
                            <input type="text"
                            name="room"
                            value={this.state.rooms}
                            onChange={this.state.handleChange}
                            />
                        </label>
                        <br/>
                        <button onClick={this.handleEdit}>Cancel</button>
                        <button type="submit">Submit</button>
                    </form>
                    </>
                }
                {
                    !this.state.isEditing &&
                    <>
                    <p>Name: {this.props.floorplan.name}</p>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={() => this.props.handleDelete(this.props.floorplan._id)}>Delete</button>
                    </>
                }
            </div>
        )
    }
}

export default Floorplan;