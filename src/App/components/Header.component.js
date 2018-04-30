import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../App.actions';

const countries = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NL', 'NZ', 'TR', 'US']

class Header extends Component {

    onInputChange(event) {
        // term
        const val = event.target.value;

        console.log('onInputChange', val);

        this.props.searchTermEntered(val);
    }

    onGenderSelectd(event) {
        const val = event.target.value;
        this.props.genderSelected(val);        
    }

    onNatSelected(event) {
        const val = event.target.value;
        this.props.natSelected(val);                      
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.filterData();
    }

    onClearClicked(event) {
        this.props.clearFilters();
    }
    
    render() {
        return (
            <header className="container default-padding">
                <div className="row default-padding">
                    <div className="col-8 offset-2 text-center">
                        <h4>Application</h4>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <div className="form-group">
                                    <input
                                    type="text"
                                    placeholder="Search"
                                    className="searchfield form-control text-center"
                                    value={this.props.searchTerm}
                                    // eslint-disable-next-line
                                    onChange={(ev) => this.onInputChange(ev)}
                                    />
                                </div>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-primary"  onClick={(ev) => {this.onSubmit(ev)}}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters  */}
                <div className="row">
                    <div className="col-4 offset-2 dropdown">
                        <select className="form-control form-control-sm" value={this.props.gender || 'Select'} onChange={(ev) => this.onGenderSelectd(ev)}>
                            <option>Select</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    <div className="col-4 dropdown">
                        <select className="form-control form-control-sm" value={this.props.nationality || 'Select'} onChange={(ev) => this.onNatSelected(ev)}>
                            <option>Select</option>
                            {countries.map( (country, index) => <option value={country} key={index}>{country}</option>)}
                        </select>
                    </div>
                </div>

                <div className="row default-padding">
                    <div className="col-12 text-center">
                        <button className="btn btn-secondary"  onClick={(ev) => {this.onClearClicked(ev)}}>Clear Filters</button>                        
                    </div>
                </div>

            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.AppReducer.searchTerm,
        nationality: state.AppReducer.nationality,
        gender: state.AppReducer.gender,
    }
};
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
  
