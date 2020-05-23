import React from 'react';
import FloorplanAPI from '../api/FloorplanAPI';
import Floorplan from '../components/Floorplan/Floorplan';

class FloorplanContainer extends React.Component {
    state = {
        claim: '',
        fpName: ''
    }

    handleEdit = (floorplan) => {
        FloorplanAPI.update(floorplan)
        .then(res => {
            let floorplans = this.state.fpName;
            let floorplanToUpdate = floorplans.findIndex(floorplan._id === res.data._id);
            floorplans[floorplanToUpdate] = res.data;
            this.setState({
                floorplans
            })    
        })
    } 
    
    handleDelete = (id) => {
        FloorplanAPI.delete(id)
        .then(res => {
            let floorplans = this.state.fpName.filter(floorplan => {
                return floorplan._id !== id;
            })
            this.setState({
                floorplans
            })
        });
    }

    componentDidMount() {
        FloorplanAPI.index()
        .then(res => {
            if (res === 200) {
                this.setState({
                    fpName: res.data
                })
            }
        })
        .catch(err => console.log(`Floorplan Mount Error: ${err}`));
    }

    render() {
        let fpName = this.state.fpName;

        return(
            <div className="container">
                {fpName && fpName.map(floorplan => {
                    return <Floorplan floorplan={fpName} key={fpName._id} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
                })}
                {!fpName &&
                <>
                <p>No Floorplans!</p>
                </>
                }
            </div>
        )
    }
}

export default FloorplanContainer;